/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        domains: ["i.ibb.co"],
    },
    publicRuntimeConfig: {
        STRIPE_PUBLISHABLE_KEY: process.env.STRIPE_PUBLISHABLE_KEY,
    },
};

module.exports = nextConfig;
