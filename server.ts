const express = require('express');
require("dotenv").config();
import {connectDB} from "./Database/connectDB";
const userRoute:any= require("./Routes/userRoutes");
const app = express();
connectDB();
app.use(express.json());






app.use("/user" ,userRoute);

app.listen(3036, ()=>{
    console.log("Listening the port at 3036");
});