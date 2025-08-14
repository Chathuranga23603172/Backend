//pass: AmLznRf64kY9jnYf

const express = require('express');
const mongoose = require('mongoose');

const app = express();

//Middleware
app.use("/",(req, res,next) => 
{
    res.send("It is Working");
})

mongoose.connect("mongodb+srv://admin:AmLznRf64kY9jnYf@cluster0.poqqzym.mongodb.net/")
.then(() => console.log("MongoDB Connected"))
.then(() => {
    app.listen(2050);
})
.catch((err) => console.log((err)));