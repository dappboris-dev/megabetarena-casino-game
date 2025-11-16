import { Router } from 'express';
import { userController } from '../controllers/user.controller';

const router = Router();

router.get('/', userController.getLeaderboard.bind(userController));
router.get('/winners', userController.getTopWinners.bind(userController));

export { router as leaderboardRoutes };

