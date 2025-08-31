import express from 'express';
import { PrismaClient } from '@prisma/client';
import dotenv from 'dotenv';
import { OrderRouter } from './routes/OrderRoutes.js';
import { userRouter } from './routes/userRoutes.js';
import { productRouter } from './routes/ProductRoutes.js';
import { clubRouter } from './routes/clubRoutes.js';
import { orderItemRouter } from './routes/orderItemRoutes.js';
import { authRouter } from './routes/authRoutes.js';
import cookieParser from 'cookie-parser';
import paymentRouter from './routes/paymentRoutes.js';
import { protect } from './controllers/authControllers.js';
import cors from 'cors';

// ✅ for serving static files
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const prisma = new PrismaClient();
const app = express(); 

app.use(express.json());
app.use(cookieParser());

// ✅ CORS
app.use(
  cors({
    origin: 'http://localhost:5173', // frontend origin
    methods: ['GET', 'POST', 'PUT'],
    credentials: true,
  })
);

dotenv.config();

// ✅ Serve images from "uploads" folder
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
// ✅ Serve images from "uploads" folder
const uploadsPath = path.join(__dirname, "uploads");
console.log("📂 Serving static from:", uploadsPath);
app.use("/uploads", express.static(uploadsPath));

// ✅ Routes
app.use('/order', OrderRouter);
app.use('/users', userRouter);
app.use('/product', productRouter);
app.use('/club', clubRouter);
app.use('/orderItem', orderItemRouter);
app.use('/auth', authRouter);
app.use('/payment', paymentRouter);

// ✅ Start server (no server.js needed)
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});

// ✅ Export prisma so controllers can still use it
export { prisma };
