# MegaBetArena Project Structure

## Overview

This document describes the restructured project organization for MegaBetArena Web3 Casino.

## Directory Structure

```
megabetarena/
├── backend/                    # Backend API Server
│   ├── src/
│   │   ├── config/            # Configuration files
│   │   │   ├── database.config.ts
│   │   │   └── env.config.ts
│   │   ├── controllers/       # Request handlers (MVC pattern)
│   │   │   ├── auth.controller.ts
│   │   │   ├── game.controller.ts
│   │   │   ├── transaction.controller.ts
│   │   │   └── user.controller.ts
│   │   ├── middleware/        # Express middleware
│   │   │   ├── auth.middleware.ts
│   │   │   └── error-handler.ts
│   │   ├── models/            # MongoDB models (Mongoose)
│   │   │   ├── game.model.ts
│   │   │   ├── transaction.model.ts
│   │   │   └── user.model.ts
│   │   ├── routes/            # API route definitions
│   │   │   ├── auth.routes.ts
│   │   │   ├── game.routes.ts
│   │   │   ├── leaderboard.routes.ts
│   │   │   ├── transaction.routes.ts
│   │   │   └── user.routes.ts
│   │   ├── services/          # Business logic layer
│   │   │   ├── game.service.ts
│   │   │   ├── solana-game.service.ts
│   │   │   ├── solana.service.ts
│   │   │   ├── transaction.service.ts
│   │   │   └── user.service.ts
│   │   ├── utils/             # Utility functions
│   │   │   ├── logger.util.ts
│   │   │   ├── response.util.ts
│   │   │   └── validation.util.ts
│   │   ├── validators/        # Request validation schemas (Zod)
│   │   │   ├── auth.validator.ts
│   │   │   ├── game.validator.ts
│   │   │   └── transaction.validator.ts
│   │   └── index.ts           # Application entry point
│   ├── .env.example           # Environment variables template
│   ├── .gitignore
│   ├── package.json
│   ├── README.md
│   └── tsconfig.json
│
├── frontend/                   # Frontend Application (Next.js)
│   ├── app/                   # Next.js App Router
│   │   ├── about/
│   │   ├── deposit/
│   │   ├── feedback/
│   │   ├── licenses/
│   │   ├── live-support/
│   │   ├── news/
│   │   ├── profile/
│   │   ├── promotions/
│   │   ├── sponsorships/
│   │   ├── vip-club/
│   │   ├── withdraw/
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── components/            # React components
│   │   ├── ui/               # shadcn/ui components
│   │   ├── chat-widget.tsx
│   │   ├── featured-bets.tsx
│   │   ├── game-categories.tsx
│   │   ├── header.tsx
│   │   ├── hero.tsx
│   │   ├── leaderboard.tsx
│   │   ├── live-games.tsx
│   │   ├── promo-cards.tsx
│   │   ├── recent-big-wins.tsx
│   │   ├── sidebar.tsx
│   │   ├── slots-section.tsx
│   │   ├── stats.tsx
│   │   ├── theme-provider.tsx
│   │   ├── top-bar.tsx
│   │   ├── trending-games.tsx
│   │   └── welcome-hero.tsx
│   ├── hooks/                # Custom React hooks
│   │   ├── use-mobile.ts
│   │   └── use-toast.ts
│   ├── lib/                  # Utility libraries
│   │   └── utils.ts
│   ├── public/               # Static assets
│   ├── styles/              # Global styles
│   ├── components.json
│   ├── next.config.mjs
│   ├── package.json
│   ├── postcss.config.mjs
│   └── tsconfig.json
│
└── contracts/                # Smart Contracts (Solana/Anchor)
    └── solana/               # Solana programs
        ├── programs/        # Anchor programs
        │   └── coinflip/   # Coinflip game program
        │       ├── src/
        │       │   ├── account.rs
        │       │   ├── constants.rs
        │       │   ├── error.rs
        │       │   ├── lib.rs
        │       │   └── utils.rs
        │       ├── Cargo.toml
        │       └── Xargo.toml
        ├── tests/          # Contract tests
        │   └── coinflip.ts
        ├── migrations/     # Deployment scripts
        │   └── deploy.ts
        ├── Anchor.toml
        ├── Cargo.toml
        ├── package.json
        └── README.md
```

## Naming Conventions

### Files
- **Backend**: kebab-case for files (e.g., `auth.controller.ts`, `error-handler.ts`)
- **Frontend**: kebab-case for component files (e.g., `chat-widget.tsx`)
- **Contracts**: snake_case for Rust files (e.g., `lib.rs`, `account.rs`)

### Directories
- **Backend**: kebab-case (e.g., `validators/`, `error-handler.ts`)
- **Frontend**: kebab-case (e.g., `live-support/`, `vip-club/`)
- **Contracts**: kebab-case (e.g., `solana/`)

## Architecture Patterns

### Backend
- **MVC Pattern**: Controllers handle requests, Services contain business logic, Models define data structure
- **Service Layer**: Business logic separated from controllers
- **Repository Pattern**: Models act as repositories for database operations
- **Middleware**: Authentication and error handling

### Frontend
- **Component-Based**: React components with composition
- **App Router**: Next.js 16 App Router for routing
- **UI Library**: shadcn/ui for consistent design system

### Smart Contracts
- **Anchor Framework**: Solana program development
- **Modular Design**: Separate modules for accounts, errors, constants, utils

## Key Features

### Backend API
- RESTful API endpoints
- WebSocket support for real-time updates
- JWT authentication
- MongoDB for data persistence
- Solana blockchain integration

### Frontend
- Next.js 16 with App Router
- TypeScript for type safety
- Tailwind CSS for styling
- Responsive design
- Dark mode support

### Smart Contracts
- On-chain game logic
- Transparent and verifiable results
- Secure random number generation
- Reward distribution

## Migration Notes

The project has been restructured from:
- `smartcontract/Solana-casino-games/` → `contracts/solana/`

All file names follow consistent naming conventions:
- kebab-case for TypeScript/JavaScript files
- snake_case for Rust files
- PascalCase for React components (in code)

