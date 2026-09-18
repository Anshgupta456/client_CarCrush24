import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Read files directly or import
const blogsDataPath = path.resolve(__dirname, '../../client/src/data/blogsData.js');
const testimonialsDataPath = path.resolve(__dirname, '../../client/src/data/testimonialsData.js');
const adminMockDataPath = path.resolve(__dirname, '../../client/src/data/adminMockData.js');

async function run() {
  const blogsModule = await import(`file://${blogsDataPath.replace(/\\/g, '/')}`);
  const testimonialsModule = await import(`file://${testimonialsDataPath.replace(/\\/g, '/')}`);
  const adminModule = await import(`file://${adminMockDataPath.replace(/\\/g, '/')}`);

  const blogs = blogsModule.blogs || [];
  const testimonials = testimonialsModule.initialTestimonials || [];
  const leads = adminModule.initialLeads || [];

  const admin = {
    id: 'adm_sec_01',
    name: 'Sanjay Rawat',
    email: 'admin@carcrush24.com',
    role: 'superadmin',
    facility: 'Mayapuri Authorized RVSF Unit #1'
  };

  const dbStore = {
    admin,
    testimonials,
    blogs,
    leads
  };

  const targetDir = path.resolve(__dirname, '../data');
  if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true });
  }

  const targetFile = path.join(targetDir, 'db_store.json');
  fs.writeFileSync(targetFile, JSON.stringify(dbStore, null, 2), 'utf-8');
  console.log(`[Seed Sync] Successfully synced db_store.json with:`);
  console.log(`- ${testimonials.length} testimonials`);
  console.log(`- ${blogs.length} blogs`);
  console.log(`- ${leads.length} leads`);
}

run().catch(console.error);
