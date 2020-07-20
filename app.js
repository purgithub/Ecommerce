
const express=require("express");
const dotenv=require('dotenv');//  confidential variable environment..
dotenv.config()
const cors=require('cors'); //To avois the errors while making request from client side.
const mongoose=require("mongoose");// Mongodb connection.
const bodyParser=require('body-parser');// To grab the data from client
const cookieParser=require('cookie-parser');//For saving user credentials in cookie
const morgan=require('morgan'); ///To show routes in console.
const expressValidator=require("express-validator");//For validation 


//import routes
const authRoutes= require('./routes/auth');
const userRoutes= require('./routes/user');
const categoryRoutes= require('./routes/category');
const productRoutes=require("./routes/product")

const app=express();
app.use(expressValidator());

mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex:true}).then(()=>console.log("DB connected"));
//middlewares

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors())


/// middleware routes
app.use(authRoutes,
    userRoutes,
    categoryRoutes,
    productRoutes
);
   


const port= process.env.PORT || 8000 

app.listen(port, ()=> {
    console.log(`Server is running on port ${port}`);
});