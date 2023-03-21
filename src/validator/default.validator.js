import withJoi from "next-joi";
import Joi from "joi";

export default withJoi({
    onValidationError: (_,res, error) => {
        return res.status(400).send(error)
    }
})