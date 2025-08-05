import express from 'express';
import { submitFeedback,getAllFeedback,deleteFeedback } from '../controllers/feedbackController.js';

const router = express.Router();

router.post('/', submitFeedback);
router.get('/', getAllFeedback);
router.delete('/:id', deleteFeedback); 

export default router;
