const express = require('express');
const app = express();
const port  = 4000;
const path = require('path');
const multer = require('multer');
const cors = require('cors');



app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    if(req.method === "OPTIONS"){
        res.header('Access-Control-Allow-Methods' , 'PUT , POST , PATCH , DELETE , GET')
        return res.status(200).json({
        })
    }
    next();
});
app.use(cors());
app.get('/', (req,res,next) => {
    try{
        res.status(200).json({
            message:"data fetched successfully",
            success:true
        })
    }
    catch(err){
        res.send(err.message);
    }
});



app.listen(port , ()=>{
    console.log(`hello world app is listining on port ${port}!`)
}); 

const storage = multer.diskStorage({
destination: (req,file,cb)=>{
cb(null,'upload');
},

filename: (req,file,cb)=>{
console.log(file);
cb(null , Date.now()  + path.extname(file.originalname));
}
});

const fileFilter  = (req,file,cb) => {

    if(file.mimetype == 'image/jpeg' || file.mimetype == 'image/jpg' || file.mimetype == 'image/png'){
    cb(null, true);
}else{
    cb(null, false);
}
} 


const upload = multer({storage: storage ,  fileFilter : fileFilter });

// create a route / upload route

app.post('/upload' , upload.single('image'), (req, res , next) => {
try{
    return res.status(201).json({
        message: "File uploaded successfully"
    });
}
catch(error){
        console.log(error)
}
})




