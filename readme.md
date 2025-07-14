# Full-Stack Stock Trading Platform

A full-stack web application that simulates a stock trading platform, inspired by real-world platforms like Zerodha. The project is designed to help users track their holdings, positions, orders, manage funds, and maintain a watchlist, all through a responsive dashboard interface.

## Features

- **User Authentication:** Secure signup and login flows using JWT tokens and hashed passwords.
- **Dashboard:** Centralized dashboard displaying summary, equity, funds, watchlist, and actionable insights.
- **Order Management:** Place new stock orders (buy/sell), view all orders, and manage them.
- **Holdings & Positions:** Track and view all user holdings and open positions with details.
- **Funds Section:** Add or withdraw funds instantly using UPI (simulated).
- **Watchlist:** Add stocks to a personalized watchlist and visualize price data.
- **Responsive Design:** Clean UI built in React, styled for usability and aesthetics.

## Tech Stack

### Backend
- **Node.js** with **Express.js**: REST API server
- **MongoDB** & **Mongoose**: Data storage and modeling
- **JWT**: Authentication
- **Bcrypt.js**: Password hashing
- **CORS**, **Body-Parser**, **Cookie-Parser**: Middleware for secure, robust server functionality

### Frontend
- **React** (with Vite): Modern, fast client UI
- **React Router**: Client-side routing
- **Material UI**: UI components and icons
- **Axios**: HTTP client for API requests
- **Chart.js**: Data visualization (e.g., doughnut charts for watchlist)
- **CSS**: Custom styles for dashboard and components

## Project Structure

```
Full-Stack-Stock-Trading-Platform/
├── backend/                 # Express + MongoDB backend
│   ├── controller/          # Controllers (e.g., AuthController)
│   ├── middlewares/         # Middleware (e.g., verifyToken)
│   ├── model/               # Mongoose models
│   ├── routes/              # API routes
│   ├── schemas/             # Mongoose schemas
│   └── index.js             # Entry point for backend server
├── dashboard-vite/          # Frontend React app (Vite)
│   ├── public/              # Static files and HTML template
│   ├── src/
│   │   ├── components/      # React components (Dashboard, Funds, Orders, etc.)
│   │   ├── data/            # Static data (e.g., watchlist)
│   │   └── index.css        # Global styles
│   └── README.md            # Frontend-specific README
└── README.md                # (This file)
```

## Getting Started

### Prerequisites

- Node.js (v20+ recommended)
- MongoDB (local or cloud)
- npm (v8+ recommended)

### Backend Setup

```bash
cd backend
cp .env.example .env   # Set MONGO_URI and other secrets in .env
npm install
npm start
```

### Frontend Setup

```bash
cd dashboard-vite
npm install
npm run dev
```

### Environment Variables

Create a `.env` file in the `backend` directory with:

```
MONGO_URI=your_mongodb_connection_string
PORT=3000
JWT_SECRET=your_jwt_secret
```

## API Overview

- `POST /auth/signup` – User signup
- `POST /auth/login` – User login
- `GET /allHoldings` – Get all holdings (auth required)
- `GET /allPositions` – Get all positions
- `GET /allOrders` – Get all orders
- `POST /newOrder` – Place a new stock order



*Made with ❤️ by [mohd-adil-2005](https://github.com/mohd-adil-2005)*