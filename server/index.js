// import express module dependencies
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

// import custom middleware functions
const {logIncomingRequests} = require('./middleware.js');

// import controller
const {getGroceries, addGrocery} = require('./controller.js');

// invoke express constructor to get an instance of the server
const app = express();

// Declare a constant
const PORT = 3000;

// listen for requests
app.listen(PORT,() => console.log('server is listening on PORT', PORT));

// run middleware
// middleware are just functions which would run
//searches the request object for the data payload and places it on req.body
app.use(bodyParser.json());

//console logs all incoming requests
app.use(logIncomingRequests);

//serves static files req by the client at the specific directory
app.use(express.static(path.join(__dirname, '../client/dist')))

//route the requests
app.get('/groceries', getGroceries);

app.post('/groceries', addGrocery);