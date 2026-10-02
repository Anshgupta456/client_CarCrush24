import Admin from '../models/Admin.js';
import Lead from '../models/Lead.js';
import Part from '../models/Part.js';
import Blog from '../models/Blog.js';
import Testimonial from '../models/Testimonial.js';
import CompanyProfile from '../models/CompanyProfile.js';
import { readStore } from '../services/dbStore.js';

export const seedInitialDatabase = async () => {
  try {
    const store = readStore();

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

    // 2. Sync Blogs from file store if Atlas has fewer blogs
    const blogCount = await Blog.countDocuments();
    if (blogCount === 0 && store.blogs && store.blogs.length > 0) {
      for (const b of store.blogs) {
        const { id, _id, ...blogData } = b;
        await Blog.findOneAndUpdate({ slug: b.slug }, blogData, { upsert: true, new: true });
      }
      console.log(`[Seed] Synced ${store.blogs.length} blogs into MongoDB Atlas.`);
    }

    // 3. Sync Testimonials from file store
    // Remove obsolete test testimonials with author 'test'
    await Testimonial.deleteMany({ author: { $in: ['test', 'Test'] } });
    const testimonialCount = await Testimonial.countDocuments();
    if (testimonialCount === 0 && store.testimonials && store.testimonials.length > 0) {
      for (const t of store.testimonials) {
        if (t.author && t.author.toLowerCase() !== 'test') {
          const { id, _id, ...testData } = t;
          await Testimonial.create(testData);
        }
      }
      console.log(`[Seed] Synced ${store.testimonials.length} testimonials into MongoDB Atlas.`);
    }

    // 4. Sync Company Profile if empty in Atlas
    const companyCount = await CompanyProfile.countDocuments();
    if (companyCount === 0 && store.company) {
      await CompanyProfile.create(store.company);
      console.log('[Seed] Synced Company Profile into MongoDB Atlas.');
    }

    // 5. Seed Initial Inventory if empty
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

