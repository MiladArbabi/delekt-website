import type { NextConfig } from 'next'
const nextConfig: NextConfig = {
  output: 'export',
  images: { unoptimized: true },
  basePath: '/preview',
  assetPrefix: '/preview'
}
export default nextConfig
