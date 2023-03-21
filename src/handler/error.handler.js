const { data } = require("autoprefixer")

const ErrorHandler = (err, req, res, next) => {
    const {status, message, error} = err
    const errObj = {
        status: status || 500,
        message: message || 'Internal Server Error',
        error: err || 'Internal Server Error'
    }
    return res.status(errObj.status).json({
        ... errObj,
        error:true,
        message: errObj?.message,
        data: err,
    })
}

export default ErrorHandler