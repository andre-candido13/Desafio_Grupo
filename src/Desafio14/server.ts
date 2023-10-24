import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import createProductsRouter from "./router/desafio14-router.js"

dotenv.config()

const server = express()
server.use(cors())
server.use(express.json())

//routes
server.use(createProductsRouter)



server.listen(5000, () => console.log("Servidor ON na porta", + 5000))