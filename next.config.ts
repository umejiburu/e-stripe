// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* config options here */
//  images: {
//     domains: ["files.stripe.com"],
//   },
// };

// export default nextConfig;


/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "files.stripe.com",
        pathname: "/**",
      },
    ],
  },
};

module.exports = nextConfig;
