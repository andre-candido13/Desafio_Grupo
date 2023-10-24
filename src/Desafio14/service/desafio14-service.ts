import createProductsRepository from "../repositories/desafio14-repository.js"


async function createProducts (Produto: string, Categoria: string, Descricao: string, Avaliacao: number) {

    const create = createProductsRepository.createProducts(Produto, Categoria, Descricao, Avaliacao)
        return create

}

async function getProducts() {
    const getProducts = createProductsRepository.getProducts();
    return getProducts;
  }

  async function getRecomendation (Categoria: string) {

    const getRecomendation = createProductsRepository.getRecomendation(Categoria)
      return getRecomendation

  }

const createProductsService = {
    createProducts,
    getProducts, 
    getRecomendation
} 

export default createProductsService