import dotenv from 'dotenv'
import sequelize from './db.js'
import express from 'express'
import * as models from './models/models.js'
import cors from 'cors'
import router from "./routes/index.js";
import errorHandler from "./middleware/ErrorHandlingMiddleware.js";
import fileUpload from 'express-fileupload'
import path from "node:path";
dotenv.config()

const staticPath = path.resolve('static')
const app = express()
const PORT = process.env.PORT | 5000
app.use(express.json())
app.use(fileUpload({}))
app.use(express.static(staticPath))
app.use(cors())
app.use('/api', router)
app.use(errorHandler)
const startServer = async () => {
    try{
        await sequelize.authenticate()
        await sequelize.sync()
        app.listen(PORT, () => console.log('server started on port' + PORT))
    } catch (e) {
        console.log(e);
    }
}
startServer()
