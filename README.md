# SpendWise 💰

A personal budget tracking application built with the MERN stack (MongoDB, Express, React, Node.js).

> ⚠️ **This project is intentionally incomplete.** It provides a clean, structured scaffold for a developer to build upon. All missing logic is marked with `TODO` comments throughout the codebase.

## Tech Stack

### Frontend
- **React** (with Vite) + **TypeScript**
- **Tailwind CSS** for styling
- **React Router** for navigation
- **Axios** for HTTP requests
- **Recharts** (installed, not implemented)

### Backend
- **Node.js** + **Express.js**
- **MongoDB** with **Mongoose**
- **JWT** authentication (setup only)
- **bcryptjs** for password hashing (setup only)

## Project Structure

```
spendwise/
├── client/                 # React frontend
│   ├── src/
│   │   ├── api/            # Axios instance & API functions
│   │   ├── components/
│   │   │   └── layout/     # Sidebar, Topbar, MainLayout
│   │   ├── pages/          # All page components
│   │   └── App.tsx         # Router configuration
│   └── ...
├── server/                 # Express backend
│   ├── src/
│   │   ├── config/         # Database configuration
│   │   ├── controllers/    # Route handlers
│   │   ├── middleware/      # Auth middleware
│   │   ├── models/         # Mongoose schemas
│   │   ├── routes/         # API routes
│   │   └── index.ts        # Server entry point
│   └── ...
├── package.json            # Root monorepo scripts
└── README.md
```

## Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm (v9 or higher)
- MongoDB (optional — not wired yet)

### Installation

```bash
# Clone the repository
git clone <repo-url>
cd spendwise

# Install all dependencies (root + client + server)
npm install
npm run install:all

# Start both client and server
npm run dev
```

The app will be available at:
- **Frontend**: http://localhost:5173
- **Backend**: http://localhost:5000

### Environment Variables

Copy the example env files:

```bash
# Server
cp server/.env.example server/.env

# Client
cp client/.env.example client/.env
```

## What's Implemented ✅

- [x] Project structure and architecture
- [x] Frontend routing (all pages navigable)
- [x] Layout with sidebar and topbar
- [x] Dashboard with summary cards and recent transactions (mock data)
- [x] Transactions page with table, filters, and action buttons (UI only)
- [x] Budget page with progress bars (mock data)
- [x] Insights page with chart placeholders
- [x] Settings page with form fields
- [x] Login & Signup forms (UI only)
- [x] Backend Express server with middleware
- [x] Mongoose models (User, Transaction, Category, Budget)
- [x] API routes (all return "Not implemented yet")
- [x] Auth middleware placeholder

## What Needs To Be Built 🚧

Search the codebase for `TODO` to find all pending tasks. Key areas:

- [ ] MongoDB connection and database integration
- [ ] User authentication (register, login, JWT tokens)
- [ ] CRUD operations for transactions
- [ ] CRUD operations for budgets
- [ ] Category management
- [ ] Charts implementation with Recharts
- [ ] Real API integration (replace mock data)
- [ ] Form validation
- [ ] Error handling and loading states
- [ ] Protected routes (auth guard)

## Scripts

| Command            | Description                              |
| ------------------ | ---------------------------------------- |
| `npm run dev`      | Start both client and server             |
| `npm run dev:client` | Start frontend only                    |
| `npm run dev:server` | Start backend only                     |
| `npm run build`    | Build both client and server             |
| `npm run install:all` | Install deps for client and server    |

## License

MIT
