import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import mongoose from 'mongoose';
import Blog from '../models/Blog.js';
import Testimonial from '../models/Testimonial.js';
import Lead from '../models/Lead.js';
import Admin from '../models/Admin.js';
import CompanyProfile from '../models/CompanyProfile.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const storeFilePath = path.resolve(__dirname, '../data/db_store.json');

export const defaultCompanyProfile = {
  companyName: 'CarCrush24',
  legalName: 'Garhwal Scrape',
  tagline: 'Recycle • Reuse • A Cleaner Tomorrow',
  rvsfRegistration: 'MoRTH / RVSF / DL / 2024 / 0089',
  tollFreePhone: '1800-22-CRUSH',
  tollFreeTel: '1800227278',
  phone: '+91 98765 43210',
  phoneTel: '+919876543210',
  whatsappNumber: '917310242424',
  whatsappDisplay: '+91 73102 42424',
  email: 'support@carcrush24.com',
  corporateEmail: 'info@carcrush24.com',
  address: 'Devbhoomi Industrial Areas, Khasra no. 216, Khatakhedi, Roorkee, Uttarakhand, 247667',
  facilityAddress: 'Devbhoomi Industrial Areas, Khasra no. 216, Khatakhedi, Roorkee, Uttarakhand, 247667',
  operatingHours: 'Monday – Sunday: 8:00 AM – 8:00 PM (24/7 Helpline Desk)',
  operatingHubs: [
    'Delhi NCR',
    'Punjab',
    'Haryana',
    'Uttar Pradesh',
    'Uttarakhand',
    'Jammu & Kashmir',
    'Chandigarh',
  ],
  socialLinks: {
    twitter: 'https://twitter.com/carcrush24',
    linkedin: 'https://linkedin.com/company/carcrush24',
    facebook: 'https://facebook.com/carcrush24',
    instagram: 'https://instagram.com/carcrush24',
  },
};

export const defaultPolicies = {
  privacy: {
    type: 'privacy',
    title: 'Privacy Policy',
    version: '1.2.0',
    effectiveDate: 'September 18, 2026',
    lastUpdated: '2026-09-18T10:00:00.000Z',
    summary: 'How CarCrush24 handles your personal information, vehicle registration documents, and MoRTH Parivahan compliance data.',
    sections: [
      {
        id: 'overview',
        heading: '1. Commitment to Privacy & Compliance',
        content: 'CarCrush24 ("Garhwal Scrape", "we", "us", or "our") operates as a government-authorized Registered Vehicle Scrapping Facility (RVSF). We recognize the sensitivity of vehicle ownership records, identity proofs, and personal information entrusted to us during the vehicle disposal and Certificate of Deposit (CoD) generation process. This Privacy Policy outlines how we collect, verify, process, store, and protect your data in strict alignment with the Information Technology Act, 2000, the Digital Personal Data Protection Act, 2023, and the Motor Vehicles (Registration and Functions of Vehicle Scrapping Facility) Rules, 2021.'
      },
      {
        id: 'information-collected',
        heading: '2. Information We Collect',
        content: 'To facilitate transparent valuation, doorstep towing, RTO de-registration, and authentic Certificate of Deposit issuance, we collect:\n• Vehicle Particulars: Registration Number, Chassis/VIN Number, Engine Number, Make, Model, Manufacturing Year, Fuel Type, and unladen kerb weight.\n• Ownership & Identity Documentation: Registration Certificate (RC), Aadhaar/PAN Card of the registered owner, Form 29/30 (if applicable), and Bank Loan Foreclosure NOC (Form 35) for hypothecated vehicles.\n• Contact & Financial Coordinates: Full name, mobile phone number, WhatsApp contact, pickup address/GPS coordinates, and bank account details (Account Number, IFSC, UPI ID) solely for disbursement of scrap metal payments.\n• Digital Interaction Data: IP address, device telemetry, browser type, and quote form submission logs to maintain session security and counter automated abuse.'
      },
      {
        id: 'purpose-of-processing',
        heading: '3. How Your Information Is Used',
        content: 'Your data is utilized exclusively for genuine operational, regulatory, and financial workflows:\n• Verifying vehicle history and hypothecation status against the MoRTH Parivahan national database.\n• Issuing digital Certificate of Deposit (CoD) and Certificate of Vehicle Scrapping (CVS) directly onto government portals.\n• Coordinating free doorstep towing and dispatching recovery flatbed drivers.\n• Executing instantaneous direct bank transfers for agreed vehicle scrap values.\n• Maintaining statutory audit logs mandated by state transport departments and regional police compliance directives.'
      },
      {
        id: 'data-sharing',
        heading: '4. Data Disclosure & Third-Party Sharing',
        content: 'CarCrush24 maintains an absolute zero-tolerance policy against commercializing or selling personal data to telemarketers or external advertisers.\n• Regulatory Authorities: Information is shared strictly with the Ministry of Road Transport and Highways (MoRTH), State Transport Departments, Regional Transport Offices (RTOs), and Law Enforcement Agencies as required by mandatory scrappage statutes.\n• Operational Partners: Licensed tow truck operators and banking partners receive strictly the minimum details necessary to complete vehicle pickup and fund transfers under strict non-disclosure obligations.'
      },
      {
        id: 'data-security',
        heading: '5. Security & Retention Protocols',
        content: 'All digital documents, RC scans, and financial records are transmitted via 256-bit SSL encryption and archived in token-secured environments. Hard copies or inspection slips are handled under dual-custody physical access protocols at authorized RVSF yards. Vehicle scrappage certificates and digital audit trails are preserved in accordance with government-prescribed statutory retention durations.'
      },
      {
        id: 'user-rights',
        heading: '6. Your Rights & Consent Revocation',
        content: 'You retain the right to inspect personal data retained in our system, request corrections to erroneous records, or seek clarification regarding any stage of documentation. Please note that once a vehicle is formally struck off the Parivahan portal and a Certificate of Deposit is generated, certain statutory records cannot be expunged due to mandatory national compliance laws.'
      },
      {
        id: 'contact-grievance',
        heading: '7. Grievance Redressal & Compliance Desk',
        content: 'If you have questions, concerns, or grievances regarding this Privacy Policy or your personal records, contact our designated Grievance Officer:\n• Company: CarCrush24 (Garhwal Scrape)\n• Compliance Desk: legal@carcrush24.com / support@carcrush24.com\n• Helpline: 1800-22-CRUSH / +91 7310756278\n• Corporate Office: Devbhoomi Industrial Areas, Khasra no. 216, Khatakhedi, Roorkee, Uttarakhand, 247667.'
      }
    ]
  },
  terms: {
    type: 'terms',
    title: 'Terms & Conditions',
    version: '1.2.0',
    effectiveDate: 'September 18, 2026',
    lastUpdated: '2026-09-18T10:00:00.000Z',
    summary: 'Standard contractual terms, vehicle ownership eligibility, pricing guidelines, and statutory depollution conditions.',
    sections: [
      {
        id: 'acceptance',
        heading: '1. Binding Legal Agreement',
        content: 'By requesting a vehicle valuation, booking a doorstep pickup, or submitting vehicle documentation to CarCrush24 ("Garhwal Scrape"), you unconditionally accept and agree to be bound by these Terms and Conditions. These terms govern all services rendered by our Registered Vehicle Scrapping Facility (RVSF) under the Motor Vehicles Act, 1988, and the Motor Vehicles (Registration and Functions of Vehicle Scrapping Facility) Rules, 2021.'
      },
      {
        id: 'eligibility',
        heading: '2. Vehicle Ownership & Title Eligibility',
        content: '• Clear Title: The individual or entity submitting the vehicle must be the registered owner recorded on the RC, or an authorized legal representative bearing a notarized Power of Attorney or succession certificate.\n• Encumbrance Free: The vehicle must be free from bank liens, hypothecation, court attachments, or police challan holds. If previously financed, the owner must furnish an authentic Form 35 and Loan Closure / Foreclosure NOC from the lending institution.\n• Stolen Vehicles: Under no circumstances will vehicles with disputed title, tampered chassis numbers, or pending police theft investigations be accepted. Discrepancies will be immediately flagged to law enforcement authorities.'
      },
      {
        id: 'valuation-pricing',
        heading: '3. Valuation & Metal Pricing Framework',
        content: '• Transparent Calculation: Online quotes and scrap valuations are derived from actual unladen kerb weight, current scrap steel and copper commodity indexes, intact catalytic converter condition, and recoverable metal mass.\n• Physical Verification: The final payout is confirmed upon on-site inspection by our certified recovery technician to verify engine presence, chassis legibility, and completeness of core components.\n• Price Integrity: CarCrush24 guarantees zero arbitrary deductions or middleman commissions. The quoted physical verification amount is disbursed in full.'
      },
      {
        id: 'doorstep-towing',
        heading: '4. Doorstep Towing & Custody Handover',
        content: '• 100% Free Towing: CarCrush24 provides doorstep recovery using hydraulic flatbed trucks across our operating hubs with zero hidden towing fees.\n• Safe Access: The vehicle owner is responsible for ensuring reasonable access to the vehicle (e.g., clearance from narrow lanes or basements).\n• Transfer of Custody: Custody officially passes to CarCrush24 upon signing of the Physical Inspection & Pickup Handover Slip and execution of spot payment.'
      },
      {
        id: 'cod-cvs',
        heading: '5. Certificate of Deposit (CoD) & Scrapping Certificate',
        content: '• Parivahan Digital Handshake: Following safe receipt and CCTV-monitored depollution at our authorized facility, the vehicle is digitally de-registered on MoRTH Parivahan.\n• Certificate of Deposit (CoD): Issued digitally to the registered owner. The CoD provides statutory motor vehicle road tax concessions (up to 25% on personal vehicles, 15% on commercial vehicles) and OEM new car purchase discounts.\n• Certificate of Vehicle Scrapping (CVS): Issued upon physical destruction of the chassis, granting the owner absolute legal indemnity against future misuse.'
      },
      {
        id: 'payment-terms',
        heading: '6. Payment Settlement Protocols',
        content: '• Instant Payment: Full agreed scrap value is transferred on the spot via IMPS, RTGS, or UPI directly into the registered owner’s bank account prior to or upon loading onto the recovery carrier.\n• Cashless Operations: In compliance with anti-money laundering and tax guidelines, all scrap transactions are executed via traceable banking channels.'
      },
      {
        id: 'depollution-environmental',
        heading: '7. Environmental & Depollution Standards',
        content: 'Vehicles delivered to CarCrush24 undergo a rigorous 4-stage scientific depollution protocol—including draining engine oils, transmission fluids, coolant, battery acids, and Freon gas recovery—in full adherence to Central Pollution Control Board (CPCB) guidelines and ISO 14001 environmental benchmarks.'
      },
      {
        id: 'jurisdiction',
        heading: '8. Governing Law & Dispute Resolution',
        content: 'These Terms and Conditions shall be governed by and construed in accordance with the laws of the Republic of India. Any legal proceedings or disputes arising out of or in connection with our services shall be subject to the exclusive jurisdiction of the competent courts in Roorkee / Haridwar District, Uttarakhand.'
      }
    ]
  }
};

// Read JSON file store
export function readStore() {
  try {
    if (fs.existsSync(storeFilePath)) {
      const data = fs.readFileSync(storeFilePath, 'utf-8');
      const parsed = JSON.parse(data);
      if (!parsed.company) {
        parsed.company = { ...defaultCompanyProfile };
      }
      if (!parsed.policies) {
        parsed.policies = { ...defaultPolicies };
      }
      return parsed;
    }
  } catch (err) {
    console.error('[dbStore] Failed reading store:', err.message);
  }
  return { admin: null, company: { ...defaultCompanyProfile }, policies: { ...defaultPolicies }, testimonials: [], blogs: [], leads: [] };
}

// Write JSON file store atomically
export function writeStore(data) {
  try {
    const dir = path.dirname(storeFilePath);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    const tempPath = `${storeFilePath}.tmp`;
    fs.writeFileSync(tempPath, JSON.stringify(data, null, 2), 'utf-8');
    fs.renameSync(tempPath, storeFilePath);
  } catch (err) {
    console.error('[dbStore] Failed writing store:', err.message);
  }
}

export const isMongoConnected = () => mongoose.connection.readyState === 1;

// --- Testimonials ---
export const getStoredTestimonials = async () => {
  if (isMongoConnected()) {
    try {
      const list = await Testimonial.find().sort({ createdAt: -1 }).lean();
      if (list && list.length > 0) {
        return list.map((t) => ({ ...t, id: t._id.toString() }));
      }
    } catch (err) {
      console.warn('[dbStore] MongoDB read error, falling back to JSON store:', err.message);
    }
  }
  const store = readStore();
  return store.testimonials || [];
};

export const saveStoredTestimonial = async (data) => {
  const store = readStore();
  const newItem = {
    id: `test_${Date.now()}`,
    author: data.author,
    quote: data.quote,
    location: data.location || '',
    vehicle: data.vehicle || '',
    date: data.date || new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }),
    rating: Number(data.rating) || 5,
    createdAt: new Date().toISOString(),
  };

  store.testimonials = [newItem, ...(store.testimonials || [])];
  writeStore(store);

  if (isMongoConnected()) {
    try {
      const doc = new Testimonial(newItem);
      await doc.save();
      newItem._id = doc._id.toString();
    } catch (err) {
      console.warn('[dbStore] Could not persist to MongoDB:', err.message);
    }
  }

  return newItem;
};

export const updateStoredTestimonial = async (id, data) => {
  const store = readStore();
  let updatedItem = null;
  store.testimonials = (store.testimonials || []).map((t) => {
    if (String(t.id) === String(id) || String(t._id) === String(id)) {
      updatedItem = { ...t, ...data };
      return updatedItem;
    }
    return t;
  });

  if (updatedItem) {
    writeStore(store);
  }

  if (isMongoConnected()) {
    try {
      if (mongoose.Types.ObjectId.isValid(id)) {
        await Testimonial.findByIdAndUpdate(id, data, { new: true });
      }
    } catch (err) {
      console.warn('[dbStore] MongoDB update failed:', err.message);
    }
  }

  return updatedItem;
};

export const deleteStoredTestimonial = async (id) => {
  const store = readStore();
  const initialLen = store.testimonials?.length || 0;
  store.testimonials = (store.testimonials || []).filter(
    (t) => String(t.id) !== String(id) && String(t._id) !== String(id)
  );
  writeStore(store);

  if (isMongoConnected()) {
    try {
      if (mongoose.Types.ObjectId.isValid(id)) {
        await Testimonial.findByIdAndDelete(id);
      }
    } catch (err) {
      console.warn('[dbStore] MongoDB delete failed:', err.message);
    }
  }

  return store.testimonials.length < initialLen;
};

// --- Blogs ---
export const getStoredBlogs = async () => {
  if (isMongoConnected()) {
    try {
      const list = await Blog.find().sort({ createdAt: -1 }).lean();
      if (list && list.length > 0) {
        return list.map((b) => ({ ...b, id: b._id.toString() }));
      }
    } catch (err) {
      console.warn('[dbStore] MongoDB read blogs error, falling back to JSON store:', err.message);
    }
  }
  const store = readStore();
  return store.blogs || [];
};

export const getStoredBlogBySlug = async (slug) => {
  const all = await getStoredBlogs();
  return all.find((b) => b.slug === slug) || null;
};

export const saveStoredBlog = async (data) => {
  const store = readStore();
  const cleanSlug =
    data.slug?.trim() ||
    data.title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)+/g, '');

  const newBlog = {
    id: `blog_${Date.now()}`,
    title: data.title,
    slug: cleanSlug,
    excerpt: data.excerpt || '',
    category: data.category || 'Policy & Rules',
    readTime: data.readTime || '5 min read',
    date: data.date || new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
    tag: data.tag || 'MoRTH Compliance',
    featured: !!data.featured,
    image: data.image || '/images/blogs/blog1.jpg',
    contentHtml: data.contentHtml || '',
    gallery: data.gallery || [],
    sections: data.sections || [
      {
        id: 'overview',
        heading: data.title,
        paragraphs: [data.excerpt || 'Article details and compliance guidelines.'],
      },
    ],
    createdAt: new Date().toISOString(),
  };

  store.blogs = [newBlog, ...(store.blogs || [])];
  writeStore(store);

  if (isMongoConnected()) {
    try {
      const doc = new Blog(newBlog);
      await doc.save();
      newBlog._id = doc._id.toString();
    } catch (err) {
      console.warn('[dbStore] Could not persist blog to MongoDB:', err.message);
    }
  }

  return newBlog;
};

export const updateStoredBlog = async (id, data) => {
  const store = readStore();
  let updated = null;
  store.blogs = (store.blogs || []).map((b) => {
    if (String(b.id) === String(id) || String(b._id) === String(id) || b.slug === id) {
      updated = { ...b, ...data };
      return updated;
    }
    return b;
  });

  if (updated) {
    writeStore(store);
  }

  if (isMongoConnected()) {
    try {
      if (mongoose.Types.ObjectId.isValid(id)) {
        await Blog.findByIdAndUpdate(id, data, { new: true });
      }
    } catch (err) {
      console.warn('[dbStore] MongoDB blog update failed:', err.message);
    }
  }

  return updated;
};

export const deleteStoredBlog = async (id) => {
  const store = readStore();
  const initialLen = store.blogs?.length || 0;
  store.blogs = (store.blogs || []).filter(
    (b) => String(b.id) !== String(id) && String(b._id) !== String(id) && b.slug !== id
  );
  writeStore(store);

  if (isMongoConnected()) {
    try {
      if (mongoose.Types.ObjectId.isValid(id)) {
        await Blog.findByIdAndDelete(id);
      }
    } catch (err) {
      console.warn('[dbStore] MongoDB blog delete failed:', err.message);
    }
  }

  return store.blogs.length < initialLen;
};

// --- Leads ---
export const getStoredLeads = async () => {
  if (isMongoConnected()) {
    try {
      const list = await Lead.find().sort({ createdAt: -1 }).lean();
      if (list && list.length > 0) {
        return list.map((l) => ({ ...l, id: l._id.toString() }));
      }
    } catch (err) {
      console.warn('[dbStore] MongoDB read leads error:', err.message);
    }
  }
  const store = readStore();
  return store.leads || [];
};

export const saveStoredLead = async (data) => {
  const store = readStore();
  const newLead = {
    id: `LD-${Math.floor(1000 + Math.random() * 9000)}`,
    regNumber: data.regNumber?.toUpperCase() || 'DL 00 XX 0000',
    vehicleType: data.vehicleType || 'Car (Sedan)',
    vehicleMakeModel: data.vehicleMakeModel || 'Vehicle',
    condition: data.condition || 'End-of-Life',
    mileage: data.mileage || 'N/A',
    location: data.location || 'Delhi NCR',
    pincode: data.pincode || '',
    customerName: data.customerName || 'Customer',
    phone: data.phone || '',
    email: data.email || '',
    status: data.status || 'new',
    visitorId: data.visitorId || `vis_${Date.now()}`,
    estimatedWeight: data.estimatedWeight || '1,100 kg',
    notes: data.notes || '',
    createdAt: new Date().toISOString(),
  };

  store.leads = [newLead, ...(store.leads || [])];
  writeStore(store);

  if (isMongoConnected()) {
    try {
      const doc = new Lead(newLead);
      await doc.save();
      newLead._id = doc._id.toString();
    } catch (err) {
      console.warn('[dbStore] MongoDB lead save failed:', err.message);
    }
  }

  return newLead;
};

export const updateStoredLeadStatus = async (id, status) => {
  const store = readStore();
  let updated = null;
  store.leads = (store.leads || []).map((l) => {
    if (String(l.id) === String(id) || String(l._id) === String(id)) {
      updated = { ...l, status };
      return updated;
    }
    return l;
  });

  if (updated) {
    writeStore(store);
  }

  if (isMongoConnected()) {
    try {
      if (mongoose.Types.ObjectId.isValid(id)) {
        await Lead.findByIdAndUpdate(id, { status }, { new: true });
      }
    } catch (err) {
      console.warn('[dbStore] MongoDB update lead failed:', err.message);
    }
  }

  return updated;
};

export const deleteStoredLead = async (id) => {
  const store = readStore();
  const initialLen = store.leads?.length || 0;
  store.leads = (store.leads || []).filter(
    (l) => String(l.id) !== String(id) && String(l._id) !== String(id)
  );
  writeStore(store);

  if (isMongoConnected()) {
    try {
      if (mongoose.Types.ObjectId.isValid(id)) {
        await Lead.findByIdAndDelete(id);
      }
    } catch (err) {
      console.warn('[dbStore] MongoDB delete lead failed:', err.message);
    }
  }

  return store.leads.length < initialLen;
};

// --- Admin Auth & Profile ---
export const getStoredAdmin = async (email) => {
  if (isMongoConnected() && email) {
    try {
      const admin = await Admin.findOne({ email: email.toLowerCase() });
      if (admin) return admin;
    } catch (err) {
      console.warn('[dbStore] MongoDB admin query failed:', err.message);
    }
  }
  const store = readStore();
  return store.admin;
};

export const updateStoredAdminProfile = async (data) => {
  const store = readStore();
  store.admin = {
    ...store.admin,
    name: data.name || store.admin?.name || 'Sanjay Rawat',
    email: data.email ? data.email.toLowerCase().trim() : store.admin?.email || 'admin@carcrush24.com',
    facility: data.facility || store.admin?.facility || '',
    role: data.role || store.admin?.role || 'superadmin',
  };
  writeStore(store);

  if (isMongoConnected()) {
    try {
      if (data.id && mongoose.Types.ObjectId.isValid(data.id)) {
        await Admin.findByIdAndUpdate(data.id, data, { new: true });
      } else {
        await Admin.findOneAndUpdate(
          { email: store.admin.email },
          { name: store.admin.name, email: store.admin.email },
          { new: true, upsert: true }
        );
      }
    } catch (err) {
      console.warn('[dbStore] MongoDB admin profile update failed:', err.message);
    }
  }

  return store.admin;
};

export const updateStoredAdminPassword = async (email, newHashedPassword) => {
  const store = readStore();
  if (store.admin) {
    store.admin.password = newHashedPassword;
    writeStore(store);
  }

  if (isMongoConnected()) {
    try {
      await Admin.findOneAndUpdate(
        { email: email.toLowerCase().trim() },
        { password: newHashedPassword }
      );
    } catch (err) {
      console.warn('[dbStore] MongoDB admin password update failed:', err.message);
    }
  }

  return true;
};

// --- Company Profile ---
export const getStoredCompanyProfile = async () => {
  if (isMongoConnected()) {
    try {
      const doc = await CompanyProfile.findOne().lean();
      if (doc) {
        return {
          ...defaultCompanyProfile,
          ...doc,
          id: doc._id.toString(),
        };
      }
    } catch (err) {
      console.warn('[dbStore] MongoDB company profile read error:', err.message);
    }
  }
  const store = readStore();
  return store.company || { ...defaultCompanyProfile };
};

export const updateStoredCompanyProfile = async (data) => {
  const store = readStore();
  const merged = {
    ...defaultCompanyProfile,
    ...(store.company || {}),
    ...data,
    updatedAt: new Date().toISOString(),
  };

  store.company = merged;
  writeStore(store);

  if (isMongoConnected()) {
    try {
      await CompanyProfile.findOneAndUpdate(
        {},
        merged,
        { upsert: true, new: true }
      );
    } catch (err) {
      console.warn('[dbStore] MongoDB company profile update failed:', err.message);
    }
  }

  return merged;
};

// --- Legal Policies (Privacy Policy & Terms and Conditions) ---
export const getStoredPolicy = async (type) => {
  const store = readStore();
  const policies = store.policies || defaultPolicies;
  return policies[type] || defaultPolicies[type] || null;
};

export const getAllStoredPolicies = async () => {
  const store = readStore();
  return store.policies || defaultPolicies;
};

export const updateStoredPolicy = async (type, data) => {
  const store = readStore();
  if (!store.policies) {
    store.policies = { ...defaultPolicies };
  }

  const existing = store.policies[type] || defaultPolicies[type] || { type };
  const updatedPolicy = {
    ...existing,
    ...data,
    type,
    lastUpdated: new Date().toISOString(),
  };

  store.policies[type] = updatedPolicy;
  writeStore(store);

  return updatedPolicy;
};

