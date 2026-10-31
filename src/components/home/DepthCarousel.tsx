import React, { useRef, useEffect, useState, useMemo, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { motion, useMotionValue, useSpring, useTransform, MotionValue } from 'framer-motion';
import { Project } from '../../types';
import { ArrowLeft, ArrowRight, ArrowUpRight } from 'lucide-react';

interface DepthCarouselProps {
  projects: Project[];
}

export const DepthCarousel: React.FC<DepthCarouselProps> = ({ projects }) => {
  const n = projects.length;
  const outerRef = useRef<HTMLDivElement>(null);
  const isDraggingRef = useRef(false);

  // Motion value for current virtual position (0 to n-1)
  const target = useMotionValue(0);
  const progress = useSpring(target, { stiffness: 170, damping: 28, mass: 1, restDelta: 0.001 });

  const [active, setActive] = useState(0);
  const [dragging, setDragging] = useState(false);
  const [containerWidth, setContainerWidth] = useState(1200);

  // Measure container for responsive scaling
  useEffect(() => {
    if (!outerRef.current) return;
    const updateWidth = () => {
      if (outerRef.current) {
        setContainerWidth(outerRef.current.offsetWidth || 1200);
      }
    };
    updateWidth();

    const observer = new ResizeObserver(updateWidth);
    observer.observe(outerRef.current);
    window.addEventListener('resize', updateWidth);

    return () => {
      observer.disconnect();
      window.removeEventListener('resize', updateWidth);
    };
  }, []);

  const isMobile = containerWidth < 640;
  const isTablet = containerWidth >= 640 && containerWidth < 1024;

  const cardWidth = isMobile ? Math.min(300, containerWidth * 0.8) : isTablet ? 400 : 500;
  const cardHeight = isMobile ? cardWidth * 0.72 : cardWidth * 0.68;
  const sideScale = isMobile ? 0.74 : 0.68;
  const spacing = isMobile ? 20 : 40;
  const depth = isMobile ? 90 : 150;
  const curve = isMobile ? 26 : 38;
  const perspective = isMobile ? 900 : 1300;
  const maxBlur = isMobile ? 3 : 5;

  const cfg = useMemo(
    () => ({
      cardWidth,
      cardHeight,
      sideScale,
      spacing,
      depth,
      curve,
      maxBlur,
    }),
    [cardWidth, cardHeight, sideScale, spacing, depth, curve, maxBlur]
  );

  // Clamp helper
  const clampT = useCallback((v: number) => Math.max(0, Math.min(n - 1, v)), [n]);

  // Snap commit
  const commit = useCallback(
    (v: number) => {
      const t = clampT(Math.round(v));
      target.set(t);
      setActive(t);
    },
    [clampT, target]
  );

  // Wheel and Pointer drag interaction
  useEffect(() => {
    const el = outerRef.current;
    if (!el) return;

    let snapTimer: number | null = null;
    const scheduleSnap = () => {
      if (snapTimer) window.clearTimeout(snapTimer);
      snapTimer = window.setTimeout(() => commit(target.get()), 150);
    };

    const onWheel = (e: WheelEvent) => {
      const d = Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.deltaY;
      if (Math.abs(d) < 0.5) return;
      e.preventDefault();
      target.set(clampT(target.get() + d * 0.005));
      scheduleSnap();
    };

    let down = false;
    let startX = 0;
    let startVal = 0;
    let lastX = 0;
    let lastT = 0;
    let vel = 0;
    const perCard = Math.max(120, cardWidth * 0.55);

    const onDown = (e: PointerEvent) => {
      // Don't capture when clicking control buttons
      if ((e.target as HTMLElement)?.closest('button')) return;
      down = true;
      isDraggingRef.current = false;
      startX = lastX = e.clientX;
      startVal = target.get();
      lastT = performance.now();
      vel = 0;
    };

    const onMove = (e: PointerEvent) => {
      if (!down) return;
      const dx = e.clientX - startX;
      // Only initiate drag mode after exceeding threshold
      if (Math.abs(dx) > 7) {
        if (!isDraggingRef.current) {
          isDraggingRef.current = true;
          setDragging(true);
          try {
            el.setPointerCapture?.(e.pointerId);
          } catch {}
        }
        const now = performance.now();
        target.set(clampT(startVal - dx / perCard));
        const dt = now - lastT;
        if (dt > 0) vel = (e.clientX - lastX) / dt;
        lastX = e.clientX;
        lastT = now;
      }
    };

    const onUp = (e: PointerEvent) => {
      if (!down) return;
      down = false;
      if (isDraggingRef.current) {
        try {
          el.releasePointerCapture?.(e.pointerId);
        } catch {}
        const projected = target.get() - (vel * 140) / perCard;
        commit(projected);
        setTimeout(() => {
          isDraggingRef.current = false;
          setDragging(false);
        }, 50);
      } else {
        setDragging(false);
      }
    };

    el.addEventListener('wheel', onWheel, { passive: false });
    el.addEventListener('pointerdown', onDown);
    window.addEventListener('pointermove', onMove);
    window.addEventListener('pointerup', onUp);

    return () => {
      if (snapTimer) window.clearTimeout(snapTimer);
      el.removeEventListener('wheel', onWheel);
      el.removeEventListener('pointerdown', onDown);
      window.removeEventListener('pointermove', onMove);
      window.removeEventListener('pointerup', onUp);
    };
  }, [cardWidth, clampT, commit, n, target]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        e.preventDefault();
        commit(active - 1);
      } else if (e.key === 'ArrowRight') {
        e.preventDefault();
        commit(active + 1);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [active, commit]);

  return (
    <div
      ref={outerRef}
      className="relative w-full overflow-hidden flex flex-col items-center justify-center select-none py-12 sm:py-16 touch-pan-y"
      style={{
        cursor: dragging ? 'grabbing' : 'grab',
      }}
    >
      {/* Intense Ambient Radial Lighting Backstage */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[450px] bg-gradient-to-r from-teal-accent/[0.14] via-cyan-400/[0.1] to-transparent rounded-full blur-[140px] pointer-events-none" />

      {/* 3D Viewport Stage with Perspective */}
      <div
        className="relative my-4 flex items-center justify-center"
        style={{
          width: cardWidth,
          height: cardHeight * (isMobile ? 1.4 : 1.45),
          transformStyle: 'preserve-3d',
          perspective,
          perspectiveOrigin: 'center center',
        }}
      >
        {projects.map((project, index) => (
          <DepthCard
            key={project.id}
            project={project}
            index={index}
            progress={progress}
            cfg={cfg}
            isActive={index === active}
            isDraggingRef={isDraggingRef}
          />
        ))}
      </div>

      {/* Edge Gradient Mask Blurs (Left & Right) */}
      <div className="hidden sm:block absolute top-0 bottom-0 left-0 w-[14%] pointer-events-none z-[1200] [background:linear-gradient(to_right,#060a14,transparent)]" />
      <div className="hidden sm:block absolute top-0 bottom-0 right-0 w-[14%] pointer-events-none z-[1200] [background:linear-gradient(to_left,#060a14,transparent)]" />

      {/* Navigation Controls: Arrows, Counter & Status */}
      <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-6 z-[1300] relative">
        <div className="flex items-center gap-4">
          <button
            onClick={() => commit(active - 1)}
            disabled={active === 0}
            className="w-11 h-11 rounded-full bg-slate-900/80 border border-white/10 hover:border-teal-accent/50 hover:bg-slate-900 text-slate-300 hover:text-white flex items-center justify-center transition-all duration-200 disabled:opacity-30 disabled:pointer-events-none shadow-md"
            aria-label="Previous project"
          >
            <ArrowLeft className="w-4 h-4" />
          </button>

          {/* Dots Indicator */}
          <div className="flex items-center gap-2 px-3.5 py-2 rounded-full bg-slate-900/60 border border-white/[0.08] backdrop-blur-md">
            {projects.map((_, i) => (
              <button
                key={i}
                onClick={() => commit(i)}
                className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                  i === active
                    ? 'w-7 bg-teal-accent shadow-[0_0_12px_#00f5d4]'
                    : 'w-2 bg-white/20 hover:bg-white/40'
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>

          <button
            onClick={() => commit(active + 1)}
            disabled={active === n - 1}
            className="w-11 h-11 rounded-full bg-slate-900/80 border border-white/10 hover:border-teal-accent/50 hover:bg-slate-900 text-slate-300 hover:text-white flex items-center justify-center transition-all duration-200 disabled:opacity-30 disabled:pointer-events-none shadow-md"
            aria-label="Next project"
          >
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Counter & Hint */}
        <div className="flex items-center gap-3 text-xs font-mono text-slate-400">
          <span className="text-white font-semibold">
            {String(active + 1).padStart(2, '0')}
          </span>
          <span className="text-slate-600">/</span>
          <span className="text-slate-500">{String(n).padStart(2, '0')}</span>
          <span className="hidden sm:inline-block text-slate-600">|</span>
          <span className="hidden sm:inline-block text-[11px] uppercase tracking-wider text-teal-accent/80">
            Scroll or Drag
          </span>
        </div>
      </div>
    </div>
  );
};

// 3D Depth Card Component
interface DepthCardProps {
  project: Project;
  index: number;
  progress: MotionValue<number>;
  cfg: {
    cardWidth: number;
    cardHeight: number;
    sideScale: number;
    spacing: number;
    depth: number;
    curve: number;
    maxBlur: number;
  };
  isActive: boolean;
  isDraggingRef: React.MutableRefObject<boolean>;
}

const DepthCard: React.FC<DepthCardProps> = ({
  project,
  index,
  progress,
  cfg,
  isActive,
  isDraggingRef,
}) => {
  const offset = useTransform(progress, (p: number) => index - p);

  // Exact 3D transform functions matching Framer DepthCarousel mathematics
  const x = useTransform(offset, (o: number) => {
    const s = Math.sign(o);
    const a = Math.abs(o);
    const first = cfg.cardWidth * 0.46 + cfg.spacing;
    const step = cfg.cardWidth * cfg.sideScale * 0.62;
    return a <= 1 ? o * first : s * (first + (a - 1) * step);
  });

  const z = useTransform(offset, (o: number) => -Math.min(Math.abs(o), 4) * cfg.depth);
  const rotateY = useTransform(offset, (o: number) => -Math.max(-1, Math.min(1, o)) * cfg.curve);
  const scale = useTransform(offset, (o: number) => 1 - (1 - cfg.sideScale) * Math.min(Math.abs(o), 1));
  const opacity = useTransform(offset, (o: number) => 1 - Math.min(Math.max(Math.abs(o) - 3, 0) / 1.3, 1));
  const filter = useTransform(
    offset,
    (o: number) => `blur(${Math.min(Math.max(Math.abs(o) - 0.35, 0) * 2.6, cfg.maxBlur)}px)`
  );
  const zIndex = useTransform(offset, (o: number) => Math.round(1000 - Math.abs(o) * 10));

  return (
    <motion.div
      style={{
        position: 'absolute',
        left: 0,
        top: 0,
        width: cfg.cardWidth,
        height: cfg.cardHeight,
        transformStyle: 'preserve-3d',
        x,
        z,
        rotateY,
        scale,
        opacity,
        filter,
        zIndex,
      }}
      className="group"
    >
      <Link
        to="/work"
        onClick={(e) => {
          if (isDraggingRef.current) {
            e.preventDefault();
            e.stopPropagation();
          }
        }}
        className="block w-full h-full cursor-pointer focus:outline-none"
        aria-label={`View ${project.title} on Work page`}
      >
        {/* Main Card Frame */}
        <div
          className={`relative w-full h-full rounded-3xl overflow-hidden bg-[#0c1222] border transition-all duration-300 ${
            isActive
              ? 'border-teal-accent/50 shadow-[0_25px_60px_-15px_rgba(0,245,212,0.3)] ring-1 ring-teal-accent/30'
              : 'border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.7)]'
          }`}
        >
          {/* Full Image */}
          <img
            src={project.image}
            alt={project.title}
            draggable={false}
            className="w-full h-full object-cover object-top select-none pointer-events-none group-hover:scale-105 transition-transform duration-700 ease-out"
          />

          {/* Ambient Dark Gradient Overlays for Contrast */}
          <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/40 to-transparent pointer-events-none" />

          {/* Top Badges Overlay */}
          <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10 pointer-events-none">
            <span className="px-3 py-1 rounded-full text-[11px] font-semibold uppercase tracking-wider bg-navy-950/85 backdrop-blur-md text-teal-accent border border-teal-accent/30 shadow-md">
              {project.category}
            </span>

            {project.liveUrl ? (
              <span className="flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-mono font-bold tracking-wide bg-teal-accent/20 text-teal-accent border border-teal-accent/50 backdrop-blur-md shadow-[0_0_12px_rgba(0,245,212,0.3)]">
                <span className="w-1.5 h-1.5 rounded-full bg-teal-accent animate-pulse" />
                Live Project
              </span>
            ) : project.isSampleOrConcept ? (
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono tracking-wide bg-slate-900/90 text-slate-400 border border-white/10 backdrop-blur-md">
                Sample
              </span>
            ) : null}
          </div>

          {/* Bottom Title & Action Overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6 z-10 flex items-center justify-between">
            <div className="flex-1 pr-3">
              <h3 className="text-lg sm:text-2xl font-bold font-display text-white tracking-tight leading-tight group-hover:text-teal-accent transition-colors">
                {project.title}
              </h3>
              {isActive && (
                <span className="text-[11px] font-mono text-teal-accent font-semibold block mt-1 tracking-wide">
                  View Project in Work →
                </span>
              )}
            </div>

            <div
              className={`w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300 shrink-0 ${
                isActive
                  ? 'bg-teal-accent text-navy-950 shadow-[0_0_15px_#00f5d4]'
                  : 'bg-white/10 border border-white/15 text-slate-300'
              }`}
            >
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform stroke-[2.5]" />
            </div>
          </div>
        </div>
      </Link>

      {/* Mirrored Floor Reflection (Signature Framer Depth Feature) */}
      <div
        className="pointer-events-none"
        style={{
          position: 'absolute',
          left: 0,
          top: '100%',
          marginTop: 10,
          width: cfg.cardWidth,
          height: cfg.cardHeight * 0.42,
          borderRadius: 24,
          overflow: 'hidden',
          transform: 'scaleY(-1)',
          transformOrigin: 'top center',
          opacity: isActive ? 0.35 : 0.15,
          WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,0.6), transparent 70%)',
          maskImage: 'linear-gradient(to bottom, rgba(0,0,0,0.6), transparent 70%)',
        }}
      >
        <img
          src={project.image}
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover object-top select-none filter blur-[1px]"
        />
      </div>
    </motion.div>
  );
};
