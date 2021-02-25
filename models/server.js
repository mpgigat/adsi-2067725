import express from 'express'
import cors from 'cors';
import dbConnection from '../database/config.js';

class Server{
    constructor(){
        this.port=process.env.PORT;
        this.app = express();

        this.conectarBD();

        this.middlewares();
        
        this.routes();
    }

    routes(){

    }

    async conectarBD(){
        await dbConnection();
    }

    middlewares(){
        this.app.use(express.json());
        this.app.use(cors());
        this.app.use(express.static('public'))
    }

    listen(){
        this.app.listen(this.port,()=>{
            console.log(`Servidor corriendo en el puerto ${this.port}`);
        });
    }
}

export default Server
