import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import {authRouter} from "./authRouter.js";
dotenv.config()
const PORT = process.env.PORT
const app = express ()
const url = "mongodb+srv://Genorred:DNYpBivm4Wg3W5mo@cluster0.yohuxac.mongodb.net/?retryWrites=true&w=majority"
app.use(express.json())
app.use('/auth', authRouter)
const startServer = async () => {
    try{
        await mongoose.connect(url)
        app.listen(process.env.PORT, ()=>console.log('server started on PORT'+PORT))
    } catch (e) {
        console.log(e);
    }
}
startServer()
// qs4J9BJoT4mWWLHj