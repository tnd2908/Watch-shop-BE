import express, {Router} from 'express'
import { ColorController } from '../Controller/colorController'
import { checkToken } from '../Middleware/authentication'

export const colorRoute: Router = express.Router()
colorRoute.post('/add', checkToken, ColorController.addNewColor)
colorRoute.get('/' ,ColorController.getColor)