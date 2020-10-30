import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import { config } from './etc/config.js';
import * as db from './utils/DataBaseUtils.js';

// Initialization of express application
const app = express();

// Set up connection of database
db.setUpConnection();

// Using bodyParser middleware
app.use( bodyParser.json() );

// Allow requests from any origin
app.use(cors({ origin: '*' }));

// RESTful api handlers
app.get('/products', (req, res) => {
    db.listProducts().then(data => res.send(data));
});

app.post('/products', (req, res) => {
    db.createProduct(req.body).then(data => res.send(data));
});

app.delete('/products/:uuid', (req, res) => {
    db.deleteProduct(req.params.uuid).then(data => res.send(data));
});

const server = app.listen(config.serverPort, function() {
    console.log(`Server is up and running on port ${config.serverPort}`);
});