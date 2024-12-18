const EventEmitter = require('node:events')
const emitter = new EventEmitter
const callback = (first, second, third) => {
    console.log(first)
    console.log(second)
    console.log(third)
}
emitter.once('message', callback)
const MESSAGE = process.env.message
if(MESSAGE){
    emitter.emit('message', MESSAGE, 123)
} else {
    console.log('there is nothing herrer')
}
emitter.emit('message')
emitter.emit('message')
emitter.emit('message')
emitter.removeAllListeners()
emitter.removeListener('message', callback)