import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    environment: 'jsdom',
    globals: true,
    // setupFiles: './src/setupTests.js', // Disabled for jest-dom compatibility
  },
})
