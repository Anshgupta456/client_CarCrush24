import dns from 'dns';
import mongoose from 'mongoose';
import { seedInitialDatabase } from './seed.js';

// Resolve MongoDB SRV records reliably on Windows/local networks
try {
  dns.setServers(['8.8.8.8', '8.8.4.4', '1.1.1.1']);
} catch (dnsErr) {
  console.warn('[DNS] Notice: Could not set custom DNS servers:', dnsErr.message);
}

export const connectDB = async () => {
  let mongoUri = process.env.MONGODB_URI;

  if (!mongoUri || mongoUri === 'your_mongodb_connection_string') {
    mongoUri = 'mongodb://127.0.0.1:27017/carcrush24';
  }

  try {
    const conn = await mongoose.connect(mongoUri, {
      serverSelectionTimeoutMS: 8000,
    });
    console.log(`[MongoDB] Connected successfully: ${conn.connection.host}/${conn.connection.name}`);

    // Seed database with Admin user and initial items
    await seedInitialDatabase();
    return true;
  } catch (err) {
    console.warn(`[MongoDB] Notice: Could not connect to MongoDB at "${mongoUri}". (${err.message})`);
    console.warn('[MongoDB] Set MONGODB_URI in server/.env with your active MongoDB Atlas / local connection string.');
    return false;
  }
};

