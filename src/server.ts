import next from 'next'
import { createServer } from 'http'
import { initializeDataSource } from './config/data-source'

const dev = process.env.NODE_ENV !== 'production'
const hostname = process.env.HOSTNAME || 'localhost'
const port = parseInt(process.env.SERVER_PORT || '', 10)
const app = next({ dev, hostname, port })
const handle = app.getRequestHandler()

app.prepare().then(() => {
  const server = createServer(async (req, res) => {
    await initializeDataSource()

    if (req.url?.startsWith('/docs')) {
      res.setHeader('Content-Type', 'text/html')
      res.end(`
        <!DOCTYPE html>
        <html>
          <head><title>API Docs</title></head>
          <body>
            <redoc spec-url="/swagger-spec"></redoc>
            <script src="https://cdn.jsdelivr.net/npm/redoc@next/bundles/redoc.standalone.min.js"></script>
          </body>
        </html>
      `)
      return
    }

    if (!req.url?.startsWith('/_next/webpack-hmr')) {
      handle(req, res)
    }
  })

  server.listen(port, (err?: Error) => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${port}`)
  })
})
