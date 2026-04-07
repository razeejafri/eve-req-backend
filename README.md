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

3. **Environment Variables**: Create a `.env` file in the root directory (one is provided for local setup):
   ```env
   PORT=5000
   MONGO_URI=mongodb://127.0.0.1:27017/event_requirements
   ```

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
