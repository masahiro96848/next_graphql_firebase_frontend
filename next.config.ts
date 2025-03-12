import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  images: {
    domains: ['placehold.jp'], // 外部画像ドメインを許可
  },
}

export default nextConfig
