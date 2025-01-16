
# Reaction Game

A fun and interactive game designed to test and improve your reaction time. This repository includes both the **frontend** and **backend** services needed to run the game.

## Features

- **Frontend**: An interactive user interface for the game.
- **Backend**: A service to handle scores and provide a leaderboard.

---

## Getting Started

To run the **Reaction Game**, you need to set up and start both the frontend and backend services. Follow the instructions below.

### Prerequisites

- **Node.js** (v14 or later)
- **npm** or **yarn**

---

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/ofirpar/reaction-game.git
   ```
2. Navigate to the project directory:
   ```bash
   cd reaction-game
   ```

---

### Running the Backend

1. Navigate to the backend directory:
   ```bash
   cd backend
   ```
2. Install the dependencies:
   ```bash
   npm install
   ```
3. Start the backend server:
   ```bash
   npm start
   ```
4. The backend should now be running on `http://localhost:4000`

---

### Running the Frontend

1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```
2. Install the dependencies:
   ```bash
   npm install
   ```
3. Start the frontend server:
   ```bash
   npm run dev
   ```
4. Open your browser and go to `http://localhost:3000` to access the game.

---

## How to Play

1. In the start screen enter your name then press Start.
2. Click 'a' for left or 'l' for right as soon as the shape appears.
3. Successful reactions are recorded and stored in the backend.
4. To see the leaderboard use the http://localhost:4000/api/users/leaderboard endpoint

---

Enjoy playing the Reaction Game!
