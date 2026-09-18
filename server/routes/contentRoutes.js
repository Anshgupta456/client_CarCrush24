import express from 'express';
import {
  getBlogs,
  getBlogBySlug,
  createBlog,
  updateBlog,
  deleteBlog,
  getTestimonials,
  createTestimonial,
  updateTestimonial,
  deleteTestimonial,
} from '../controllers/contentController.js';
import { verifyAdminToken } from '../middleware/auth.js';

const router = express.Router();

// Blogs Routes
// Public: Read blogs
router.get('/blogs', getBlogs);
router.get('/blogs/:slug', getBlogBySlug);

// Admin Protected: Write/Modify/Delete blogs
router.post('/blogs', verifyAdminToken, createBlog);
router.patch('/blogs/:id', verifyAdminToken, updateBlog);
router.put('/blogs/:id', verifyAdminToken, updateBlog);
router.delete('/blogs/:id', verifyAdminToken, deleteBlog);

// Testimonials Routes
// Public: Read testimonials
router.get('/testimonials', getTestimonials);

// Admin Protected: Write/Modify/Delete testimonials
router.post('/testimonials', verifyAdminToken, createTestimonial);
router.patch('/testimonials/:id', verifyAdminToken, updateTestimonial);
router.put('/testimonials/:id', verifyAdminToken, updateTestimonial);
router.delete('/testimonials/:id', verifyAdminToken, deleteTestimonial);

export default router;
