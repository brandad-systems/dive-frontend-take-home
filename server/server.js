const express = require('express');
const multer = require('multer');
const bodyParser = require('body-parser');


const app = express();
const port = 8080;

let latestId = 1;
const products = [];


app.use(express.json()); // for parsing application/json

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header("Access-Control-Allow-Methods", "*");
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

app.get('/products', function(req, res) {
  res.json(products);
});

app.get('/products/:id', function(req, res) {
  const numericId = Number.parseInt(req.params.id);
  const maybeProducts = products.filter(product => product.id === numericId);
  if (maybeProducts.length === 0) {
    res.status(404).send('Not Found');
  } else {
    res.json(maybeProducts[0]);
  }
});

function addProduct(product) {
  product.id = latestId++;
  products.push(product);
}

app.post('/products', function(req, res) {
  const product = req.body;
  addProduct(product);
  res.json(product);
});

app.put('/products/:id', function(req, res) {
  const numericId = Number.parseInt(req.params.id);
  const putIndex = products.findIndex(product => product.id === numericId);
  const product = req.body;
  product.id = numericId;
  products[putIndex] = product;
  res.json(product);
});

app.delete('/products/:id', function(req, res) {
  const numericId = Number.parseInt(req.params.id);
  const deleteIndex = products.findIndex(product => product.id === numericId);
  products.splice(deleteIndex, 1);
  res.status(204).send('Deleted');
});

/*Image Upload*/

const DIR = '../product-app/src/assets/uploads';


let storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, DIR);
  },
  filename: (req, file, cb) => {
    console.log(cb);
    cb(null, file.originalname+'');
  }
});
let upload = multer({ storage: storage });


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api', function(req, res) {
  res.end('file catcher example');
});

app.post('/api/upload', upload.single('photo'), function(req, res) {

  if (!req.file) {
    console.log('No file received');
    return res.send({
      success: false
    });

  } else {
    console.log('file received');
    return res.send({
      success: true
    });
  };
});
