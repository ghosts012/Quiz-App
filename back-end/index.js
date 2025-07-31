import chalk from 'chalk';
import cors from 'cors';
import express from 'express';
import { indexRoute } from './api/v1/routes/modular.js';
import { Error404 } from './utils/middleware/404.js';
import { createConnection } from './utils/db/connection.js';
import dotenv from 'dotenv';
const app = express();
dotenv.config();
app.use(cors());    
app.use(express.json());
app.use('/api/v1', indexRoute);
app.use(Error404);
const promise = createConnection();
promise.then( ()=>{
    console.log("DB Connection Created..");
    const server = app.listen(1777, (err)=>{
        if( err ){
            console.log(chalk.redBright.italic('Server Crash '), err);
        }
        else{
            console.log(chalk.greenBright.bold('Server Up and running'), server.address().port);
        }
    })
}).catch(err=>{
    console.log(chalk.redBright.bold('DB Crash '), err);
})