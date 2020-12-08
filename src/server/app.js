import express from 'express';
import { config } from './config.js';
import * as db from './utils/DataBaseUtils.js';
import route from './utils/route.js';

// Initialization of express application
const app = express();

// Set up connection of database
db.setUpConnection();

route(app);

const server = app.listen(config.serverPort, function() {
    console.log(`Server is up and running on port ${config.serverPort}`);
});