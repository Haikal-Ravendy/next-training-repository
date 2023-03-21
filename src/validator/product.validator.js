import Joi from "joi";
import validator  from "@/src/validator/default.validator";

const create = validator({
    body: Joi.object({
        name: Joi.string().required(),
        price: Joi.number().required(),
    }),
})

const ProductValidator = {
    create
}

export { ProductValidator }