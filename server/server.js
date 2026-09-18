import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';

// Routers
import authRoutes from './routes/authRoutes.js';
import leadRoutes from './routes/leadRoutes.js';
import inventoryRoutes from './routes/inventoryRoutes.js';
import contentRoutes from './routes/contentRoutes.js';
import uploadRoutes from './routes/uploadRoutes.js';
import companyRoutes from './routes/companyRoutes.js';
import policyRoutes from './routes/policyRoutes.js';
import analyticsRoutes from './routes/analyticsRoutes.js';
import { getBlogs, getBlogBySlug, getTestimonials } from './controllers/contentController.js';

dotenv.config();

const app = express();

// Middleware
app.use(
  cors({
    origin: ['http://localhost:3000', 'http://127.0.0.1:3000'],
    credentials: true,
  })
);
app.use(express.json());
app.use(cookieParser());

// Connect Database & Seed
connectDB();

// Health Check
app.get('/api/health', (req, res) => {
  res.json({
    status: 'ok',
    service: 'CarCrush24 Operations API',
    time: new Date().toISOString(),
  });
});

// Mount Routes
app.use('/api/admin/auth', authRoutes);
app.use('/api/admin/leads', leadRoutes);
app.use('/api/admin/inventory', inventoryRoutes);
app.use('/api/admin/content', contentRoutes);
app.use('/api/admin/upload', uploadRoutes);
app.use('/api/admin/company', companyRoutes);
app.use('/api/admin/policies', policyRoutes);
app.use('/api/admin/analytics', analyticsRoutes);
app.use('/api/company', companyRoutes);
app.use('/api/policies', policyRoutes);
app.use('/api/analytics', analyticsRoutes);
app.use('/api/leads', leadRoutes);

// Public Website Content Endpoints
app.get('/api/testimonials', getTestimonials);
app.get('/api/blogs', getBlogs);
app.get('/api/blogs/:slug', getBlogBySlug);

// 404 Handler for undefined API routes
app.use((req, res) => {
  res.status(404).json({
    success: false,
    error: `Endpoint not found: ${req.method} ${req.originalUrl}`,
  });
});

// Global Error Handler
app.use((err, req, res, next) => {
  console.error('[API Error]:', err);
  res.status(err.status || 500).json({
    success: false,
    error: err.message || 'Internal Server Error',
  });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`[Server] CarCrush24 Backend listening on port ${PORT}`);
});