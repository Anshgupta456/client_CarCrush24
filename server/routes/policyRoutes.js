import express from 'express';
import {
  getPolicy,
  getAllPolicies,
  updatePolicy,
  resetPolicy,
} from '../controllers/policyController.js';
import { verifyAdminToken } from '../middleware/auth.js';

const router = express.Router();

// Public route: Read specific published policy (e.g. /api/policies/privacy, /api/policies/terms)
router.get('/:type', getPolicy);

// Admin routes:
router.get('/', verifyAdminToken, getAllPolicies);
router.put('/:type', verifyAdminToken, updatePolicy);
router.post('/:type/reset', verifyAdminToken, resetPolicy);

export default router;
