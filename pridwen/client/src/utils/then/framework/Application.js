const htpp = require('node:http')
const EventEmitter = require('node:events')
const http = require("node:http");
class Application{
    constructor() {
        this.emitter = new EventEmitter
        this.http = this._createServer
    }
    _createServer(){
        return http.createServer((req, res) => {
            const emitted = this.emitter.emit(this._getRouteMask(rew.url, req.method), req, res)
            if(!emitted){
                res.end()
            }
        })
    }
    _getRouteMask = (path, method) =>{
        return `[${path}]:[${method}]`
    }
}