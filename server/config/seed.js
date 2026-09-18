import Admin from '../models/Admin.js';
import Lead from '../models/Lead.js';
import Part from '../models/Part.js';

export const seedInitialDatabase = async () => {
  try {
    // 1. Seed Primary Admin
    const adminCount = await Admin.countDocuments();
    if (adminCount === 0) {
      const initialEmail = (process.env.ADMIN_INITIAL_EMAIL || 'admin@carcrush24.com').toLowerCase();
      const initialPassword = process.env.ADMIN_INITIAL_PASSWORD || 'admin123';

      const admin = new Admin({
        name: 'Sanjay Rawat',
        email: initialEmail,
        password: initialPassword, // Pre-save hook will hash with bcrypt
        role: 'superadmin',
        facility: '',
      });

      await admin.save();
      console.log(`[Seed] Primary admin created in database: ${initialEmail}`);
    } else {
      console.log(`[Seed] Admin user exists (${adminCount} found in DB).`);
    }

    // 2. Leads start empty - populated dynamically by customer quote submissions


    // 3. Seed Initial Inventory if empty
    const partCount = await Part.countDocuments();
    if (partCount === 0) {
      const sampleParts = [
        {
          title: 'Alternator 12V 90A (OEM Denso)',
          vehicleMakeModel: 'Maruti Suzuki Swift / Dzire Diesel (2012-2017)',
          category: 'Electrical',
          price: 3800,
          condition: 'A-Grade (Tested 13.8V Output)',
          inStock: true,
          sku: 'ALT-MS-D12',
        },
        {
          title: 'Starter Motor 1.2 kW',
          vehicleMakeModel: 'Hyundai i10 / Santro Xing 1.1L',
          category: 'Electrical',
          price: 2400,
          condition: 'Tested / Refurbished Solenoid',
          inStock: true,
          sku: 'STR-HY-I10',
        },
        {
          title: 'Alloy Wheels 15" Set of 4 (OEM)',
          vehicleMakeModel: 'Honda City 4th Gen / Jazz',
          category: 'Wheels & Tires',
          price: 14500,
          condition: 'A-Grade (Zero Bends, Minor Scuffs)',
          inStock: true,
          sku: 'WHL-HC-15',
        },
        {
          title: 'AC Compressor Sanden 6-Groove',
          vehicleMakeModel: 'Maruti Suzuki WagonR / Alto K10 (2014-2020)',
          category: 'Climate Control',
          price: 5200,
          condition: 'Tested (Pressure Held at 280 PSI)',
          inStock: true,
          sku: 'ACC-MS-WGR',
        },
      ];

      await Part.insertMany(sampleParts);
      console.log(`[Seed] Seeded ${sampleParts.length} initial parts into database.`);
    }
  } catch (err) {
    console.error('[Seed Error] Failed to seed database:', err);
  }
};
