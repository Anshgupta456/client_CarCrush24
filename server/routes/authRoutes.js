import express from 'express';
import {
  loginAdmin,
  getAdminProfile,
  updateAdminProfile,
  resetAdminPassword,
  forgotPassword,
  resetPasswordWithToken,
  logoutAdmin,
} from '../controllers/authController.js';
import { verifyAdminToken } from '../middleware/auth.js';

const router = express.Router();

// Public: Admin login with credentials
router.post('/login', loginAdmin);

// Public: Forgot password initiation
router.post('/forgot-password', forgotPassword);

// Public: Reset password with OTP / token
router.post('/reset-password-token', resetPasswordWithToken);

// Protected: Current authenticated admin profile
router.get('/me', verifyAdminToken, getAdminProfile);

// Protected: Update admin profile (name, email)
router.put('/profile', verifyAdminToken, updateAdminProfile);

// Protected: Reset / change admin password
router.post('/reset-password', verifyAdminToken, resetAdminPassword);

// Public/Protected: Admin logout
router.post('/logout', logoutAdmin);

export default router;
