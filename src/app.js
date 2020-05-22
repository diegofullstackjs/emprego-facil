import express from "express";
import dotenv from 'dotenv';
import path from 'path';
import bodyParser from 'body-parser';
import Routes from './routes';
import mongoose from 'mongoose';
class Server {
    constructor(){
        dotenv.config({path: path.resolve(__dirname,'./env','.env'),debug:true})
        this.express = express();
        this.port = process.env.PORT || 4200
        this.middelwares();
        this.routes();    
    }
    middelwares(){
        this.express.use(bodyParser.json())
        this.express.use(bodyParser.urlencoded({extended:true}))
    }
    routes(){
        this.express.use(Routes)
    }
    database(){
        return new Promise((resolve,reject) => {
            if(process.env.MONGO) {
                mongoose.connect(process.env.MONGO,{
                    useNewUrlParser: true,
                    useFindAndModify: false,
                    useCreateIndex: true,
                    useUnifiedTopology: true
                })
                resolve("Conexao estabelecida corretamente")
            }
            reject("Nao foi encontrado a varaivel de ambiente do mongo")
        })
        
    }
    run(){
        this.express.listen(this.port, async () => {
            await this.database()
            console.log(process.env.MONGO)
            console.info(`Servdor funcionando na porta ${this.port}`)
            
        })
    }
}

export default new Server;