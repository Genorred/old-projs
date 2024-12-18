const os = require('os')
const platform = os.platform()
const arch = os.arch()
const cpus = os.cpus()
const cluster=require('node:cluster')
if(cluster.isPrimary){
    for(let i; i<os.cpus().length-2; i++){
        cluster.fork()
    }
    console.log('is master')
} else {
    console.log('is worker')
}
