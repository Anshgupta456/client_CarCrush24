import express from 'express';
import { getInventory, toggleStock, addPart } from '../controllers/inventoryController.js';
import { verifyAdminToken } from '../middleware/auth.js';

const router = express.Router();

// Protected: View salvaged parts catalog
router.get('/', verifyAdminToken, getInventory);

// Protected: Toggle stock status
router.patch('/:id/stock', verifyAdminToken, toggleStock);

// Protected: Catalog new salvaged part
router.post('/', verifyAdminToken, addPart);

export default router;
