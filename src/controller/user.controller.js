import {PrismaClient} from '@prisma/client'
export default class UserController{
    constructor(props){
        this.prisma = new PrismaClient()
        this.fields = props?.fields ?? null
    }

    async create(){
        try{
            if (!this.fields){
                return [new Error('Fields are required'), null]
            }
            const res = await this.prisma.user.create({
                data: this.fields
            })
            return [null, res]
        } catch (err){
            return [err, null]
        }
    }
    
    async delete(){
        try{
            if(!this.key) return [new Error('Key is required'), null]
            const res = await this.prisma.user.delete({
                where: {
                    [this.key]: this.value
                }
            })
            return [null, res]
        } catch (err){
            return [err, null]
        }
    }


    async getUser(req, res){
        const {id} = req.query
        const user = await this.prisma.user.findUnique({
            where: {
                id: parseInt(id)
            }
        })
        res.json(user)
    }
}