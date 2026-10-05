import express, { Request, Response } from 'express';
import fs from 'fs';
import path from 'path';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = parseInt(process.env.PORT || '3000', 10);

// Parse JSON request bodies
app.use(express.json());

// Messages data storage path
const dataDir = path.resolve(__dirname, 'data');
const messagesFile = path.resolve(dataDir, 'messages.json');

// Ensure data folder and messages.json file exist
if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir, { recursive: true });
}
if (!fs.existsSync(messagesFile)) {
  fs.writeFileSync(messagesFile, JSON.stringify([], null, 2), 'utf-8');
}

/**
 * Helper to safely save new contact submissions to disk
 */
function saveMessage(entry: {
  id: string;
  name: string;
  email: string;
  message: string;
  timestamp: string;
  ip: string;
}) {
  try {
    const raw = fs.readFileSync(messagesFile, 'utf-8');
    const existing = JSON.parse(raw || '[]');
    existing.push(entry);
    fs.writeFileSync(messagesFile, JSON.stringify(existing, null, 2), 'utf-8');
    return true;
  } catch (err) {
    console.error('Error saving contact message:', err);
    return false;
  }
}

/**
 * POST /api/contact
 * Backend endpoint to receive, validate, and store contact form submissions
 */
app.post('/api/contact', async (req: Request, res: Response) => {
  try {
    const { name, email, message, _honeypot } = req.body;

    // 1. Honeypot check: If the hidden field was filled out, it's an automated bot.
    // We return a 200 OK so the bot thinks it succeeded, but we silently discard it.
    if (_honeypot && _honeypot.trim() !== '') {
      console.log('🤖 Spam bot submission blocked via honeypot.');
      return res.status(200).json({
        success: true,
        message: 'Thank you! Your message has been received.'
      });
    }

    // 2. Validate Name
    if (!name || typeof name !== 'string' || name.trim().length < 2) {
      return res.status(400).json({
        error: 'Please provide a valid name (at least 2 characters).'
      });
    }

    // 3. Validate Email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || typeof email !== 'string' || !emailRegex.test(email.trim())) {
      return res.status(400).json({
        error: 'Please provide a valid email address.'
      });
    }

    // 4. Validate Message
    if (!message || typeof message !== 'string' || message.trim().length < 12) {
      return res.status(400).json({
        error: 'Please provide a message with at least 12 characters.'
      });
    }

    const newEntry = {
      id: Date.now().toString(36) + Math.random().toString(36).substring(2, 6),
      name: name.trim(),
      email: email.trim(),
      message: message.trim(),
      timestamp: new Date().toISOString(),
      ip: (req.headers['x-forwarded-for'] as string) || req.socket.remoteAddress || 'unknown'
    };

    // Save message locally
    saveMessage(newEntry);

    console.log(`✉️ [New Message from ${newEntry.name} (${newEntry.email})]: "${newEntry.message.substring(0, 60)}..."`);

    // Optional: If you provide a WEBHOOK_URL in .env (like Discord, Slack, or Zapier), notify it!
    const webhookUrl = process.env.WEBHOOK_URL;
    if (webhookUrl) {
      fetch(webhookUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          content: `📬 **New Portfolio Contact Message**\n**From:** ${newEntry.name} (${newEntry.email})\n**Message:**\n${newEntry.message}`
        })
      }).catch((e) => console.error('Failed to notify webhook:', e));
    }

    return res.status(200).json({
      success: true,
      message: 'Thank you! Your message has been sent successfully.'
    });
  } catch (error) {
    console.error('Server error handling /api/contact:', error);
    return res.status(500).json({
      error: 'An internal server error occurred while processing your message.'
    });
  }
});

/**
 * Mount Vite development middleware or production static files
 */
async function startServer() {
  if (process.env.NODE_ENV === 'production') {
    // Serve static files from dist in production
    app.use(express.static(path.resolve(__dirname, 'dist')));
    app.get('*', (_req: Request, res: Response) => {
      res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
    });
  } else {
    // Mount Vite dev server middleware
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa'
    });
    app.use(vite.middlewares);
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`🚀 Portfolio server running on http://localhost:${PORT}`);
  });
}

startServer();
