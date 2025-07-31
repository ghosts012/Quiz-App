import express from 'express';
import { createQuiz } from '../../../controllers/quiz-controller.js';
const router = express.Router();
router.post('/create-quiz', createQuiz);
export default router;