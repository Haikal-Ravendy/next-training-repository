import ErrorHandler from '@/src/handler/error.handler';
import { ProductValidator } from '@/src/validator/product.validator';
import nc from 'next-connect';

const handler = nc(ErrorHandler);

handler.post(
    ProductValidator.create,
    async (req, res) => {
        return res.status(200).json(req.body)
    }
).get(async (req, res) => {
    // get fron jsonplaceholder
    const response = await fetch('localhost:3000/api/product');
    const data = await response.json();
    res.status(200).json({ data });


});

export default handler;