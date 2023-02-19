// @ts-check
const { withContentlayer } = require("next-contentlayer");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["reapi.rishavnandi.workers.dev"],
  },
  async redirects() {
    return [
      {
        source: "/tw",
        destination: "https://twitter.com/rishav_nandi",
        permanent: true,
      },
      {
        source: "/gh",
        destination: "https://github.com/rishavnandi",
        permanent: true,
      },
      {
        source: "/reapi",
        destination: "https://reapi.rishavnandi.workers.dev/",
        permanent: true,
      },
    ];
  },
};

module.exports = withContentlayer(nextConfig);
