import nc from 'next-connect';
import ErrorHandler from '@/src/handler/error.handler';
import bcrypt from 'bcryptjs';
import UserController from '@/src/controller/user.controller';
import {isNumber} from 'lodash'

const handler = nc(ErrorHandler);

handler.post(async (req, res) => {
    let inputDTO = req.body;

    // check email
    let salt = bcrypt.genSaltSync(10);
    let hashPassword = bcrypt.hashSync(inputDTO?.password, salt);
    Reflect.set(inputDTO, 'password', hashPassword);
    Reflect.set(inputDTO, 'salt', salt);

    //create user baru
    const [err, data] = await new UserController({fields: inputDTO}).create();

    if (err){
        return res.status(400).json({
            message: err?.message ?? 'Error: Something went wrong',
        })
    }

    // activation email
    Reflect.deleteProperty(data, 'password');
    Reflect.deleteProperty(data, 'salt');
    return res.status(200).json({
        message: 'OK!',
        data
    })
})

handler.delete(async (req, res) => {
        let inputDTO = req.body;
        const [err, data] = await new UserController({key: inputDTO.key ??'id', value: isNumber(inputDTO?.value) ? 
    Number(inputDTO?.value) : inputDTO?.value ??  null}).delete();
    if (err){
        return res.status(400).json({
            message: err?.message ?? 'Error: Something went wrong',
        })
    }
    return res.status(200).json({
        message: 'OK!',
        data: data
    })
})

export default handler;