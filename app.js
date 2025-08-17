//pass: AmLznRf64kY9jnYf

const express = require('express');
const mongoose = require('mongoose');
const router = require("./Routes/UserRoutes");
const app = express();

//Middleware
app.use(express.json());
app.use("/users",router);


//DB Connection
mongoose.connect("mongodb+srv://admin:AmLznRf64kY9jnYf@cluster0.poqqzym.mongodb.net/")
.then(() => console.log("MongoDB Connected"))
.then(() => {
    app.listen(2050);
})
.catch((err) => console.log((err)));