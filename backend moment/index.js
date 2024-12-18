import express from 'express'
import mongoose from "mongoose";
import fileUpload from 'express-fileupload'
import Post from "./Post.js";
import router from "./Router.js";
const PORT = 5000
const app = express()
const DB_URL = 'mongodb+srv://Genorred:DornRlD3oT0N1fQK@cluster0.x7v2vgk.mongodb.net/?retryWrites=true&w=majority'
app.use(express.json())
app.use(fileUpload({}))
app.use('/api', router)
const startApp = async () => {
    try{
       await mongoose.connect(DB_URL, {useUnifiedTopology: true, useNewUrlParser: true})
        app.listen(PORT, ()=> {console.log()})
    } catch (e) {
        console.log(e);
    }
}
startApp()