/* eslint-disable prettier/prettier */
/** @type {import('next').NextConfig} */
const withPWA = require('next-pwa');
const runtimeCaching = require('next-pwa/cache');

module.exports = withPWA({
    basePath: '',
    reactStrictMode: true,
    generateEtags: true,
    compress: true,
    poweredByHeader: false,
    generateBuildId: async() => {
        return 'hello-world-ii';
    },
    trailingSlash: true,
    autoPrerender: true,
    pwa: {
        dest: 'public',
        register: true,
        skipWaiting: true,
        runtimeCaching,
    },
});