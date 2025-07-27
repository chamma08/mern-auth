import express from 'express';
import dotenv from 'dotenv';
import connectDB from './db/connectDB.js';
import userRoutes from './routes/user.js';
import authRoutes from './routes/auth.js';

dotenv.config();


const app = express();

app.use(express.json()); // Middleware to parse JSON bodies

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  connectDB()
  console.log(`Server is running on port ${PORT}`);
});

app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);

app.use((err,req,res,next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  return res.status(statusCode).json({
    success: false,
    statusCode,
    message
  });
})
