/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.webtekno.com",
        pathname: "/images/editor/default/**",
      },
      {
        protocol: "https",
        hostname: "cdn.webtekno.com",
        pathname: "/media/cache/content_detail_v2/**",
      },
    ],
  },
};

export default nextConfig;
