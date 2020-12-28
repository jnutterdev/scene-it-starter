require('dotenv').config()
const express = require('express');
const favicon = require('serve-favicon');
const cors = require('cors');
const app = express();
const expressLayouts = require('express-ejs-layouts');
const PORT = process.env.PORT || 8080;
const path = require('path');

app.use(express.urlencoded({
    extended: true
}));

var corsOptions = {
    origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

// static files
app.use(favicon(__dirname + '/public/img/favicon.ico'));
app.use(express.static('public'));
// app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css'));
// app.use('/js', express.static(__dirname + '/node_modules/bootstrap/js'));


// templating engines
app.use(expressLayouts);
app.set('layout', './layouts/home');
app.set('view engine', 'ejs');

// database init
const db = require("./app/models");
db.sequelize.sync();

// set main movie routes
const movieRouter = require('./routes/routes');
app.use('/', movieRouter)

// main listening
app.listen(PORT, () => {
    console.log('Server connected at:', PORT);
});