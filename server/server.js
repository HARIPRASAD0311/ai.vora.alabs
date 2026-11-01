import http from 'http';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PORT = process.env.PORT || 5001;
const NOTIFICATION_WHATSAPP_NUMBER = '919442636873'; // 9442636873 with India country code
const NOTIFICATION_EMAIL = 'ai.vora.labs.team@gmail.com';
const STORAGE_FILE = path.join(__dirname, 'inquiries.json');

// Ensure storage file exists
if (!fs.existsSync(STORAGE_FILE)) {
  fs.writeFileSync(STORAGE_FILE, JSON.stringify([], null, 2));
}

const saveInquiry = (data) => {
  try {
    const raw = fs.readFileSync(STORAGE_FILE, 'utf8');
    const list = JSON.parse(raw || '[]');
    const record = {
      id: `enq_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`,
      timestamp: new Date().toISOString(),
      ...data,
    };
    list.unshift(record);
    fs.writeFileSync(STORAGE_FILE, JSON.stringify(list, null, 2));
    return record;
  } catch (err) {
    console.error('[Backend] Error writing to inquiries storage:', err);
    return null;
  }
};

const formatWhatsAppUrl = (enquiry) => {
  const text = [
    `*NEW CLIENT ENQUIRY — AI VORA LABS*`,
    `--------------------------------`,
    `👤 *Name:* ${enquiry.fullName || enquiry.name || 'Anonymous'}`,
    `📧 *Email:* ${enquiry.email || 'N/A'}`,
    `📱 *Phone:* ${enquiry.phone || 'N/A'}`,
    `🏢 *Company:* ${enquiry.companyName || enquiry.company || 'N/A'}`,
    `🛠 *Service:* ${enquiry.serviceRequired || enquiry.service || 'General Consulting'}`,
    enquiry.preferredTime ? `⏰ *Preferred Slot:* ${enquiry.preferredTime}` : null,
    enquiry.projectDetails ? `📝 *Details:* ${enquiry.projectDetails}` : null,
    enquiry.projectNote ? `📝 *Note:* ${enquiry.projectNote}` : null,
    `--------------------------------`,
    `📅 *Received:* ${new Date().toLocaleString()}`,
  ]
    .filter(Boolean)
    .join('\n');

  return `https://wa.me/${NOTIFICATION_WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
};

const server = http.createServer((req, res) => {
  // CORS Headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.writeHead(204);
    res.end();
    return;
  }

  // Health check
  if (req.url === '/api/health' && req.method === 'GET') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ status: 'ok', server: 'AI VORA LABS Enquiry Backend', targetNumber: '9442636873' }));
    return;
  }

  // List inquiries
  if (req.url === '/api/inquiries' && req.method === 'GET') {
    try {
      const data = fs.readFileSync(STORAGE_FILE, 'utf8');
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(data);
    } catch {
      res.writeHead(500, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ error: 'Failed to read inquiries' }));
    }
    return;
  }

  // Handle Enquiry or Book Call Submission
  if ((req.url === '/api/enquiry' || req.url === '/api/book-call') && req.method === 'POST') {
    let body = '';
    req.on('data', (chunk) => {
      body += chunk;
    });

    req.on('end', () => {
      try {
        const payload = JSON.parse(body || '{}');
        const record = saveInquiry(payload);
        const whatsappUrl = formatWhatsAppUrl(payload);

        // Terminal notification
        console.log('\n=============================================');
        console.log('🔔 [NOTIFICATION] NEW CLIENT ENQUIRY RECEIVED');
        console.log('=============================================');
        console.log(`👤 Name:    ${payload.fullName || payload.name}`);
        console.log(`📧 Email:   ${payload.email}`);
        console.log(`📱 Phone:   ${payload.phone || 'N/A'}`);
        console.log(`🛠 Service: ${payload.serviceRequired || payload.service}`);
        console.log(`💬 WhatsApp Alert Dispatch to: +${NOTIFICATION_WHATSAPP_NUMBER}`);
        console.log(`📬 Mail Alert Target:          ${NOTIFICATION_EMAIL}`);
        console.log('=============================================\n');

        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(
          JSON.stringify({
            success: true,
            message: 'Enquiry received successfully',
            inquiryId: record?.id,
            targetWhatsAppNumber: NOTIFICATION_WHATSAPP_NUMBER,
            targetEmail: NOTIFICATION_EMAIL,
            whatsappUrl,
          })
        );
      } catch (err) {
        console.error('[Backend] Parse error:', err);
        res.writeHead(400, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: 'Invalid JSON payload' }));
      }
    });
    return;
  }

  // 404 for other endpoints
  res.writeHead(404, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify({ error: 'Endpoint not found' }));
});

server.listen(PORT, () => {
  console.log(`[AI VORA LABS Backend] Server listening on http://localhost:${PORT}`);
  console.log(`[AI VORA LABS Backend] WhatsApp Alerts routed to: +${NOTIFICATION_WHATSAPP_NUMBER}`);
  console.log(`[AI VORA LABS Backend] Email Alerts routed to:    ${NOTIFICATION_EMAIL}`);
});
