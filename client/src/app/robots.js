export default function robots() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://carcrush24.com';

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/admin',
          '/admin/',
          '/api/',
          '/test-pin',
          '/test-pin/',
        ],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
