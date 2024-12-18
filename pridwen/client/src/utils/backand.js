const express = require('express')
const process = require("node:process");
const path = require('node:path');
const fs = require('node:fs')
const fsPromise = require('node:fs/promises')

const {rejects} = require("assert");

// const PORT = 5000
// const app = express()
// console.log(process.env.PORT)
// console.log(process.env.NODE_ENV)
// console.log(process.argv)

//

//  const createFolder = () => {
//     fs.mkdir(path.join(__dirname, 'folder'), (err) => {
//          console.log(err)
//      })
//  }
// const deleteFolder = () => {
//     fs.rmdir(path.join(__dirname, 'info.txt'), (err) => {
//         if(err) throw err
//     })
// }
// deleteFolder()
// console.log(path.join(__dirname, 'dsdsdfs', 'edssdf', 'dfsdfsfds'))



const writeFileAsync = async (path, data) =>
    new Promise((resolve, reject) => {
    fs.writeFile(path, data, (err)=>{
        if(err) {
            reject(err.message)
        }
        resolve()
    })
})
const appendFileAsync = async (path, data) =>
    new Promise((resolve, reject) => {
        fs.appendFile(path, data, (err)=>{
            if(err) {
                reject(err.message)
            }
            resolve()
        })
    })
const readFileAsync = async (path, data) =>
    new Promise((resolve, reject) => {
        fs.readFile(path, data, (err)=>{
            if(err) {
                reject(err.message)
            }
            resolve()
        })
    })
// writeFileAsync(path.join(__dirname, 'info.txt'), 'gay')
//     .then(()=>appendFileAsync(path.join(__dirname, 'info.txt'), 'gay'))
//     .then(()=>appendFileAsync(path.join(__dirname, 'info.txt'), 'gay'))
//     .then(()=>appendFileAsync(path.join(__dirname, 'info.txt'), 'gay'))
//     .then(()=>appendFileAsync(path.join(__dirname, 'info.txt'), 'gay'))
// .catch((err)=>console.log(err))


// fsPromise.writeFile(path.join(__dirname, 'info.txt'), 'xd')
//     .then(()=>fsPromise.appendFile(path.join(__dirname, 'info.txt'), 'xd'))
//     .then(()=>fsPromise.appendFile(path.join(__dirname, 'info.txt'), 'xd'))
//     .then(()=>fsPromise.appendFile(path.join(__dirname, 'info.txt'), 'xd'))
//     .then(()=>fsPromise.appendFile(path.join(__dirname, 'info.txt'), 'xd'))
//     .then(()=>fsPromise.readFile(path.join(__dirname, 'info.txt'), {encoding: 'utf-8'}))
//     .then(data=> console.log(data))
// .catch(err=>console.log(err))


const text = process.env.TEXT | 'xd xd'
fsPromise.writeFile(path.resolve(__dirname, 'text.txt'), text)
.then(()=>fsPromise.readFile(path.resolve(__dirname, 'text.txt'), {encoding: 'utf-8'}))
.then(data=> data.split(' ').length)
.then(count=> fsPromise.writeFile(path.resolve(__dirname, 'count.txt'), `there are ${count} words`))
.then(()=>fsPromise.rm(path.resolve(__dirname, 'text.txt')))