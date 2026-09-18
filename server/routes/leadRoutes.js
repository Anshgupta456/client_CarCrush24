import express from 'express';
import { getLeads, updateLeadStatus, createLead, deleteLead } from '../controllers/leadController.js';
import { verifyAdminToken } from '../middleware/auth.js';

const router = express.Router();

// Public: Submit quote inquiry from website (support both / and /submit)
router.post('/', createLead);
router.post('/submit', createLead);

// Protected: Admin retrieves leads
router.get('/', verifyAdminToken, getLeads);

// Protected: Admin updates lead lifecycle status
router.patch('/:id/status', verifyAdminToken, updateLeadStatus);

// Protected: Admin deletes lead
router.delete('/:id', verifyAdminToken, deleteLead);

export default router;
