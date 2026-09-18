import Part from '../models/Part.js';

export const getInventory = async (req, res) => {
  try {
    const parts = await Part.find().sort({ createdAt: -1 });
    return res.status(200).json({
      success: true,
      count: parts.length,
      data: parts,
    });
  } catch (err) {
    console.error('Error fetching inventory:', err);
    return res.status(500).json({
      success: false,
      error: 'Failed to fetch parts inventory from database.',
    });
  }
};

export const toggleStock = async (req, res) => {
  try {
    const { id } = req.params;
    const part = await Part.findById(id);

    if (!part) {
      return res.status(404).json({
        success: false,
        error: 'Part not found in inventory.',
      });
    }

    part.inStock = !part.inStock;
    await part.save();

    return res.status(200).json({
      success: true,
      message: `Stock status updated to ${part.inStock ? 'In Stock' : 'Sold Out'}.`,
      data: part,
    });
  } catch (err) {
    console.error('Error toggling part stock:', err);
    return res.status(500).json({
      success: false,
      error: 'Failed to update stock status.',
    });
  }
};

export const addPart = async (req, res) => {
  try {
    const { title, vehicleMakeModel, category, price, condition, sku, inStock } = req.body;

    if (!title || !vehicleMakeModel || price === undefined) {
      return res.status(400).json({
        success: false,
        error: 'Title, vehicle compatibility, and price are required.',
      });
    }

    const part = new Part({
      title,
      vehicleMakeModel,
      category: category || 'General',
      price: Number(price),
      condition: condition || 'A-Grade (Tested)',
      sku: sku || `PRT-${Date.now().toString().slice(-4)}`,
      inStock: inStock !== undefined ? inStock : true,
    });

    await part.save();

    return res.status(201).json({
      success: true,
      message: 'Part cataloged successfully.',
      data: part,
    });
  } catch (err) {
    console.error('Error adding part:', err);
    return res.status(500).json({
      success: false,
      error: 'Failed to add part to inventory.',
    });
  }
};
