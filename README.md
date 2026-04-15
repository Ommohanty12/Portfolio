# Modern Personal Portfolio

A sleek, highly interactive, and responsive personal portfolio crafted with the MERN stack and modern styling techniques.

## Features
- **Frontend**: React (Vite), Tailwind CSS, Framer Motion
- **Design**: Dark theme, glassmorphism, glowing accents, modern typography
- **Sections**: Dynamic Hero, Filterable Projects, Data-Driven Skills, Functional Contact Form
- **Backend**: Node.js, Express, MongoDB (Mongoose)

## Project Structure
- `frontend/`: React app built with Vite and Tailwind
- `backend/`: Express server handling contact submissions

## Running Locally

### 1. Backend Setup
1. Navigate to the backend directory:
   ```bash
   cd backend
   ```
2. Ensure you have MongoDB running locally, or update the `MONGODB_URI` in `backend/.env`.
3. Install dependencies and start the server:
   ```bash
   npm install
   node server.js
   ```
   *The server will run on port 5000.*

### 2. Frontend Setup
1. Open a new terminal and navigate to the frontend directory:
   ```bash
   cd frontend
   ```
2. Install dependencies and start the dev server:
   ```bash
   npm install
   npm run dev
   ```
   *The app will be available at `http://localhost:5173/`.*

## Customization
- Projects data is stored in `frontend/src/data/projects.json`
- Skills data is stored in `frontend/src/data/skills.json`
- UI colors can be tweaked in `frontend/tailwind.config.js`
