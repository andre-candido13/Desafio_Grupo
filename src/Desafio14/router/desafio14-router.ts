
import { Router } from "express";
import  { getRecomendation, createProducts, getProducts } from "../controller/desafio14-controller.js";

const createProductsRouter = Router();

createProductsRouter.post('/products', createProducts)
createProductsRouter.get('/products', getProducts)
createProductsRouter.get('/recomendation', getRecomendation)


export default createProductsRouter