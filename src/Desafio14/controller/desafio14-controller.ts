import { Request, Response } from "express";
import httpStatus from "http-status";
import createProductsService from "../service/desafio14-service.js";


//Controller que dá um create na seção de Produtos 

export async function createProducts(req: Request, res: Response) {
  const { Produto, Categoria, Descricao, Avaliacao } = req.body;

  try {
    await createProductsService.createProducts(Produto, Categoria, Descricao, Avaliacao);
    return res.status(httpStatus.CREATED).send("OK");
  } catch (err) {
    res.status(httpStatus.INTERNAL_SERVER_ERROR).send(err.message);
  }
}

//Controller pra fazer um read dos Produtos criados

export async function getProducts(req: Request, res: Response) {
    try {
      const getProducts = await createProductsService.getProducts();
      return res.send(getProducts);
    } catch (err) {
      res.status(httpStatus.NOT_FOUND).send(err.message);
    }
  }

// Um read simples pra filtrar os produtos, nesse caso foi feito apenas para Ordenar por avaliação, poderiam ser feitas etapas
  export async function getRecomendation (req: Request, res: Response) {

    type Cat = {
      Categoria: string
    }  
    const { Categoria } = req.query as Cat

    try {

        const getRecomendation = await createProductsService.getRecomendation(Categoria)
        return res.send(getRecomendation)

    } catch (err) {
        res.status(httpStatus.NOT_FOUND).send(err.message)
    }

  }


  
  
