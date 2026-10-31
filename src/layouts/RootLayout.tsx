import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Navbar } from '../components/common/Navbar';
import { Footer } from '../components/common/Footer';
import { ScrollToTop } from '../components/common/ScrollToTop';
import { BookCallModal } from '../components/common/BookCallModal';

export const RootLayout: React.FC = () => {
  const [isBookModalOpen, setIsBookModalOpen] = useState(false);

  const openBookModal = () => setIsBookModalOpen(true);
  const closeBookModal = () => setIsBookModalOpen(false);

  return (
    <div className="min-h-screen flex flex-col bg-[#05070e] text-slate-100 selection:bg-teal-accent/30 selection:text-white">
      <ScrollToTop />
      <Navbar />
      
      <main className="flex-1">
        <Outlet context={{ openBookModal }} />
      </main>

      <Footer />

      <BookCallModal isOpen={isBookModalOpen} onClose={closeBookModal} />
    </div>
  );
};

