import express from 'express';
import Contact from '../models/Contact.js';

const router = express.Router();

// Get all contact messages
router.get('/admin/contacts', async (req, res) => {
  try {
    const messages = await Contact.find().sort({ createdAt: -1 });
    res.json(messages);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch contacts' });
  }
});

export default router;
