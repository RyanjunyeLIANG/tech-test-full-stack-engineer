const express =require('express');
const bodyParser = require('body-parser');
const router = require('./router');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.use(router);

app.listen('4000');
console.log(`Listening on port: 4000, wait for the development server to be up...`);