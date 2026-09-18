import {
  getStoredCompanyProfile,
  updateStoredCompanyProfile,
} from '../services/dbStore.js';

// Public & Admin: Fetch Company Profile details
export const getCompanyProfile = async (req, res) => {
  try {
    const profile = await getStoredCompanyProfile();
    return res.status(200).json({
      success: true,
      data: profile,
    });
  } catch (err) {
    console.error('[Company Profile Error]:', err);
    return res.status(500).json({
      success: false,
      error: 'Failed to retrieve company profile.',
    });
  }
};

// Admin Only: Update Company Profile
export const updateCompanyProfile = async (req, res) => {
  try {
    const data = req.body;
    if (!data || Object.keys(data).length === 0) {
      return res.status(400).json({
        success: false,
        error: 'No update payload provided.',
      });
    }

    const updated = await updateStoredCompanyProfile(data);

    return res.status(200).json({
      success: true,
      message: 'Company profile updated successfully.',
      data: updated,
    });
  } catch (err) {
    console.error('[Update Company Profile Error]:', err);
    return res.status(500).json({
      success: false,
      error: 'Failed to update company profile.',
    });
  }
};
