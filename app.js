
const express=require("express");
const dotenv=require('dotenv');
dotenv.config()
const mongoose=require("mongoose");
const userRoutes= require('./routes/user');
const bodyParser=require('body-parser');
const cookieParser=require('cookie-parser');
const morgan=require('morgan');
const expressValidator=require("express-validator");



const app=express();
app.use(expressValidator());

mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex:true}).then(()=>console.log("DB connected"));

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(cookieParser());

///router
app.use(userRoutes);

const port= process.env.PORT || 8000 

app.listen(port, ()=> {
    console.log(`Server is running on port ${port}`);
});