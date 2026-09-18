import express from 'express';
import {
  getCompanyProfile,
  updateCompanyProfile,
} from '../controllers/companyController.js';
import { verifyAdminToken } from '../middleware/auth.js';

const router = express.Router();

// Public: Get dynamic company details for website
router.get('/', getCompanyProfile);

// Protected: Get current company profile for admin
router.get('/admin', verifyAdminToken, getCompanyProfile);

// Protected: Update company profile
router.put('/', verifyAdminToken, updateCompanyProfile);
router.put('/admin', verifyAdminToken, updateCompanyProfile);

export default router;
