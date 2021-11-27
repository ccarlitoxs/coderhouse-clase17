import {app} from './server.js'

import cluster from 'cluster'
import { cpus } from 'os'

import { modo, port } from './utils/minimist.util.js'
import dotenv from 'dotenv'
import './db.js'

dotenv.config()


if (modo == 'cluster' && cluster.isMaster){
    const numCPUs = cpus().length;
    console.log(`numero de procesadores: ${numCPUs}`);
    console.log(`PD MASTER PROCESS: ${process.pid}`);
    for (let i = 0; i <= numCPUs.length; i++) {
        cluster.fork()
        console.log(`CPU:${i}`);
    }

    cluster.on('exit',worker => {
        console.log('worker', worker.process.pid, 'died', new Date().toLocaleString());
        cluster.fork()   
    })

}else {
    console.log('modo', modo);

    process.on('exit', code => {
        console.log('salida con codigo de error', code);
        
    })
    
}

app.listen(process.env.PORT,()=> console.log(`Server on port ${port}`))