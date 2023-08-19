require("dotenv").config();

const express = require('express');
const app = express();
const connectDB = require("./db/connect");

const port=process.env.PORT || 5000;

// Routing
app.get("/", (req, res)=>{
    res.send('Hi, I am Ugyen The Diamond !')
})

const products_routes = require("./routes/products");

// Middleware to set router
app.use("/api/products", products_routes);

async function start() {
    try {
        await connectDB(process.env.MONGODB_URL);
        app.listen(port, () => {
            console.log(` ${port} Yes, I am live buddy!`);
        });
    } catch (error) {
        console.log(error);
    }
}
start();

