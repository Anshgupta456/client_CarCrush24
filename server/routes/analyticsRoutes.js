import express from 'express';
import {
  getAnalyticsReport,
  trackEvent,
  getAnalyticsStatus,
} from '../controllers/analyticsController.js';
import { verifyAdminToken } from '../middleware/auth.js';

const router = express.Router();

// Public: Track visitor actions from frontend (e.g. quote usage, whatsapp clicks)
router.post('/track', trackEvent);

// Admin Protected: Funnel report and GA4 status
router.get('/', verifyAdminToken, getAnalyticsReport);
router.get('/status', verifyAdminToken, getAnalyticsStatus);

export default router;
