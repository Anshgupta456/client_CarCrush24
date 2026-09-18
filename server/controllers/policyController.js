import {
  getStoredPolicy,
  getAllStoredPolicies,
  updateStoredPolicy,
  defaultPolicies,
} from '../services/dbStore.js';

// Public: Get specific policy by type ('privacy' | 'terms')
export const getPolicy = async (req, res) => {
  try {
    const { type } = req.params;
    const normalizedType = type?.toLowerCase().trim();

    if (normalizedType !== 'privacy' && normalizedType !== 'terms') {
      return res.status(404).json({
        success: false,
        error: 'Invalid policy type requested. Valid options: privacy, terms',
      });
    }

    const policy = await getStoredPolicy(normalizedType);

    if (!policy) {
      return res.status(404).json({
        success: false,
        error: 'Policy not found',
      });
    }

    return res.status(200).json({
      success: true,
      data: policy,
    });
  } catch (err) {
    console.error('[getPolicy Error]:', err);
    return res.status(500).json({
      success: false,
      error: 'Failed to retrieve policy details',
    });
  }
};

// Admin Protected: Get all policies for admin management view
export const getAllPolicies = async (req, res) => {
  try {
    const policies = await getAllStoredPolicies();
    return res.status(200).json({
      success: true,
      data: policies,
    });
  } catch (err) {
    console.error('[getAllPolicies Error]:', err);
    return res.status(500).json({
      success: false,
      error: 'Failed to retrieve policies',
    });
  }
};

// Admin Protected: Release/Update newer version of a policy
export const updatePolicy = async (req, res) => {
  try {
    const { type } = req.params;
    const normalizedType = type?.toLowerCase().trim();

    if (normalizedType !== 'privacy' && normalizedType !== 'terms') {
      return res.status(400).json({
        success: false,
        error: 'Invalid policy type. Must be "privacy" or "terms"',
      });
    }

    const { version, effectiveDate, title, summary, sections } = req.body;

    if (!version || !title) {
      return res.status(400).json({
        success: false,
        error: 'Policy version and title are required.',
      });
    }

    const updated = await updateStoredPolicy(normalizedType, {
      version: version.trim(),
      effectiveDate: effectiveDate?.trim() || new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }),
      title: title.trim(),
      summary: summary || '',
      sections: Array.isArray(sections) ? sections : [],
    });

    return res.status(200).json({
      success: true,
      message: `${updated.title} (${updated.version}) released successfully.`,
      data: updated,
    });
  } catch (err) {
    console.error('[updatePolicy Error]:', err);
    return res.status(500).json({
      success: false,
      error: 'Failed to release policy update',
    });
  }
};

// Admin Protected: Reset policy to standard legal template
export const resetPolicy = async (req, res) => {
  try {
    const { type } = req.params;
    const normalizedType = type?.toLowerCase().trim();

    if (!defaultPolicies[normalizedType]) {
      return res.status(400).json({
        success: false,
        error: 'Invalid policy type.',
      });
    }

    const template = defaultPolicies[normalizedType];
    const updated = await updateStoredPolicy(normalizedType, template);

    return res.status(200).json({
      success: true,
      message: `${updated.title} restored to standard template.`,
      data: updated,
    });
  } catch (err) {
    console.error('[resetPolicy Error]:', err);
    return res.status(500).json({
      success: false,
      error: 'Failed to reset policy.',
    });
  }
};
