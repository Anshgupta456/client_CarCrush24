import {
  getStoredBlogs,
  getStoredBlogBySlug,
  saveStoredBlog,
  updateStoredBlog,
  deleteStoredBlog,
  getStoredTestimonials,
  saveStoredTestimonial,
  updateStoredTestimonial,
  deleteStoredTestimonial,
} from '../services/dbStore.js';

// --- Blogs ---

export const getBlogs = async (req, res) => {
  try {
    const blogs = await getStoredBlogs();
    return res.status(200).json({ success: true, count: blogs.length, data: blogs });
  } catch (err) {
    console.error('Error fetching blogs:', err);
    return res.status(500).json({ success: false, error: 'Failed to fetch blogs.' });
  }
};

export const getBlogBySlug = async (req, res) => {
  try {
    const { slug } = req.params;
    const blog = await getStoredBlogBySlug(slug);
    if (!blog) {
      return res.status(404).json({ success: false, error: 'Blog not found.' });
    }
    return res.status(200).json({ success: true, data: blog });
  } catch (err) {
    console.error('Error fetching blog by slug:', err);
    return res.status(500).json({ success: false, error: 'Failed to fetch blog article.' });
  }
};

export const createBlog = async (req, res) => {
  try {
    const {
      title,
      slug,
      excerpt,
      category,
      readTime,
      date,
      tag,
      featured,
      image,
      contentHtml,
      gallery,
      sections,
    } = req.body;
    if (!title) {
      return res.status(400).json({ success: false, error: 'Article title is required.' });
    }

    const newBlog = await saveStoredBlog({
      title,
      slug,
      excerpt,
      category: category || 'General',
      readTime: readTime || '5 min read',
      date: date || new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
      tag: tag || 'Automotive Advisory',
      featured: !!featured,
      image: image || '/images/blogs/blog1.jpg',
      contentHtml: contentHtml || '',
      gallery: gallery || [],
      sections: sections || [],
    });

    return res.status(201).json({ success: true, data: newBlog });
  } catch (err) {
    console.error('Error creating blog:', err);
    return res.status(500).json({ success: false, error: 'Failed to create blog.' });
  }
};

export const updateBlog = async (req, res) => {
  try {
    const { id } = req.params;
    const updated = await updateStoredBlog(id, req.body);
    if (!updated) {
      return res.status(404).json({ success: false, error: 'Blog article not found.' });
    }
    return res.status(200).json({ success: true, data: updated });
  } catch (err) {
    console.error('Error updating blog:', err);
    return res.status(500).json({ success: false, error: 'Failed to update blog.' });
  }
};

export const deleteBlog = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await deleteStoredBlog(id);
    if (!deleted) {
      return res.status(404).json({ success: false, error: 'Blog article not found.' });
    }
    return res.status(200).json({ success: true, message: 'Article deleted successfully.' });
  } catch (err) {
    console.error('Error deleting blog:', err);
    return res.status(500).json({ success: false, error: 'Failed to delete blog.' });
  }
};

// --- Testimonials ---

export const getTestimonials = async (req, res) => {
  try {
    const testimonials = await getStoredTestimonials();
    return res.status(200).json({ success: true, count: testimonials.length, data: testimonials });
  } catch (err) {
    console.error('Error fetching testimonials:', err);
    return res.status(500).json({ success: false, error: 'Failed to fetch testimonials.' });
  }
};

export const createTestimonial = async (req, res) => {
  try {
    const { author, quote, location, vehicle, date, rating } = req.body;
    if (!author || !quote) {
      return res.status(400).json({ success: false, error: 'Customer name and review quote are required.' });
    }

    const wordCount = quote.trim().split(/\s+/).filter(Boolean).length;
    if (wordCount > 50) {
      return res.status(400).json({
        success: false,
        error: `Review quote exceeds the maximum allowed limit of 50 words (current: ${wordCount} words).`,
      });
    }

    const newTestimonial = await saveStoredTestimonial({
      author,
      quote,
      location: location || '',
      vehicle: vehicle || '',
      date: date || new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }),
      rating: Number(rating) || 5,
    });

    return res.status(201).json({ success: true, data: newTestimonial });
  } catch (err) {
    console.error('Error creating testimonial:', err);
    return res.status(500).json({ success: false, error: 'Failed to create testimonial.' });
  }
};

export const updateTestimonial = async (req, res) => {
  try {
    const { id } = req.params;

    if (req.body.quote) {
      const wordCount = req.body.quote.trim().split(/\s+/).filter(Boolean).length;
      if (wordCount > 50) {
        return res.status(400).json({
          success: false,
          error: `Review quote exceeds the maximum allowed limit of 50 words (current: ${wordCount} words).`,
        });
      }
    }

    const updated = await updateStoredTestimonial(id, req.body);
    if (!updated) {
      return res.status(404).json({ success: false, error: 'Testimonial not found.' });
    }
    return res.status(200).json({ success: true, data: updated });
  } catch (err) {
    console.error('Error updating testimonial:', err);
    return res.status(500).json({ success: false, error: 'Failed to update testimonial.' });
  }
};

export const deleteTestimonial = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await deleteStoredTestimonial(id);
    if (!deleted) {
      return res.status(404).json({ success: false, error: 'Testimonial not found.' });
    }
    return res.status(200).json({ success: true, message: 'Testimonial deleted successfully.' });
  } catch (err) {
    console.error('Error deleting testimonial:', err);
    return res.status(500).json({ success: false, error: 'Failed to delete testimonial.' });
  }
};
