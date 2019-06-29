const express = require('express');
const bodyParser  = require( 'body-parser');
const path = require('path');
const noteRoutes  = require('./routes/noteRoutes');
const app = express();

app.use((request, response, next) => {
    console.log(request.url + ",method " +  request.method);
    next();
});

app.use(express.static(path.resolve("public")));            // frontend -> http://localhost:3000
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use("/note", noteRoutes);                           // backend  -> http://localhost:3000/note
app.listen(3000);
console.log("Server started, Backend: http://localhost:3000");



