import { getStoredLeads, saveStoredLead, updateStoredLeadStatus, deleteStoredLead } from '../services/dbStore.js';

export const createLead = async (req, res) => {
  try {
    const raw = req.body || {};
    const customerName = (raw.customerName || raw.name || '').trim();
    const phone = (raw.phone || '').trim();
    const regNumber = (raw.regNumber || raw.vehicleNumber || 'PENDING-REG').trim().toUpperCase();

    if (!customerName || !phone) {
      return res.status(400).json({
        success: false,
        error: 'Customer name and contact phone number are required.',
      });
    }

    const vehicleMakeModel =
      raw.vehicleMakeModel ||
      `${raw.year || ''} ${raw.make || ''} ${raw.model || ''}`.trim() ||
      'Vehicle details submitted';

    const location = raw.location || raw.city || 'Delhi NCR';
    const pincode = raw.pincode || raw.postalCode || '';

    const leadData = {
      regNumber,
      vehicleType: raw.vehicleType || (raw.clientType === 'commercial' ? 'Commercial Truck' : 'Car (Sedan)'),
      vehicleMakeModel,
      condition: raw.condition || raw.runs || 'End-of-Life',
      mileage: raw.mileage || 'N/A',
      location,
      pincode,
      customerName,
      phone,
      email: raw.email?.trim() || '',
      estimatedWeight: raw.estimatedWeight || '1,100 kg',
      notes: raw.notes || `Fuel: ${raw.fuel || 'N/A'} • Pickup: ${raw.pickupTimeline || 'Standard'}`,
      status: 'new',
    };

    const savedLead = await saveStoredLead(leadData);

    return res.status(201).json({
      success: true,
      message: 'Scrappage quote request received successfully. An operations executive will call you shortly.',
      data: savedLead,
    });
  } catch (err) {
    console.error('[Lead Submit Error]:', err);
    return res.status(500).json({
      success: false,
      error: 'Failed to submit quote inquiry.',
    });
  }
};

export const getLeads = async (req, res) => {
  try {
    const leads = await getStoredLeads();
    return res.status(200).json({
      success: true,
      count: leads.length,
      data: leads,
    });
  } catch (err) {
    console.error('[Get Leads Error]:', err);
    return res.status(500).json({
      success: false,
      error: 'Failed to retrieve vehicle leads.',
    });
  }
};

export const updateLeadStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    const validStatuses = ['new', 'contacted', 'scheduled', 'collected', 'paid'];
    if (!validStatuses.includes(status)) {
      return res.status(400).json({
        success: false,
        error: `Invalid status. Must be one of: ${validStatuses.join(', ')}`,
      });
    }

    const updated = await updateStoredLeadStatus(id, status);
    if (!updated) {
      return res.status(404).json({
        success: false,
        error: 'Lead not found.',
      });
    }

    return res.status(200).json({
      success: true,
      data: updated,
      message: `Lead status updated to ${status}.`,
    });
  } catch (err) {
    console.error('[Update Lead Error]:', err);
    return res.status(500).json({
      success: false,
      error: 'Failed to update lead status.',
    });
  }
};

export const deleteLead = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await deleteStoredLead(id);
    if (!deleted) {
      return res.status(404).json({
        success: false,
        error: 'Lead not found.',
      });
    }

    return res.status(200).json({
      success: true,
      message: 'Vehicle inquiry deleted successfully.',
    });
  } catch (err) {
    console.error('[Delete Lead Error]:', err);
    return res.status(500).json({
      success: false,
      error: 'Failed to delete inquiry.',
    });
  }
};
