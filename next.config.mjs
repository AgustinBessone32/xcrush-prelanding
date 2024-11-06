import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "d1znn43udvfjm3.cloudfront.net",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "xcrush-qa.s3.amazonaws.com",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "xcrush-dev.s3.amazonaws.com",
        pathname: "**",
      },
    ],
  },
  env: {},
  // async redirects() {
  //   return [
  //     {
  //       source: "/",
  //       destination: "/x-rated",
  //       permanent: true,
  //     },
  //   ];
  // },
};

export default withNextIntl(nextConfig);
