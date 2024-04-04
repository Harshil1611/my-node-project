import express from 'express';
import { connectDB } from './db.js';
import dotenv from 'dotenv';
import userRoutes from './routes/userRoutes.js';


// Load environment variables from .env file
dotenv.config();

// Get the JWT secret key from the environment variables
const jwtSecretKey = process.env.JWT_SECRET_KEY;


const app = express();
const PORT = process.env.PORT || 3000;

// Connect to database
connectDB();

// Middleware
app.use(express.json());

// Routes
app.use('/users', userRoutes);

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});