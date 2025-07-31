import express from 'express';
import quizRoutes from './quiz-routes.js';
import userRoutes from './user-routes.js';
export const indexRoute = express.Router();

indexRoute.use('/user', userRoutes);
indexRoute.use('/quiz', quizRoutes);
