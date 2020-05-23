import express from "express";
import dotenv from 'dotenv';
import path from 'path';
import http from 'http';
import bodyParser from 'body-parser';
import Routes from './routes';
import mongoose from 'mongoose';
import cors from 'cors';
import io from 'socket.io'
class Server {
    constructor(){
        dotenv.config({path: path.resolve(__dirname,'./env','.env'),debug:true})
        this.connections = {}
        this.express = express();
        this.http = http.Server(this.express)
        this.port = process.env.PORT || 4200
        this.middelwares();
        this.routes();    
    }
    middelwares(){
        this.express.use(cors());
        this.express.use(bodyParser.json())
        this.express.use(bodyParser.urlencoded({extended:true}))
        this.express.use((req,res,next) => {
            req.io = this.io;
            req.connected_users = this.connections;
            next();
        })
    }
    routes(){
        this.express.use(Routes)
    }
    sockets(){
        this.io = io(this.http)
        this.io.on("connection",(socket) => {
            const {id} = socket.handshake.query;
            this.connections[id] = sockeet.id;
            this.io.on("disconnect",() => {
                delete this.connect[id]
            })
        })
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
        this.http.listen(this.port, async () => {
            await this.database()
            console.log(process.env.MONGO)
            console.info(`Servdor funcionando na porta ${this.port}`)
            
        })
    }
}

export default new Server;