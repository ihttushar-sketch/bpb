/** @type {import('next').NextConfig} */
const nextConfig = {
  // Every photo lives in /public/images, so the image optimizer isn't needed.
  // Keeping it off also means the site can be exported as static HTML
  // (STATIC_EXPORT=1 npm run build) and dropped on any host or GitHub Pages.
  images: { unoptimized: true },
  ...(process.env.STATIC_EXPORT ? { output: 'export' } : {}),
};

export default nextConfig;
