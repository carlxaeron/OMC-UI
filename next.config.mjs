/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['cdn.sanity.io', 'via.placeholder.com'],
    },
    typescript: {
        ignoreBuildErrors: true, // TODO: investigate the errors and remove this
    },
    // output: "export",
    trailingSlash: true,
};

export default nextConfig;
