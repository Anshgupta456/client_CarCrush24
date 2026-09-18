import mongoose from 'mongoose';

const companyProfileSchema = new mongoose.Schema(
  {
    companyName: {
      type: String,
      required: true,
      default: 'CarCrush24',
      trim: true,
    },
    legalName: {
      type: String,
      default: 'Garhwal Scrape',
      trim: true,
    },
    tagline: {
      type: String,
      default: 'Recycle • Reuse • A Cleaner Tomorrow',
      trim: true,
    },
    rvsfRegistration: {
      type: String,
      default: 'MoRTH / RVSF / DL / 2024 / 0089',
      trim: true,
    },
    tollFreePhone: {
      type: String,
      default: '1800-22-CRUSH',
      trim: true,
    },
    tollFreeTel: {
      type: String,
      default: '1800227278',
      trim: true,
    },
    phone: {
      type: String,
      default: '+91 98765 43210',
      trim: true,
    },
    phoneTel: {
      type: String,
      default: '+919876543210',
      trim: true,
    },
    whatsappNumber: {
      type: String,
      default: '917310242424',
      trim: true,
    },
    whatsappDisplay: {
      type: String,
      default: '+91 73102 42424',
      trim: true,
    },
    email: {
      type: String,
      default: 'support@carcrush24.com',
      trim: true,
      lowercase: true,
    },
    corporateEmail: {
      type: String,
      default: 'info@carcrush24.com',
      trim: true,
      lowercase: true,
    },
    address: {
      type: String,
      default: 'Devbhoomi Industrial Areas, Khasra no. 216, Khatakhedi, Roorkee, Uttarakhand, 247667',
      trim: true,
    },
    facilityAddress: {
      type: String,
      default: 'Devbhoomi Industrial Areas, Khasra no. 216, Khatakhedi, Roorkee, Uttarakhand, 247667',
      trim: true,
    },
    operatingHours: {
      type: String,
      default: 'Monday – Sunday: 8:00 AM – 8:00 PM (24/7 Helpline Desk)',
      trim: true,
    },
    operatingHubs: {
      type: [String],
      default: [
        'Delhi NCR',
        'Punjab',
        'Haryana',
        'Uttar Pradesh',
        'Uttarakhand',
        'Jammu & Kashmir',
        'Chandigarh',
      ],
    },
    socialLinks: {
      twitter: {
        type: String,
        default: 'https://twitter.com/carcrush24',
      },
      linkedin: {
        type: String,
        default: 'https://linkedin.com/company/carcrush24',
      },
      facebook: {
        type: String,
        default: 'https://facebook.com/carcrush24',
      },
      instagram: {
        type: String,
        default: 'https://instagram.com/carcrush24',
      },
    },
  },
  {
    timestamps: true,
  }
);

const CompanyProfile =
  mongoose.models.CompanyProfile ||
  mongoose.model('CompanyProfile', companyProfileSchema);

export default CompanyProfile;
