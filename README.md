# Event Requirement Posting Application - Backend

This is the backend for the Event Requirement Posting Application, built with Node.js, Express, and MongoDB.

## Tech Stack
- **Node.js**: Runtime environment
- **Express**: Web framework
- **MongoDB**: NoSQL database
- **Mongoose**: MongoDB object modeling tool
- **Cors**: Cross-origin resource sharing middleware
- **Dotenv**: Environment variable loader

## Setup

1. **Prerequisites**: Ensure you have [Node.js](https://nodejs.org/) and [MongoDB](https://www.mongodb.com/) installed.

2. **Installation**:
   ```bash
   cd eve-req-backend
   npm install
   ```

3. **Environment Variables**: Create a `.env.local` file in the root directory by copying `.env.example`:
   ```bash
   cp .env.example .env.local
   ```
   Ensure `NEXT_PUBLIC_API_URL` points to your active backend service.

4. **Running the Server**:
   - For development (with nodemon):
     ```bash
     npm run dev
     ```
   - For production:
     ```bash
     npm start
     ```

## API Endpoints

- **POST `/api/requirements`**: Post a new event requirement.
- **GET `/api/requirements`**: Get all event requirements.
