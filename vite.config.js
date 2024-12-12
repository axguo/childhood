import { defineConfig } from 'vite'

export default defineConfig({
  base: '/core-memory/',  // Replace with your repository name
  optimizeDeps: {
    include: ['3d-force-graph']
  }
})
