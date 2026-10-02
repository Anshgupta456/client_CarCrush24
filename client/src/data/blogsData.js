export const blogs = [];

export function getBlogBySlug(slug) {
  return blogs.find((b) => b.slug === slug);
}

export function getAllBlogSlugs() {
  return blogs.map((b) => b.slug);
}
