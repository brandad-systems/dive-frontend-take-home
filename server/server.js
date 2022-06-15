const express = require('express')
const app = express()
const port = 8080

let latestId = 1;
const products = [];

app.use(express.json()) // for parsing application/json

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

app.get('/products', function (req, res) {
    res.json(products);
})

app.get('/products/:id', function (req, res) {
    const numericId = Number.parseInt(req.params.id);
    const maybeProducts = products.filter(product => product.id === numericId);
    if(maybeProducts.length === 0){
        res.status(404).send('Not Found')
    }else{
        res.json(maybeProducts[0]);
    }
})

function addProduct(product) {
    product.id = latestId++;
    products.push(product);
}

app.post('/products', function (req, res){
    const product = req.body;
    addProduct(product);
    res.json(product);
})

app.put('/products/:id', function (req, res) {
    const numericId = Number.parseInt(req.params.id);
    const putIndex = products.findIndex(product => product.id === numericId)
    const product = req.body;
    product.id = numericId;
    products[putIndex] = product
    res.json(product)
})

app.delete('/products/:id', function (req, res) {
    const numericId = Number.parseInt(req.params.id);
    const deleteIndex = products.findIndex(product => product.id === numericId)
    products.splice(deleteIndex, 1)
    res.status(204).send('Deleted')
})
