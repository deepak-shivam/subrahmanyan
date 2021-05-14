const express = require('express')
const mongoose = require('mongoose')

const dotenv = require('dotenv');
dotenv.config()

const Picture = require('./model/picture')


const bufferConversion = require('./utils/bufferConversion')
const cloudinary = require('./utils/cloudinary')


const upload = require('./utils/multer')

const app = express() 


app.use(express.json())



app.post("/upload", upload.single('img_url'), async (req, res) => {
    try {
        let img_url = ""
        const { title } = req.body
        if (req.file) {
            let icon = bufferConversion(req.file.originalname, req.file.buffer);
            let imgResponse = await cloudinary.uploader.upload(icon);
            img_url = imgResponse.secure_url;
        }
        const newPicture = await new Picture({
            title,
            img_url
        })
        await newPicture.save()
        return res.status(200).json({success:true, message:"Picture has been uploaded successfully",response:newPicture})

    }
    catch (err) {
        console.log("Error in pictiure upload", err.message)
        return res.status(500).json({success:false, message:"Error in picture upload",error:err})
    }
   
    
})

const PORT = 5555


//DB CONNECTION
mongoose.connect("mongodb://127.0.0.1:27017/photoupload"
    , { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false }).then(() => {
        console.log("server Started")
        app.listen(PORT)
    }).catch((err) => {
        console.log("Error in connecting to DataBase", err.message)
    })