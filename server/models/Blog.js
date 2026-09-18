import mongoose from 'mongoose';

const blogSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    slug: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
      index: true,
    },
    excerpt: {
      type: String,
      required: true,
      trim: true,
    },
    category: {
      type: String,
      default: 'Policy & Rules',
    },
    readTime: {
      type: String,
      default: '5 min read',
    },
    date: {
      type: String,
      default: '',
    },
    tag: {
      type: String,
      default: 'MoRTH Compliance',
    },
    featured: {
      type: Boolean,
      default: false,
    },
    image: {
      type: String,
      default: '/images/blogs/blog1.jpg',
    },
    contentHtml: {
      type: String,
      default: '',
    },
    gallery: {
      type: Array,
      default: [],
    },
    sections: {
      type: Array,
      default: [],
    },
  },
  {
    timestamps: true,
  }
);

const Blog = mongoose.models.Blog || mongoose.model('Blog', blogSchema);

export default Blog;
