import cors from 'cors';
import bodyParser from 'body-parser';
import * as db from './DataBaseUtils.js';

function route (app) {
    
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

    app.put('/products/:product', (req, res) => { 
        db.changeProduct(req.body).then(data => res.send(data));
    });

    app.delete('/products/:uuid', (req, res) => {
        db.deleteProduct(req.params.uuid).then(data => res.send(data));
    });
}

export default route;