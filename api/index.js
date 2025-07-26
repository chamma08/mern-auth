import express from 'express';
import dotenv from 'dotenv';
import connectDB from './db/connectDB.js';
import userRoutes from './routes/user.js';

dotenv.config();


const app = express();
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  connectDB()
  console.log(`Server is running on port ${PORT}`);
});

app.use("/api/users", userRoutes);
