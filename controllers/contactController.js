import Contact from '../models/Contact.js';

export const submitContactForm = async (req, res) => {
  try {
    const { name, email, message } = req.body;

    // Basic validation
    if (!name || !email || !message) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    const contact = new Contact({ name, email, message });
    await contact.save();
res.status(201).json({ success: true, message: 'Contact submitted successfully' });
  } catch (error) {
    console.error('❌ Error in submitContactForm:', error);
    res.status(500).json({ message: 'Server Error' });
  }
};

// 🔥 New controller for admin to fetch all contacts
export const getAllContacts = async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });
    res.json(contacts);
  } catch (error) {
    console.error('❌ Error in getAllContacts:', error);
    res.status(500).json({ message: 'Failed to fetch contacts' });
  }
};

export const deleteContact = async (req, res) => {
  try {
    const { id } = req.params;
    await Contact.findByIdAndDelete(id);
    res.json({ message: 'Contact deleted successfully' });
  } catch (error) {
    console.error('❌ Error in deleteContact:', error);
    res.status(500).json({ message: 'Failed to delete contact' });
  }
};
