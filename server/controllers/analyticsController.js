import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import {
  getAnalyticsData,
  recordClientEvent,
} from '../services/analyticsService.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const defaultConfigKeyPath = path.resolve(__dirname, '../config/google-service-account.json');

// Admin Protected: Retrieve complete funnel, geographic, source, and action metrics
export const getAnalyticsReport = async (req, res) => {
  try {
    const range = req.query.range || '30d';
    const report = await getAnalyticsData(range);

    return res.status(200).json({
      success: true,
      data: report,
    });
  } catch (err) {
    console.error('[getAnalyticsReport Error]:', err);
    return res.status(500).json({
      success: false,
      error: 'Failed to generate analytics dataset',
    });
  }
};

// Public: Track visitor actions from frontend
export const trackEvent = async (req, res) => {
  try {
    const eventData = req.body || {};
    const recorded = await recordClientEvent(eventData);

    return res.status(201).json({
      success: true,
      data: recorded,
    });
  } catch (err) {
    console.error('[trackEvent Error]:', err);
    return res.status(500).json({
      success: false,
      error: 'Failed to record event',
    });
  }
};

// Admin Protected: Check Google Analytics Data API configuration status
export const getAnalyticsStatus = async (req, res) => {
  try {
    const propertyId = process.env.GA_PROPERTY_ID || process.env.NEXT_PUBLIC_GA_PROPERTY_ID || null;
    const hasServiceAccount = Boolean(
      process.env.GOOGLE_APPLICATION_CREDENTIALS ||
      fs.existsSync(defaultConfigKeyPath) ||
      (process.env.GOOGLE_CLIENT_EMAIL && process.env.GOOGLE_PRIVATE_KEY)
    );

    return res.status(200).json({
      success: true,
      data: {
        configured: Boolean(propertyId && hasServiceAccount),
        propertyId: propertyId || 'Not set',
        hasCredentials: hasServiceAccount,
        mode: (propertyId && hasServiceAccount) ? 'Google Analytics 4 Data API' : 'Dynamic Hybrid Telemetry',
        instructions: {
          step1: 'Create a Google Analytics 4 (GA4) Property in Google Analytics console.',
          step2: 'Obtain your numeric GA4 Property ID (e.g. 123456789).',
          step3: 'In Google Cloud, create a Service Account and grant it "Viewer" access to your GA4 property.',
          step4: 'Add GA_PROPERTY_ID, GOOGLE_CLIENT_EMAIL, and GOOGLE_PRIVATE_KEY into server/.env.',
        },
      },
    });
  } catch (err) {
    console.error('[getAnalyticsStatus Error]:', err);
    return res.status(500).json({
      success: false,
      error: 'Failed to read analytics status',
    });
  }
};
