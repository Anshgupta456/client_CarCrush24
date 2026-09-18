// Realistic mock data for CarCrush24 Admin Dashboard
// Adheres to CLAUDE.md specs: Lead status lifecycle (new -> contacted -> scheduled -> collected -> paid),
// Parts inventory CRUD schema, Blog CMS, and GA4 tracking metrics.

export const initialLeads = [];


export const inventoryParts = [
  {
    id: 'PRT-801',
    title: 'Alternator 12V 90A (OEM Denso)',
    vehicleMakeModel: 'Maruti Suzuki Swift / Dzire Diesel (2012-2017)',
    category: 'Electrical',
    price: 3800,
    condition: 'A-Grade (Tested 13.8V Output)',
    inStock: true,
    sku: 'ALT-MS-D12',
    image: '/images/parts/alternator.jpg',
    addedDate: '2026-09-14',
  },
  {
    id: 'PRT-802',
    title: 'Starter Motor 1.2 kW',
    vehicleMakeModel: 'Hyundai i10 / Santro Xing 1.1L',
    category: 'Electrical',
    price: 2400,
    condition: 'Tested / Refurbished Solenoid',
    inStock: true,
    sku: 'STR-HY-I10',
    image: '/images/parts/starter.jpg',
    addedDate: '2026-09-12',
  },
  {
    id: 'PRT-803',
    title: 'Alloy Wheels 15" Set of 4 (OEM)',
    vehicleMakeModel: 'Honda City 4th Gen / Jazz',
    category: 'Wheels & Tires',
    price: 14500,
    condition: 'A-Grade (Zero Bends, Minor Scuffs)',
    inStock: true,
    sku: 'WHL-HC-15',
    image: '/images/parts/wheels.jpg',
    addedDate: '2026-09-10',
  },
  {
    id: 'PRT-804',
    title: 'Manual 5-Speed Gearbox Transmission',
    vehicleMakeModel: 'Mahindra Bolero / Scorpio M2DICR',
    category: 'Drivetrain',
    price: 19500,
    condition: 'A-Grade (Smooth Sync, Drain Inspected)',
    inStock: false,
    sku: 'GBX-MH-BLR',
    image: '/images/parts/gearbox.jpg',
    addedDate: '2026-09-08',
  },
  {
    id: 'PRT-805',
    title: 'AC Compressor Sanden 6-Groove',
    vehicleMakeModel: 'Maruti Suzuki WagonR / Alto K10 (2014-2020)',
    category: 'Climate Control',
    price: 5200,
    condition: 'Tested (Pressure Held at 280 PSI)',
    inStock: true,
    sku: 'ACC-MS-WGR',
    image: '/images/parts/compressor.jpg',
    addedDate: '2026-09-15',
  },
  {
    id: 'PRT-806',
    title: 'Right Front Headlamp Assembly (Clear Lens)',
    vehicleMakeModel: 'Hyundai Creta (2016-2019)',
    category: 'Lighting & Body',
    price: 4200,
    condition: 'OEM Genuine (All Tabs Intact)',
    inStock: true,
    sku: 'HLP-HY-CRT-R',
    image: '/images/parts/headlamp.jpg',
    addedDate: '2026-09-13',
  }
];

export const adminMetrics = {
  totalLeadsThisMonth: 142,
  leadsGrowthPct: '+24.6%',
  newLeadsCount: 18,
  scheduledPickups: 9,
  collectedThisMonth: 64,
  scrapMetalWeightTons: 86.4,
  avgResponseTimeMin: '18 min',
  whatsappConversionRate: '41.8%',
};

export const funnelData = [
  { step: 'Step 1: Registration Input', visitors: 1480, dropPct: '0%' },
  { step: 'Step 2: Vehicle Specs & Health', visitors: 1060, dropPct: '-28.4%' },
  { step: 'Step 3: Location & Pincode', visitors: 820, dropPct: '-22.6%' },
  { step: 'Step 4: Contact & Phone Verified', visitors: 610, dropPct: '-25.6%' },
  { step: 'Step 5: Quote Request Submitted', visitors: 540, dropPct: '-11.4%' },
];

export const regionalBreakdown = [
  { region: 'Delhi Central & West', count: 54, percentage: 38 },
  { region: 'Gurugram & Manesar (HR)', count: 37, percentage: 26 },
  { region: 'Noida & Greater Noida (UP)', count: 28, percentage: 20 },
  { region: 'Faridabad (HR)', count: 14, percentage: 10 },
  { region: 'Ghaziabad (UP)', count: 9, percentage: 6 },
];
