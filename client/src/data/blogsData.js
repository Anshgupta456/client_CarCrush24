export const blogs = [
  {
    id: 1,
    slug: 'indias-vehicle-scrappage-policy-guide',
    title: "The Comprehensive Guide to India's Vehicle Scrappage Policy (2024–2025)",
    excerpt: 'Understand the end-of-life vehicle mandates, the 10-year diesel and 15-year petrol rules in Delhi NCR, and how to stay legally compliant while maximizing your vehicle scrap value.',
    category: 'Policy & Rules',
    readTime: '6 min read',
    date: 'Sept 12, 2026',
    featured: true,
    image: '/images/blogs/blog1.jpg',
    tag: 'MoRTH Compliance',
    tableOfContents: [
      { id: 'overview', title: '1. Policy Overview & National Mandate' },
      { id: 'age-limits', title: '2. Vehicle Age Limits: Delhi-NCR vs Rest of India' },
      { id: 'rules-table', title: '3. Compliance Comparison Matrix' },
      { id: 'rvsf-facility', title: '4. The Role of Authorized RVSF Facilities' },
      { id: 'financial-benefits', title: '5. Tax Concessions & Scrappage Benefits' },
      { id: 'gallery', title: '6. Scrappage Operations Gallery' },
      { id: 'faq-summary', title: '7. Key Takeaways for Vehicle Owners' },
    ],
    sections: [
      {
        id: 'overview',
        heading: 'Policy Overview & National Mandate',
        paragraphs: [
          "India’s Ministry of Road Transport and Highways (MoRTH) enacted the Voluntary Vehicle-Fleet Modernization Program (VVMP), widely recognized as the National Vehicle Scrappage Policy. The policy aims to phase out unfit, polluting, and end-of-life vehicles (ELVs) from Indian roads through automated testing stations and government-registered vehicle scrapping facilities (RVSFs).",
          "For vehicle owners, holding onto an expired registration no longer just risks municipal challans—it invalidates your third-party motor insurance, exposes you to criminal liability if the vehicle or chassis number is misused, and incurs compounding annual fitness testing fees.",
        ],
        callout: {
          type: 'warning',
          title: 'Legal Alert for Vehicle Owners',
          message: 'Driving or parking a deregistered vehicle on public roads in the National Capital Region (NCR) can lead to immediate impounding by transport enforcement squads under Section 59 of the Motor Vehicles Act.',
        },
      },
      {
        id: 'age-limits',
        heading: 'Vehicle Age Limits: Delhi-NCR vs Rest of India',
        paragraphs: [
          "A crucial aspect of India’s scrappage policy is the distinction between national guidelines and the stringent National Green Tribunal (NGT) mandates enforced across the Delhi-NCR perimeter.",
          "While vehicles in other states can technically seek registration renewals after 15 years through rigorous automated fitness testing, all diesel vehicles older than 10 years and petrol vehicles older than 15 years are automatically deregistered and banned from plying in Delhi NCR.",
        ],
        list: [
          "Diesel Vehicles (Delhi-NCR): Mandatory deregistration at 10 years from the date of initial registration.",
          "Petrol Vehicles (Delhi-NCR): Mandatory deregistration at 15 years.",
          "Commercial Fleets (Pan-India): Mandatory automated fitness certification annually after 8 years; deemed unfit after 15 years without green certification.",
          "Private Vehicles (Non-NCR): Fitness re-inspection every 5 years after the initial 15-year registration period.",
        ],
      },
      {
        id: 'rules-table',
        heading: 'Compliance Comparison Matrix',
        paragraphs: [
          "The following matrix outlines the regulatory differences, fee penalties, and scrappage pathways across vehicle categories:",
        ],
        table: {
          headers: ['Vehicle Category', 'Applicable Region', 'Maximum Permitted Age', 'RTO Action on Expiry', 'Scrappage Incentive'],
          rows: [
            ['Private Diesel Car', 'Delhi NCR', '10 Years', 'Automatic De-registration / Impound Order', 'Up to 25% Motor Vehicle Tax Rebate'],
            ['Private Petrol Car', 'Delhi NCR', '15 Years', 'Registration Cancelled on Vahan', 'Up to 25% Motor Vehicle Tax Rebate'],
            ['Private Cars (All Fuels)', 'Rest of India', '15 Years (Renewable)', 'Compounding Fitness Retest Fee', 'Up to 25% Road Tax Discount via CoD'],
            ['Commercial Trucks/Buses', 'Pan-India', '15 Years', 'Mandatory Scrappage / Green Cess Penalty', 'Up to 15% Commercial Vehicle Tax Rebate'],
            ['Two-Wheelers', 'Pan-India', '15 Years', 'Fitness Retest or Scrapping Certificate', 'New Vehicle Manufacturer Rebates'],
          ],
        },
      },
      {
        id: 'in-content-cta-1',
        inContentCta: {
          title: 'Is Your Vehicle Approaching the 10 or 15 Year Limit?',
          subtitle: 'Check your vehicle scrap valuation instantly with CarCrush24’s algorithmic pricing engine and get free doorstep towing.',
          buttonText: 'Check Your Scrap Value Now',
          link: '/quote',
        },
      },
      {
        id: 'rvsf-facility',
        heading: 'The Role of Authorized RVSF Facilities',
        paragraphs: [
          "A Registered Vehicle Scrapping Facility (RVSF) like CarCrush24 is fundamentally different from a local roadside junkyard. An RVSF operates under strict environmental depollution norms and holds direct software handshakes with MoRTH’s Parivahan Vahan database.",
          "When you scrap your car at CarCrush24, two vital legal certificates are issued in your name: the Certificate of Deposit (CoD) and the Certificate of Vehicle Scrapping (CVS). These documents legally sever your ownership liability forever and entitle you to substantial motor tax discounts on new car purchases.",
        ],
        list: [
          "Direct Parivahan API integration eliminates any risk of chassis cloning or unauthorized resale.",
          "Zero-landfill depollution safely drains toxic battery acids, AC Freon refrigerants, and engine lubricants.",
          "Transparent algorithmic scrap value paid directly into your bank account before towing.",
        ],
      },
      {
        id: 'gallery',
        heading: 'Scrappage Operations Gallery',
        paragraphs: [
          "Take an inside look at certified RVSF operations, depollution stations, and high-precision metal recycling infrastructure:",
        ],
        gallery: [
          {
            url: '/images/blogs/blog1.jpg',
            caption: 'Automated 4-stage depollution bay separating hazardous oils and coolants',
          },
          {
            url: '/images/blogs/blog4.jpg',
            caption: 'Certified technicians conducting digital chassis number verification',
          },
          {
            url: '/images/blogs/blog5.jpg',
            caption: 'High-density metal baling and circular secondary steel reclamation',
          },
        ],
      },
      {
        id: 'financial-benefits',
        heading: 'Tax Concessions & Scrappage Benefits',
        paragraphs: [
          "The policy offers compelling financial incentives to encourage owners to trade in their end-of-life vehicles rather than leaving them abandoned or selling them to unregulated scrap dealers:",
        ],
        list: [
          "Motor Vehicle Road Tax Concession: Up to 25% concession on road tax for new non-transport vehicles, and up to 15% for transport vehicles.",
          "Scrap Value Compensation: RVSF scrap payment ranging between 4% to 6% of the ex-showroom price of a comparable new vehicle based on kerb weight.",
          "Registration Fee Waiver: Waiver of complete registration fees for new vehicles purchased against a valid Certificate of Deposit (CoD).",
          "OEM Discounts: Major automobile manufacturers offer an additional 5% discount on new car purchases when presenting a valid CoD.",
        ],
      },
      {
        id: 'faq-summary',
        heading: 'Key Takeaways for Vehicle Owners',
        paragraphs: [
          "Retiring an end-of-life vehicle is no longer a burdensome chore. With CarCrush24’s completely digital process, you can book a free doorstep evaluation, obtain maximum commodity-indexed payouts, and receive your official MoRTH Certificate of Deposit in under 48 hours.",
        ],
      },
    ],
  },
  {
    id: 2,
    slug: 'claim-25-percent-road-tax-concession-cod',
    title: 'How to Claim Up to 25% Motor Vehicle Tax Concession with Certificate of Deposit (CoD)',
    excerpt: 'Did you know retiring your end-of-life car unlocks massive road-tax rebates on your next new vehicle? Here is a step-by-step walkthrough to redeem your Parivahan CoD voucher.',
    category: 'Tax & Savings',
    readTime: '5 min read',
    date: 'Sept 10, 2026',
    featured: false,
    image: '/images/blogs/blog2.jpg',
    tag: 'Tax Benefits',
    tableOfContents: [
      { id: 'what-is-cod', title: '1. What is a Certificate of Deposit (CoD)?' },
      { id: 'tax-slabs', title: '2. State-Wise Road Tax Concession Slabs' },
      { id: 'step-by-step', title: '3. Step-by-Step Redemption Process' },
      { id: 'tradability', title: '4. Did You Know? CoD is Electronically Tradable' },
      { id: 'gallery', title: '5. Delivery & Certificate Documentation' },
    ],
    sections: [
      {
        id: 'what-is-cod',
        heading: 'What is a Certificate of Deposit (CoD)?',
        paragraphs: [
          "A Certificate of Deposit (CoD) is an official digital voucher issued by an authorized Registered Vehicle Scrapping Facility (RVSF) upon the legal handover of an end-of-life vehicle. Generated directly through the central MoRTH Vahan database, the CoD serves as irrefutable proof that your vehicle has been retired in compliance with national environmental laws.",
          "Beyond confirming legal deregistration, the CoD serves as a valuable financial asset, enabling substantial tax concessions when registering your next new car, commercial truck, or two-wheeler.",
        ],
        callout: {
          type: 'tip',
          title: 'Maximum Savings Tip',
          message: 'The CoD is valid for a period of up to 3 years from the date of issuance, giving you ample time to choose and register your next vehicle while securing full tax concessions.',
        },
      },
      {
        id: 'tax-slabs',
        heading: 'State-Wise Road Tax Concession Slabs',
        paragraphs: [
          "Under the Central Motor Vehicles Rules, state governments have rolled out road tax concessions for buyers who furnish a valid CoD at the time of new car registration:",
        ],
        table: {
          headers: ['State / Union Territory', 'Non-Transport (Private) Rebate', 'Transport (Commercial) Rebate', 'Validity Duration'],
          rows: [
            ['Delhi NCR', 'Up to 25% Motor Tax Concession', 'Up to 15% Road Tax Concession', '3 Years'],
            ['Haryana', 'Up to 25% Motor Tax Concession', 'Up to 15% Road Tax Concession', '3 Years'],
            ['Uttar Pradesh', 'Up to 25% Motor Tax Concession', 'Up to 15% Road Tax Concession', '3 Years'],
            ['Punjab', 'Up to 25% Motor Tax Concession', 'Up to 15% Road Tax Concession', '3 Years'],
            ['Rajasthan', 'Up to 25% Motor Tax Concession', 'Up to 15% Road Tax Concession', '3 Years'],
          ],
        },
      },
      {
        id: 'in-content-cta-1',
        inContentCta: {
          title: 'Want to Estimate Your CoD Road Tax Savings?',
          subtitle: 'Talk to CarCrush24 specialists to calculate your exact scrap value and road tax discount.',
          buttonText: 'Calculate Your Total Savings',
          link: '/quote',
        },
      },
      {
        id: 'step-by-step',
        heading: 'Step-by-Step Redemption Process',
        paragraphs: [
          "Redeeming your CoD at your local automobile dealership is completely digitized and straightforward:",
        ],
        list: [
          "Step 1: Scrap your end-of-life vehicle with CarCrush24 to generate your authenticated digital CoD voucher on Parivahan.",
          "Step 2: When purchasing your new car, present your digital CoD number and OTP verification to the authorized car dealer.",
          "Step 3: The dealership enters your CoD reference into the Vahan 4.0 portal during new vehicle registration.",
          "Step 4: The system automatically deducts up to 25% from your calculated motor vehicle road tax liability, and registration fee charges are waived.",
          "Step 5: Receive your new vehicle registration certificate reflecting the tax concession endorsement.",
        ],
      },
      {
        id: 'tradability',
        heading: 'Did You Know? CoD is Electronically Tradable',
        paragraphs: [
          "If you scrap your old vehicle but do not intend to purchase a new car immediately, your CoD is not wasted. MoRTH rules permit the electronic transfer and trading of Certificates of Deposit on authorized digital platforms.",
          "This means you can legally sell your CoD voucher to other prospective car buyers who want to claim the 25% road-tax discount, unlocking additional liquidity on top of your scrap metal compensation!",
        ],
      },
      {
        id: 'gallery',
        heading: 'Delivery & Certificate Documentation',
        paragraphs: [
          "See how customers unlock real savings and drive home their new vehicles with certified Certificate of Deposit discounts:",
        ],
        gallery: [
          {
            url: '/images/blogs/blog2.jpg',
            caption: 'Customer receiving Certificate of Deposit tax savings at authorized dealership',
          },
          {
            url: '/images/blogs/blog3.jpg',
            caption: 'Cleaner, greener vehicle fleets on modern North Indian expressways',
          },
        ],
      },
    ],
  },
  {
    id: 3,
    slug: 'delhi-ncr-10-15-year-rule-penalties',
    title: 'Delhi-NCR 10/15-Year Rule: What Happens If Your End-of-Life Vehicle Is Seized?',
    excerpt: 'Navigating municipal impound yards and police challans is costly. Learn how automated enforcement cameras flag deregistered cars and why proactive RVSF scrappage is your safest choice.',
    category: 'Policy & Rules',
    readTime: '4 min read',
    date: 'Sept 06, 2026',
    featured: false,
    image: '/images/blogs/blog3.jpg',
    tag: 'Legal Advisory',
    tableOfContents: [
      { id: 'enforcement', title: '1. Automated Camera Enforcement in Delhi NCR' },
      { id: 'penalties', title: '2. The Financial Cost of Vehicle Impoundment' },
      { id: 'safest-option', title: '3. Why Proactive Scrappage is Your Best Route' },
      { id: 'gallery', title: '4. Urban Mobility & Green Transition' },
    ],
    sections: [
      {
        id: 'enforcement',
        heading: 'Automated Camera Enforcement in Delhi NCR',
        paragraphs: [
          "In accordance with National Green Tribunal (NGT) and Supreme Court directives, the Transport Department of Delhi, together with municipal authorities across Noida, Gurugram, and Ghaziabad, has activated automated Number Plate Recognition (ANPR) cameras at all major intersections and toll plazas.",
          "These cameras automatically cross-reference registration numbers against the Vahan central database. Any diesel vehicle older than 10 years or petrol vehicle older than 15 years detected in public areas triggers an instant impound order.",
        ],
        callout: {
          type: 'warning',
          title: 'Impound Risk Even When Parked',
          message: 'Under CAQM (Commission for Air Quality Management) guidelines, municipal tow squads are legally authorized to seize deregistered vehicles parked in public parking lots or outside residential properties.',
        },
      },
      {
        id: 'penalties',
        heading: 'The Financial Cost of Vehicle Impoundment',
        paragraphs: [
          "Once a vehicle is impounded by transport authorities, reclaiming it or mitigating penalties is extraordinarily complex and financially draining:",
        ],
        list: [
          "Mandatory Towing & Seizure Penalties: Fines starting from ₹10,000 for private cars and ₹20,000 for commercial vehicles.",
          "Daily Parking Lot Demurrage: Compounding daily yard parking charges of ₹500 to ₹1,500 per day at municipal impound grounds.",
          "Affidavit Undertaking: Owners must submit judicial affidavits stating the vehicle will be removed from Delhi NCR within 48 hours or sent directly to an RVSF.",
          "Loss of Scrap Value: Vehicles parked in open impound yards suffer rapid rust and part pilferage, severely depreciating their recoverable scrap metal payout.",
        ],
      },
      {
        id: 'in-content-cta-1',
        inContentCta: {
          title: 'Don’t Risk Vehicle Impoundment & Costly Challans',
          subtitle: 'CarCrush24 provides free doorstep pickup, legal RTO deregistration, and instant compensation before enforcement squads arrive.',
          buttonText: 'Book Free Doorstep Pickup',
          link: '/quote',
        },
      },
      {
        id: 'safest-option',
        heading: 'Why Proactive Scrappage is Your Best Route',
        paragraphs: [
          "By proactively scrapping your end-of-life vehicle with CarCrush24, you completely avoid seizure risks, fines, and RTO complications. Our team dispatches specialized hydraulic flatbed trucks to collect your vehicle directly from your home, issues instant digital bank payments, and hands you legitimate MoRTH deregistration documents.",
        ],
      },
      {
        id: 'gallery',
        heading: 'Urban Mobility & Green Transition',
        paragraphs: [
          "Delhi NCR is moving rapidly toward sustainable, zero-emission transportation infrastructure:",
        ],
        gallery: [
          {
            url: '/images/blogs/blog3.jpg',
            caption: 'Clean-fuel and electric vehicles leading North India’s green mobility shift',
          },
          {
            url: '/images/blogs/blog1.jpg',
            caption: 'Zero-emission automotive depollution and recycling facilities in North India',
          },
        ],
      },
    ],
  },
  {
    id: 4,
    slug: 'dangers-of-unauthorized-kabadiwala-scrappage',
    title: 'Why Selling to Unorganized Scrap Yards Exposes You to Chassis Identity Theft',
    excerpt: 'Local uncertified scrap dealers often resell vehicle chassis numbers to stolen cars or skip RTO deregistrations entirely, leaving original owners legally liable for accidents or crimes.',
    category: 'Scrappage Guides',
    readTime: '5 min read',
    date: 'Aug 29, 2026',
    featured: false,
    image: '/images/blogs/blog4.jpg',
    tag: 'Safety & Fraud',
    tableOfContents: [
      { id: 'chassis-cloning', title: '1. The Danger of Chassis Cloning & Vehicle Identity Theft' },
      { id: 'unorganized-vs-rvsf', title: '2. Roadside Scrap Yard vs Authorized RVSF' },
      { id: 'environmental-damage', title: '3. Toxic Groundwater & Soil Contamination' },
      { id: 'gallery', title: '4. Scientific Verification & Safety Infrastructure' },
    ],
    sections: [
      {
        id: 'chassis-cloning',
        heading: 'The Danger of Chassis Cloning & Vehicle Identity Theft',
        paragraphs: [
          "When you sell an end-of-life car to an unauthorized local scrap dealer (kabadiwala), you receive no legally recognized deregistration documentation. In dozens of documented police investigations across North India, chassis numbers and registration plates from illegally scrapped cars were found welded onto stolen vehicles.",
          "Because the car remains officially registered under your name in the Parivahan database, any hit-and-run accident, criminal activity, or financial crime involving the cloned chassis makes YOU the primary suspect in police records.",
        ],
        callout: {
          type: 'warning',
          title: 'Owner Legal Indemnity Warning',
          message: 'Under Supreme Court precedents, the registered owner on the Vahan portal remains strictly liable for third-party damages and legal consequences until the RTO officially issues a Certificate of Vehicle Scrapping (CVS).',
        },
      },
      {
        id: 'unorganized-vs-rvsf',
        heading: 'Roadside Scrap Yard vs Authorized RVSF',
        paragraphs: [
          "Understanding the clear contrasts between informal scrapyards and certified RVSF facilities is essential for every vehicle owner:",
        ],
        table: {
          headers: ['Feature', 'Unorganized Scrap Yard (Kabadiwala)', 'Authorized RVSF (CarCrush24)'],
          rows: [
            ['Government Accreditation', 'None (Illegal operation under MV Rules 2021)', '100% MoRTH & State Government Authorized'],
            ['Legal Indemnity Certificate', 'Handwritten slip with zero legal validity', 'Digital Certificate of Deposit (CoD) & CVS'],
            ['Parivahan Database Sync', 'No access; vehicle remains active in your name', 'Direct API handshake; instant RTO cancellation'],
            ['Chassis Destruction', 'Often cut and resold in black markets', 'Physically sheared & filmed for government compliance'],
            ['Environmental Standards', 'Acid, coolants, and freon dumped into soil/drainage', 'Automated closed-loop 4-stage chemical depollution'],
            ['Payment Security', 'Cash deductions, hidden towing cuts', 'Algorithmic market payout direct to bank account'],
          ],
        },
      },
      {
        id: 'in-content-cta-1',
        inContentCta: {
          title: 'Protect Yourself from Chassis Misuse & Legal Liability',
          subtitle: 'Scrap your vehicle with North India’s authorized RVSF facility and get complete legal indemnity.',
          buttonText: 'Get Certified Quote with 100% Indemnity',
          link: '/quote',
        },
      },
      {
        id: 'environmental-damage',
        heading: 'Toxic Groundwater & Soil Contamination',
        paragraphs: [
          "Informal scrap yards perform primitive metal cutting using open gas torches. During this crude process, lead-acid battery electrolytes seep directly into surrounding agricultural topsoil, Freon R134a AC gases vent directly into the atmosphere, and spent engine oils contaminate regional groundwater tables.",
          "At CarCrush24, depollution occurs on sealed epoxy floors with specialized pneumatic evacuation pumps, ensuring zero ecological contamination.",
        ],
      },
      {
        id: 'gallery',
        heading: 'Scientific Verification & Safety Infrastructure',
        paragraphs: [
          "Explore how CarCrush24 ensures authentic vehicle dismantling and legal security:",
        ],
        gallery: [
          {
            url: '/images/blogs/blog4.jpg',
            caption: 'Digital tablet chassis scanning and physical chassis destruction verification',
          },
          {
            url: '/images/blogs/blog5.jpg',
            caption: 'Clean, automated industrial metal shredding and reclamation machinery',
          },
        ],
      },
    ],
  },
  {
    id: 5,
    slug: 'how-to-deregister-car-parivahan-vahan-portal',
    title: 'Step-by-Step Guide: Complete Vehicle Deregistration on the Parivahan Portal',
    excerpt: 'A clear guide explaining Form 35, NOC requirements, chassis verification, and how CarCrush24 automates the official RTO cancellation so you never have to visit an RTO office.',
    category: 'Scrappage Guides',
    readTime: '7 min read',
    date: 'Aug 21, 2026',
    featured: false,
    image: '/images/blogs/blog6.jpg',
    tag: 'RTO Guide',
    tableOfContents: [
      { id: 'why-deregister', title: '1. Why Official RTO Deregistration is Mandatory' },
      { id: 'required-docs', title: '2. Required Documentation Checklist' },
      { id: 'automated-process', title: '3. How CarCrush24 Automates the Entire Workflow' },
      { id: 'gallery', title: '4. Digital RTO Documentation Showcase' },
    ],
    sections: [
      {
        id: 'why-deregister',
        heading: 'Why Official RTO Deregistration is Mandatory',
        paragraphs: [
          "Under Section 55 of the Motor Vehicles Act, 1988, every vehicle owner whose vehicle is permanently incapable of use or has been destroyed must apply for deregistration within 14 days.",
          "Failing to formally cancel vehicle registration keeps road-tax liabilities active, leaves chassis numbers vulnerable, and prevents you from receiving new car tax rebate vouchers.",
        ],
      },
      {
        id: 'required-docs',
        heading: 'Required Documentation Checklist',
        paragraphs: [
          "To complete a smooth online or RVSF deregistration, keep the following records ready:",
        ],
        list: [
          "Original Registration Certificate (RC) or digital RC copy from DigiLocker/mParivahan.",
          "Aadhaar Card of the registered owner for OTP verification.",
          "Bank Account details / cancelled cheque for direct-to-bank scrap settlement.",
          "NOC (No Objection Certificate) from your lending bank if the car had a loan / hypothecation (Form 35).",
          "Copy of valid PAN card for TDS exemption compliance.",
        ],
      },
      {
        id: 'in-content-cta-1',
        inContentCta: {
          title: 'Skip the RTO Queues & Paperwork Headaches',
          subtitle: 'CarCrush24 handles 100% of your Parivahan deregistration directly with MoRTH.',
          buttonText: 'Start Digital Scrapping Process',
          link: '/quote',
        },
      },
      {
        id: 'automated-process',
        heading: 'How CarCrush24 Automates the Entire Workflow',
        paragraphs: [
          "When you choose CarCrush24, you never need to visit a physical RTO office, hire expensive middlemen, or stand in endless queues. Here is our seamless automated pipeline:",
        ],
        list: [
          "1. Our compliance team verifies your vehicle title on the central Parivahan Vahan 4.0 database.",
          "2. Our recovery driver collects your vehicle with free hydraulic towing from your doorstep.",
          "3. We inspect the physical chassis stamping against Vahan database parameters.",
          "4. The vehicle undergoes scientific depollution and industrial shearing at our RVSF plant.",
          "5. Digital Certificate of Deposit (CoD) and Certificate of Vehicle Scrapping (CVS) are issued in your Parivahan account within 24–48 hours.",
        ],
      },
      {
        id: 'gallery',
        heading: 'Digital RTO Documentation Showcase',
        paragraphs: [
          "Experience transparent digital verification and certified certificate delivery:",
        ],
        gallery: [
          {
            url: '/images/blogs/blog4.jpg',
            caption: 'Technician checking vehicle engine number against Parivahan digital records',
          },
          {
            url: '/images/blogs/blog1.jpg',
            caption: 'Final vehicle scrapping certified under Government of India RVSF standards',
          },
        ],
      },
    ],
  },
  {
    id: 6,
    slug: 'environmental-impact-automotive-steel-recycling',
    title: 'Behind the Industrial Shredder: How CarCrush24 Recycles 90%+ of Automotive Steel',
    excerpt: 'Explore our scientific 4-stage depollution protocol that prevents hazardous freon gas, battery acids, and engine fluids from contaminating North India’s groundwater.',
    category: 'Eco Impact',
    readTime: '4 min read',
    date: 'Aug 14, 2026',
    featured: false,
    image: '/images/blogs/blog5.jpg',
    tag: 'Circularity',
    tableOfContents: [
      { id: 'circular-economy', title: '1. The Automotive Circular Economy' },
      { id: 'four-stages', title: '2. The 4-Stage Scientific Depollution Cycle' },
      { id: 'carbon-reduction', title: '3. Measurable Carbon Reduction & Resource Savings' },
      { id: 'gallery', title: '4. Industrial Shredding & Metal Recovery Gallery' },
    ],
    sections: [
      {
        id: 'circular-economy',
        heading: 'The Automotive Circular Economy',
        paragraphs: [
          "Every modern vehicle is an extraordinary reservoir of high-grade engineering materials. A single passenger car contains over 800 kg of structural steel, 150 kg of lightweight aluminium, 25 kg of electrical copper wiring, and high-value platinum/rhodium catalytic converters.",
          "When end-of-life cars are dumped in unorganized yards, these valuable secondary minerals are degraded or lost. At CarCrush24, we feed over 90% of recovered materials directly back into domestic manufacturing—drastically cutting the need for primary iron ore mining.",
        ],
      },
      {
        id: 'four-stages',
        heading: 'The 4-Stage Scientific Depollution Cycle',
        paragraphs: [
          "Before any metal is shredded, our facility enforces a rigorous 4-stage depollution protocol:",
        ],
        list: [
          "Stage 1: Battery & Pyrotechnics Containment – Safe disconnection of lead-acid and EV lithium-ion battery packs and controlled neutralisation of airbag inflators.",
          "Stage 2: Closed-Loop Fluid Evacuation – Vacuum extraction of engine oils, transmission fluids, brake fluids, and radiator glycols into bunded storage tanks.",
          "Stage 3: Refrigerant Recovery – Automated recovery of Freon R134a and R1234yf greenhouse cooling gases with zero atmospheric leakage.",
          "Stage 4: Dismantling & Shearing – Separation of tyres, windscreens, and plastic bumpers followed by heavy industrial hydraulic metal shearing.",
        ],
      },
      {
        id: 'in-content-cta-1',
        inContentCta: {
          title: 'Be Part of India’s Circular Automotive Revolution',
          subtitle: 'Retire your old vehicle with zero environmental damage and receive highest fair market compensation.',
          buttonText: 'Calculate Your Eco-Friendly Scrap Value',
          link: '/quote',
        },
      },
      {
        id: 'carbon-reduction',
        heading: 'Measurable Carbon Reduction & Resource Savings',
        paragraphs: [
          "Recycling secondary automotive steel consumes 74% less energy, 40% less water, and produces 86% less air pollution compared to smelting raw iron ore from virgin mines.",
          "With over 15,000 vehicles successfully processed to date, CarCrush24 has prevented more than 85,000 tons of CO₂ greenhouse emissions from entering North India’s atmosphere.",
        ],
      },
      {
        id: 'gallery',
        heading: 'Industrial Shredding & Metal Recovery Gallery',
        paragraphs: [
          "Witness high-powered secondary raw material reclamation and baling in action:",
        ],
        gallery: [
          {
            url: '/images/blogs/blog5.jpg',
            caption: 'Compressed secondary steel cubes ready for domestic electric arc furnace smelting',
          },
          {
            url: '/images/blogs/blog1.jpg',
            caption: 'Clean, modern dismantling stations designed for zero soil or groundwater seepage',
          },
        ],
      },
    ],
  },
  {
    id: 7,
    slug: 'commercial-fleet-scrappage-mandates-2026',
    title: 'Commercial Fleet Scrappage Mandates: What Truck, Bus & Taxi Operators Must Know',
    excerpt: 'Government policies now require automated fitness testing and mandatory scrappage for 15+ year commercial fleets. Discover how fleet managers can claim maximum scrap value.',
    category: 'Policy & Rules',
    readTime: '6 min read',
    date: 'Aug 08, 2026',
    featured: false,
    image: '/images/blogs/blog7.jpg',
    tag: 'Fleet Solutions',
    tableOfContents: [
      { id: 'commercial-mandates', title: '1. Commercial Fleet Regulations & Fitness Rules' },
      { id: 'fleet-benefits', title: '2. Tax Incentives & Commercial Fleet Discounts' },
      { id: 'bulk-scrappage', title: '3. Bulk Corporate Fleet Scrappage Solutions' },
      { id: 'gallery', title: '4. Fleet Recovery & Heavy Commercial Operations' },
    ],
    sections: [
      {
        id: 'commercial-mandates',
        heading: 'Commercial Fleet Regulations & Fitness Rules',
        paragraphs: [
          "India’s commercial transport sector faces strict green compliance standards. Under the latest MoRTH amendments, all commercial transport vehicles older than 8 years must undergo automated fitness testing every year, and vehicles reaching 15 years cannot have their fitness renewed without special green compliance audits.",
          "Additionally, government-owned transport buses and municipal utility vehicles exceeding 15 years are subject to mandatory, non-renewable scrappage orders.",
        ],
      },
      {
        id: 'fleet-benefits',
        heading: 'Tax Incentives & Commercial Fleet Discounts',
        paragraphs: [
          "To assist fleet operators with capital modernization, the government offers significant financial concessions:",
        ],
        list: [
          "Commercial Road Tax Concession: Up to 15% discount on road taxes when purchasing new commercial trucks, buses, or light commercial vehicles against a CoD.",
          "Exemption from High Registration Fees: Elimination of steep renewal surcharges and green cess charges imposed on aging commercial fleets.",
          "Bulk Scrap Metal Compensation: High per-ton commodity compensation paid promptly via corporate bank transfer.",
        ],
      },
      {
        id: 'in-content-cta-1',
        inContentCta: {
          title: 'Managing a Commercial Fleet with Aging Vehicles?',
          subtitle: 'CarCrush24 provides end-to-end bulk fleet scrappage, heavy flatbed towing, and corporate legal compliance documentation.',
          buttonText: 'Request Corporate Fleet Scrappage Quote',
          link: '/quote',
        },
      },
      {
        id: 'bulk-scrappage',
        heading: 'Bulk Corporate Fleet Scrappage Solutions',
        paragraphs: [
          "CarCrush24 partners directly with logistics enterprises, fleet operators, schools, and corporate institutions. We provide heavy-duty recovery cranes, multi-car carriers, dedicated compliance account managers, and bulk Certificate of Deposit issuance across 7 North Indian states.",
        ],
      },
      {
        id: 'gallery',
        heading: 'Fleet Recovery & Heavy Commercial Operations',
        paragraphs: [
          "Visualizing heavy-duty vehicle dismantling and large-scale industrial metal reclamation:",
        ],
        gallery: [
          {
            url: '/images/blogs/blog5.jpg',
            caption: 'Heavy metal shearing and copper motor recycling from commercial fleet scrap',
          },
          {
            url: '/images/blogs/blog3.jpg',
            caption: 'Modern commercial vehicles operating on sustainable North Indian transport corridors',
          },
        ],
      },
    ],
  },
];

export function getBlogBySlug(slug) {
  return blogs.find((b) => b.slug === slug);
}

export function getAllBlogSlugs() {
  return blogs.map((b) => b.slug);
}
