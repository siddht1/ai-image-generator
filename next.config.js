/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images:
  {
    domains: [
      "links.papareact.com",
      "aiimagegenerator211c9d4.blob.core.windows.net",
    ],
  },
}

module.exports = nextConfig
