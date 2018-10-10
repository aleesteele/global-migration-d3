const express = require("express");
const router = express.Router();
const app = express();
const http = require('https')
const querystring = require("querystring")
const hb = require('express-handlebars');
const bodyParser = require('body-parser')
const path = require('path');
const $ = require('jquery');
const d3 = require(__dirname + '/public/routes/d3');

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());
app.engine('handlebars', hb());
app.set('view engine', 'handlebars');
app.use("/public", express.static(__dirname + "/public"));

app.get('/', (req, res) => {
    res.render('index', {layout: 'main'});

    // alert("hello!");
})



app.listen(process.env.PORT || 8080, () => console.log(`I'm listening on 8080.`))
