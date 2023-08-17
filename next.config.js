/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = {
    publicRuntimeConfig: {
        APP_NAME: "Blog Website",
        API_DEVELOPMENT: "http://localhost:8000/api",
        PRODUCTION: false,
        __NEXT_PRIVATE_PREBUNDLED_REACT: "next"
    }
};