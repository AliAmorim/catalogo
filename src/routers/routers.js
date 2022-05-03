import express from 'express'
import { getIndex } from '../controller/Controllador.js'
export const routers = express.Router()

routers.get('/', getIndex)


