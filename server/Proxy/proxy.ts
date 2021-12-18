import Color from "../Model/Color"

interface IColor{
     createColor(): void
}
export class ProxyColor implements IColor{
    constructor(public color: string){}
    public createColor = async () =>{
        const data = await Color.findOne({name: this.color})
        if(data){
            return {
                success: false,
                message: 'This color is already existed'
            }
        }
        else{
            await Color.create({name: this.color})
            return {
                success: true,
                message: 'Added new color'
            }
        }
    }
}