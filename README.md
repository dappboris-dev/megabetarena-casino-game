# MegaBetArena - Web3 Casino Platform

A decentralized casino platform built on Solana blockchain, featuring multiple games, real-time betting, and transparent on-chain transactions.

## Project Structure

```
megabetarena/
├── backend/              # Backend API server (Express + TypeScript)
│   ├── src/
│   │   ├── config/      # Configuration files
│   │   ├── controllers/ # Request handlers
│   │   ├── middleware/  # Express middleware
│   │   ├── models/      # MongoDB models
│   │   ├── routes/      # API routes
│   │   ├── services/    # Business logic
│   │   ├── utils/       # Utility functions
│   │   ├── validators/  # Request validation
│   │   └── index.ts     # Entry point
│   └── package.json
│
├── frontend/             # Frontend application (Next.js)
│   ├── app/             # Next.js app directory
│   ├── components/       # React components
│   ├── hooks/           # Custom React hooks
│   ├── lib/             # Utility libraries
│   └── package.json
│
└── contracts/            # Solana smart contracts (Anchor)
    └── solana/          # Solana programs
        ├── programs/    # Anchor programs
        │   └── coinflip/
        ├── tests/       # Contract tests
        └── Anchor.toml
```

## Features

- 🎮 **Multiple Casino Games**: Coinflip, Slots, Dice, and more
- 🔐 **Wallet Authentication**: Secure Solana wallet-based authentication
- 💰 **On-Chain Transactions**: All bets and payouts on Solana blockchain
- 📊 **Leaderboards**: Track top players and big wins
- 🔄 **Real-Time Updates**: WebSocket support for live game updates
- 🎯 **Transparent**: All game results verifiable on-chain

## Tech Stack

### Backend
- Node.js + TypeScript
- Express.js
- MongoDB + Mongoose
- Solana Web3.js + Anchor
- Socket.io
- JWT Authentication

### Frontend
- Next.js 16
- React 19
- TypeScript
- Tailwind CSS
- shadcn/ui components

### Smart Contracts
- Solana (Anchor framework)
- Rust

## Getting Started

### Prerequisites

- Node.js 18+ and npm/pnpm
- MongoDB (local or cloud)
- Solana CLI tools (for contract deployment)
- Rust and Anchor (for contract development)

### Backend Setup

1. Navigate to backend directory:
```bash
cd backend
```

2. Install dependencies:
```bash
npm install
```

3. Copy environment variables:
```bash
cp .env.example .env
```

4. Update `.env` with your configuration

5. Run development server:
```bash
npm run dev
```

### Frontend Setup

1. Navigate to frontend directory:
```bash
cd frontend
```

2. Install dependencies:
```bash
pnpm install
```

3. Run development server:
```bash
pnpm dev
```

### Smart Contracts Setup

1. Navigate to contracts directory:
```bash
cd contracts/solana
```

2. Build contracts:
```bash
anchor build
```

3. Run tests:
```bash
anchor test
```

4. Deploy (to devnet):
```bash
anchor deploy
```

## Environment Variables

### Backend (.env)
- `MONGODB_URI` - MongoDB connection string
- `JWT_SECRET` - Secret key for JWT tokens
- `SOLANA_RPC_URL` - Solana RPC endpoint
- `PROGRAM_ID` - Deployed program ID
- See `backend/.env.example` for full list

## API Documentation

The backend API provides endpoints for:
- Authentication (`/api/auth`)
- Games (`/api/games`)
- Transactions (`/api/transactions`)
- Leaderboard (`/api/leaderboard`)

See `backend/README.md` for detailed API documentation.

## Development

### Running All Services

1. Start MongoDB
2. Start backend: `cd backend && npm run dev`
3. Start frontend: `cd frontend && pnpm dev`

### Testing

- Backend: `cd backend && npm test`
- Contracts: `cd contracts/solana && anchor test`

## License

MIT

## Contributing

Contributions are welcome! Please open an issue or submit a pull request.

