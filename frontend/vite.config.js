import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { fileURLToPath, URL } from 'node:url'
import { createRequire } from 'node:module'
import fs from 'node:fs'
import nodePath from 'node:path'

const require = createRequire(import.meta.url)
const isDev = process.env.NODE_ENV !== 'production'

// Emergent visual-edits plugin for Vite (replaces craco withVisualEdits)
function emergentVisualEditsPlugin() {
  const overlayDist = nodePath.resolve('./node_modules/@emergentbase/visual-edits/dist/visual-edit-overlay.js')

  return {
    name: 'emergent-visual-edits',
    enforce: 'pre',
    configureServer(server) {
      if (!fs.existsSync(overlayDist)) return
      server.middlewares.use('/visual-edit-overlay.js', (_req, res) => {
        res.setHeader('Content-Type', 'application/javascript')
        res.end(fs.readFileSync(overlayDist, 'utf-8'))
      })
    },
    transformIndexHtml(html) {
      const snippet = `<script>if(window.self!==window.top){var s=document.createElement("script");s.src="/visual-edit-overlay.js";document.head.appendChild(s);}</script>`
      return html.replace('</head>', snippet + '\n</head>')
    },
  }
}

// Load babel plugin for visual edits
let babelPlugins = []
try {
  const visualEditsBabel = require('@emergentbase/visual-edits/babel-plugin')
  const plugin = visualEditsBabel.default || visualEditsBabel
  if (plugin) babelPlugins = [plugin]
} catch {
  // silently skip if not available
}

export default defineConfig({
  plugins: [
    react({
      babel: isDev ? { plugins: babelPlugins } : {},
    }),
    ...(isDev ? [emergentVisualEditsPlugin()] : []),
  ],
  server: {
    port: 3000,
    host: '0.0.0.0',
    // Allow all external hosts (needed for Emergent preview proxy)
    allowedHosts: true,
    hmr: {
      clientPort: 443,
      protocol: 'wss',
    },
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
    // Prefer .jsx over .js when resolving imports without extension
    extensions: ['.jsx', '.js', '.tsx', '.ts', '.json'],
  },
  // Expose REACT_APP_ prefixed env vars as import.meta.env.REACT_APP_*
  envPrefix: 'REACT_APP_',
  build: {
    outDir: 'build',
  },
})
