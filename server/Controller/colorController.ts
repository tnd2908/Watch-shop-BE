import {Request, Response} from 'express'
import Color from '../Model/Color'
import { ProxyColor } from '../Proxy/proxy'
export class ColorController{
    public static addNewColor = async (req: Request, res: Response) =>{
        const {color} = req.body
        const proxy = new ProxyColor(color)
        const result = await proxy.createColor()
        return res.json(result)
    }
    public static getColor = async (req: Request, res: Response) =>{
        const color = await Color.find({})
        return res.status(200).json({
            success: true,
            messsage: 'Get color successfully',
            data: color
        })
    }
}