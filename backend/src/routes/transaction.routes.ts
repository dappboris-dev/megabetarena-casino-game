import { Router } from 'express';
import { transactionController } from '../controllers/transaction.controller';
import { authenticate } from '../middleware/auth.middleware';

const router = Router();

router.post('/', authenticate, transactionController.createTransaction.bind(transactionController));
router.get('/:transactionId', transactionController.getTransaction.bind(transactionController));
router.get('/user/list', authenticate, transactionController.getUserTransactions.bind(transactionController));
router.post('/verify', transactionController.verifyTransaction.bind(transactionController));

export { router as transactionRoutes };

