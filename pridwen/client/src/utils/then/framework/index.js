const http = require('node:http')
const EventEmitter = require('node:events')
PORT = process.env.PORT | 5000
const emitter = new EventEmitter
const Router = require('./Router')
const router = new Router()
router.get('/users', (req, res)=>{
    res.end('dfsdfsfsdf')
})
const server =
server.listen(PORT, () => {console.log(`server started at the PORT ${PORT}`)})