/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['cdn.sanity.io', 'via.placeholder.com'],
    },
    typescript: {
        ignoreBuildErrors: true,
    },
};

export default nextConfig;
