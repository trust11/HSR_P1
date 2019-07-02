const express = require('express');
const bodyParser  = require( 'body-parser');
const path = require('path');
const noteRoutes  = require('./routes/noteRoutes');
const server = express();

server.use((request, response, next) => {
    console.log(request.url + ",method " +  request.method);
    next();
});

server.use(express.static(path.resolve("public")));            // frontend -> http://localhost:3000
server.use(bodyParser.urlencoded({extended: false}));
server.use(bodyParser.json());
server.use("/note", noteRoutes);                           // backend  -> http://localhost:3000/note
server.listen(3000);
console.log("Server started, Backend: http://localhost:3000");



