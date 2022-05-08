import { connection } from '../database/connection.js'
import { filmes } from '../model/filmes.js'

export const getIndex = async (req, res) => {
  try {
    //const listFilmes = await connection.query('SELECT * FROM filmes', {
    model: filmes
    // })
    const listFilmes = await filmes.findAll()

    console.log(listFilmes)
    res.render('index.ejs', {
      listFilmes
    })
  } catch (error) {
    res.send(error.message)
  }
}

export const getDetalhes = async (req, res) => {
  try {
    const filmesDetalhes = await filmes.findByPk(req.params.id)
    res.render('detalhes.ejs', {
      filmesDetalhes
    })
  } catch (error) {
    res.send(error.message)
  }
}
