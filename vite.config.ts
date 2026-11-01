import { defineConfig, Plugin } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import fs from 'fs';

const enquiryApiPlugin = (): Plugin => ({
  name: 'enquiry-api',
  configureServer(server) {
    server.middlewares.use((req, res, next) => {
      if ((req.url === '/api/enquiry' || req.url === '/api/book-call') && req.method === 'POST') {
        let body = '';
        req.on('data', (chunk) => {
          body += chunk;
        });
        req.on('end', () => {
          try {
            const payload = JSON.parse(body || '{}');
            const storageFile = path.resolve(__dirname, 'server/inquiries.json');
            let list = [];
            if (fs.existsSync(storageFile)) {
              try {
                list = JSON.parse(fs.readFileSync(storageFile, 'utf8') || '[]');
              } catch {
                list = [];
              }
            } else {
              fs.mkdirSync(path.dirname(storageFile), { recursive: true });
            }
            const record = {
              id: `enq_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`,
              timestamp: new Date().toISOString(),
              ...payload,
            };
            list.unshift(record);
            fs.writeFileSync(storageFile, JSON.stringify(list, null, 2));

            console.log('\n🔔 [AI VORA LABS API] NEW ENQUIRY RECEIVED:');
            console.log('   👤 Name:   ', payload.fullName || payload.name);
            console.log('   📧 Email:  ', payload.email);
            console.log('   📱 Phone:  ', payload.phone || 'N/A');
            console.log('   💬 WhatsApp Target: +91 9442636873');
            console.log('   📬 Email Target:    ai.vora.labs.team@gmail.com\n');

            const text = [
              `*NEW CLIENT ENQUIRY — AI VORA LABS*`,
              `--------------------------------`,
              `👤 *Name:* ${payload.fullName || payload.name || 'Anonymous'}`,
              `📧 *Email:* ${payload.email || 'N/A'}`,
              `📱 *Phone:* ${payload.phone || 'N/A'}`,
              `🏢 *Company:* ${payload.companyName || payload.company || 'N/A'}`,
              `🛠 *Service:* ${payload.serviceRequired || payload.service || 'General Consulting'}`,
              payload.preferredTime ? `⏰ *Preferred Slot:* ${payload.preferredTime}` : null,
              payload.projectDetails ? `📝 *Details:* ${payload.projectDetails}` : null,
              payload.projectNote ? `📝 *Note:* ${payload.projectNote}` : null,
              `--------------------------------`,
              `📅 *Received:* ${new Date().toLocaleString()}`,
            ]
              .filter(Boolean)
              .join('\n');

            const whatsappUrl = `https://wa.me/919442636873?text=${encodeURIComponent(text)}`;

            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(
              JSON.stringify({
                success: true,
                message: 'Enquiry received successfully',
                inquiryId: record.id,
                targetWhatsAppNumber: '919442636873',
                targetEmail: 'ai.vora.labs.team@gmail.com',
                whatsappUrl,
              })
            );
          } catch {
            res.writeHead(400, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ error: 'Invalid JSON payload' }));
          }
        });
      } else {
        next();
      }
    });
  },
});

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), enquiryApiPlugin()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    port: 3000,
    host: true,
  },
});

