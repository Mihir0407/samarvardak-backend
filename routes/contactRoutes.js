import express from 'express';
import { submitContactForm, getAllContacts ,deleteContact } from '../controllers/contactController.js';

const router = express.Router();

router.post('/contact', submitContactForm);

// 🔥 New GET route to fetch submissions
router.get('/contacts', getAllContacts);
router.delete('/contacts/:id', deleteContact);

export default router;
