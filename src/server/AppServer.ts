import express from 'express'
import cors from 'cors'
import http from 'http'

export default class AppServer {
  public app: express.Application
  public port: number
  public httpServer

  constructor(port: number) {
    this.port = port
    this.app = express()
    this.httpServer = http.createServer(this.app)
    this.middlewares()
    this.routes()
  }

  middlewares() {
    this.app.use(cors())
    this.app.use(express.json())
  }

  init(callback: Function) {
    this.httpServer.listen(this.port, () => callback())
  }

  routes() {
    this.app.get('/', (req, res) => {
      res.json({test: 'works'})
    })
  }

  test() {
    return 'hello'
  }
}
