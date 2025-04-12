const express = require('express');
const mongoose = require('mongoose');
const Product = require('./models/product.model');
const productRoute =  require('./routes/product.route');
const app = express();

//middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));

//routes
app.use("/api/products", productRoute);

app.get('/', (req, res) => {
    res.send("Hello world");
    res.end();
})




const mongoURI = "mongodb://localhost:27017/NodeAPI"; // Connect to local MongoDB on port 27017

mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(()=>{
    console.log("connect successfully");
    app.listen(3000, ()=> {
        console.log("The server is running at port 3000");
    })
    
})
.catch((err)=> {
    console.log("Connection failed");
    console.log(err)
})

