import * as dotenv from 'dotenv'
import AppServer from './server/AppServer'

dotenv.config()

const server = new AppServer(Number(process.env.PORT))
server.init(() => console.log(`Server Running on ${server.port}`))
