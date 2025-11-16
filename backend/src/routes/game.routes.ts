import { Router } from 'express';
import { gameController } from '../controllers/game.controller';
import { authenticate } from '../middleware/auth.middleware';

const router = Router();

router.post('/play', authenticate, gameController.playGame.bind(gameController));
router.get('/:gameId', gameController.getGame.bind(gameController));
router.get('/user/games', authenticate, gameController.getUserGames.bind(gameController));
router.post('/claim', authenticate, gameController.claimReward.bind(gameController));
router.post('/confirm', gameController.confirmGameResult.bind(gameController));
router.get('/recent/list', gameController.getRecentGames.bind(gameController));
router.get('/big-wins/list', gameController.getBigWins.bind(gameController));
router.get('/stats/overview', gameController.getGameStats.bind(gameController));
router.get('/player/pool', authenticate, gameController.getPlayerPoolData.bind(gameController));

export { router as gameRoutes };

