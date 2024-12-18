import ApiError from "../error/ApiError.js";

const errorHandler = (err, req, res, next) => {
    if(err instanceof ApiError){
        return res.status(err.status).json(err.message)
    }
    res.status(500).json({message:'unexpected error'})
}
export default errorHandler