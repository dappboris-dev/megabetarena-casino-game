import express from 'express';
import cors from 'cors';
import { createServer } from 'http';
import { Server } from 'socket.io';

import { errorHandler } from './middleware/error-handler';
import { authRoutes } from './routes/auth.routes';
import { gameRoutes } from './routes/game.routes';
import { userRoutes } from './routes/user.routes';
import { transactionRoutes } from './routes/transaction.routes';
import { leaderboardRoutes } from './routes/leaderboard.routes';
import { connectDatabase } from './config/database.config';
import { initializeSolana } from './services/solana.service';
import { config } from './config/env.config';
import { logger } from './utils/logger.util';

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer, {
  cors: {
    origin: config.corsOrigin,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
  },
});

// Middleware
app.use(cors({
  origin: config.corsOrigin,
  credentials: true,
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Health check
app.get('/health', (req, res) => {
  res.json({ 
    status: 'ok', 
    timestamp: new Date().toISOString(),
    environment: config.nodeEnv,
  });
});

// API Routes
app.use('/api/auth', authRoutes);
app.use('/api/games', gameRoutes);
app.use('/api/users', userRoutes);
app.use('/api/transactions', transactionRoutes);
app.use('/api/leaderboard', leaderboardRoutes);

// WebSocket connection handling
io.on('connection', (socket) => {
  logger.info('Client connected', { socketId: socket.id });

  socket.on('disconnect', () => {
    logger.info('Client disconnected', { socketId: socket.id });
  });

  // Join user room for personalized updates
  socket.on('join-user-room', (userId: string) => {
    socket.join(`user:${userId}`);
    logger.debug('User joined room', { userId, socketId: socket.id });
  });

  // Join game room for game-specific updates
  socket.on('join-game-room', (gameId: string) => {
    socket.join(`game:${gameId}`);
    logger.debug('User joined game room', { gameId, socketId: socket.id });
  });
});

// Export io for use in other modules
export { io };

// Error handling middleware (must be last)
app.use(errorHandler);

// Initialize and start server
async function startServer() {
  try {
    // Connect to database
    await connectDatabase();
    
    // Initialize Solana connection
    initializeSolana();
    
    // Start server
    httpServer.listen(config.port, () => {
      logger.info(`🚀 Server running on port ${config.port}`);
      logger.info(`📡 WebSocket server ready`);
      logger.info(`🌍 Environment: ${config.nodeEnv}`);
    });
  } catch (error) {
    logger.error('Failed to start server', error);
    process.exit(1);
  }
}

// Handle graceful shutdown
process.on('SIGTERM', async () => {
  logger.info('SIGTERM signal received: closing HTTP server');
  httpServer.close(() => {
    logger.info('HTTP server closed');
    process.exit(0);
  });
});

process.on('SIGINT', async () => {
  logger.info('SIGINT signal received: closing HTTP server');
  httpServer.close(() => {
    logger.info('HTTP server closed');
    process.exit(0);
  });
});

startServer();

