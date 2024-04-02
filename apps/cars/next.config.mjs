/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['@repo/ui'],
  experimental: {
    esmExternals: 'loose',
  },
}

export default nextConfig
