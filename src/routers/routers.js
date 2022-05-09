import express from 'express'
import { getIndex, getDetalhes, getDeletar } from '../controller/Controllador.js'
export const routers = express.Router()

routers.get('/', getIndex)
routers.get('/detalhes/:id', getDetalhes)
routers.get ('/deletar/:id', getDeletar)
