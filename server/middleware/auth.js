import jwt from 'jsonwebtoken';
import Admin from '../models/Admin.js';

export const verifyAdminToken = async (req, res, next) => {
  try {
    let token = null;

    // 1. Check Authorization: Bearer <token>
    const authHeader = req.headers.authorization;
    if (authHeader && authHeader.startsWith('Bearer ')) {
      token = authHeader.substring(7).trim();
    } else if (req.cookies && req.cookies.admin_token) {
      token = req.cookies.admin_token;
    }

    if (!token) {
      return res.status(401).json({
        success: false,
        error: 'Access denied. Missing or malformed authentication token.',
      });
    }

    const secret = process.env.JWT_SECRET || 'carcrush24_jwt_super_secret_2026';
    const decoded = jwt.verify(token, secret);

    // Attach decoded info to request
    req.admin = {
      id: decoded.id,
      email: decoded.email,
      role: decoded.role,
      name: decoded.name,
    };

    next();
  } catch (err) {
    if (err.name === 'TokenExpiredError') {
      return res.status(401).json({
        success: false,
        error: 'Authentication token has expired. Please sign in again.',
        code: 'TOKEN_EXPIRED',
      });
    }
    return res.status(401).json({
      success: false,
      error: 'Invalid authentication token.',
      code: 'INVALID_TOKEN',
    });
  }
};
