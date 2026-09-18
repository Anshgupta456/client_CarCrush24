import mongoose from 'mongoose';

const leadSchema = new mongoose.Schema(
  {
    regNumber: {
      type: String,
      required: true,
      trim: true,
      uppercase: true,
      index: true,
    },
    vehicleType: {
      type: String,
      required: true,
      enum: ['Car (Sedan)', 'Car (Hatchback)', 'SUV', 'Commercial Truck', 'Two-Wheeler', 'Other'],
      default: 'Car (Sedan)',
    },
    vehicleMakeModel: {
      type: String,
      required: true,
      trim: true,
    },
    condition: {
      type: String,
      default: 'End-of-Life',
    },
    mileage: {
      type: String,
      default: 'N/A',
    },
    location: {
      type: String,
      required: true,
      trim: true,
    },
    pincode: {
      type: String,
      default: '',
    },
    customerName: {
      type: String,
      required: true,
      trim: true,
    },
    phone: {
      type: String,
      required: true,
      trim: true,
      index: true,
    },
    email: {
      type: String,
      trim: true,
      lowercase: true,
      default: '',
    },
    status: {
      type: String,
      enum: ['new', 'contacted', 'scheduled', 'collected', 'paid'],
      default: 'new',
      index: true,
    },
    visitorId: {
      type: String,
      default: '',
      index: true,
    },
    estimatedWeight: {
      type: String,
      default: '1,000 kg',
    },
    notes: {
      type: String,
      default: '',
    },
  },
  {
    timestamps: true,
  }
);

const Lead = mongoose.models.Lead || mongoose.model('Lead', leadSchema);

export default Lead;
