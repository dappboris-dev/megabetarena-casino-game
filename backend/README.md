# MegaBetArena Backend API

Backend API server for MegaBetArena Web3 Casino platform built on Solana blockchain.

## Features

- 🔐 Wallet-based authentication
- 🎮 Game management (Coinflip, Slots, Dice, etc.)
- 💰 Transaction tracking and verification
- 📊 Leaderboard and statistics
- 🔄 Real-time updates via WebSocket
- 🌐 Solana blockchain integration

## Tech Stack

- **Runtime**: Node.js with TypeScript
- **Framework**: Express.js
- **Database**: MongoDB with Mongoose
- **Blockchain**: Solana (Anchor framework)
- **WebSocket**: Socket.io
- **Validation**: Zod
- **Authentication**: JWT

## Project Structure

```
backend/
├── src/
│   ├── config/          # Configuration files
│   ├── controllers/      # Request handlers
│   ├── middleware/       # Express middleware
│   ├── models/          # MongoDB models
│   ├── routes/          # API routes
│   ├── services/        # Business logic
│   ├── utils/           # Utility functions
│   ├── validators/      # Request validation schemas
│   └── index.ts         # Application entry point
├── .env.example         # Environment variables template
└── package.json
```

## Installation

1. Install dependencies:
```bash
npm install
# or
pnpm install
```

2. Copy environment variables:
```bash
cp .env.example .env
```

3. Update `.env` with your configuration:
   - MongoDB connection string
   - Solana RPC URL
   - JWT secret
   - Program ID and other Solana settings

## Running the Server

### Development
```bash
npm run dev
```

### Production
```bash
npm run build
npm start
```

## API Endpoints

### Authentication
- `POST /api/auth/wallet` - Authenticate with wallet
- `GET /api/auth/profile` - Get user profile
- `PUT /api/auth/profile` - Update user profile

### Games
- `POST /api/games/play` - Play a game
- `GET /api/games/:gameId` - Get game details
- `GET /api/games/user/games` - Get user's games
- `POST /api/games/claim` - Claim reward
- `POST /api/games/confirm` - Confirm game result
- `GET /api/games/recent/list` - Get recent games
- `GET /api/games/big-wins/list` - Get big wins
- `GET /api/games/stats/overview` - Get game statistics
- `GET /api/games/player/pool` - Get player pool data

### Transactions
- `POST /api/transactions` - Create transaction
- `GET /api/transactions/:transactionId` - Get transaction
- `GET /api/transactions/user/list` - Get user transactions
- `POST /api/transactions/verify` - Verify transaction

### Leaderboard
- `GET /api/leaderboard` - Get leaderboard
- `GET /api/leaderboard/winners` - Get top winners

### Health Check
- `GET /health` - Server health status

## Environment Variables

See `.env.example` for all available environment variables.

## Development

The server uses TypeScript and runs with `tsx` in development mode for hot reloading.

## License

MIT

