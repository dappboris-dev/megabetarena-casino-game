import { Router } from 'express';
import { userController } from '../controllers/user.controller';

const router = Router();

router.get('/leaderboard', userController.getLeaderboard.bind(userController));
router.get('/top-winners', userController.getTopWinners.bind(userController));

export { router as userRoutes };

