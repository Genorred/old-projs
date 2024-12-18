const fs= require("fs");
const path = require("node:path");
const http = require('node:http')
const stream = fs.createReadStream(path.resolve(__dirname, 'file.txt'), {encoding: 'utf-8'})
stream.on('data', (chunk) => {
    console.log(chunk)
})
stream.on('error', (err) => {
    console.log(err)
})
const wStream = fs.createWriteStream(path.resolve(__dirname, 'text2.txt'))
for(let i=0; i<20; i++){
    wStream.write(i + '\n')
}
wStream.end()

http.createServer((req, res) => {
    const stream = fs.createReadStream(path.resolve(__dirname, 'text2.txt'))
    stream.pipe(res)
})