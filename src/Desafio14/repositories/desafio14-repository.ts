import { QueryResult } from "pg"
import { db } from "../database/database.js"



// Inserindo no banco de dados POSTGRES pelo modo INSERT
export async function createProducts (Produto: string, Categoria: string, Descricao: string, Avaliacao:number) {

    await db.query(`INSERT INTO "Produtos" ("Produto", "Categoria", "Descricao", "Avaliacao")
    VALUES ($1, $2, $3, $4)`, [Produto, Categoria, Descricao, Avaliacao])

}

//Buscando os produtos pelo SELECT *
async function getProducts () {

    const getProducts: QueryResult = await db.query(`SELECT * FROM "Produtos"`)
        return getProducts.rows
}

//Filtrando as buscas, nesse caso ordenando pelo criterio de Avaliacao em ordem decrescente
async function getRecomendation (Categoria: string) {

   const getRecomendation:QueryResult = await db.query('SELECT * FROM "Produtos" ORDER BY "Avaliacao" DESC',
    );

    return getRecomendation.rows
}


const createProductsRepository = {
    createProducts,
    getProducts,
    getRecomendation
}

export default createProductsRepository