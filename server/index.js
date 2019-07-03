const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

//var db = require("./database");

const ENV = process.env.NODE_ENV;
const PORT = process.env.PORT || 5000;

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(bodyParser.json());

//app.use('/api/users', require('./api/users'));
//app.use('/api/games', require('./api/games'));

if (ENV === 'production') {
    console.log("Starting server in Production Mode");
    app.use(express.static(path.join(__dirname, '../client/build')));
    app.use((req, res) => {
       res.sendFile(path.join(__dirname, '../client/build/index.html'));
    });
}

app.listen(PORT, () => {
    console.log("WRC Mixer IoT");
    console.log("---------------------------------");
    console.log("Server listening on port "+PORT+"!");
    console.log("powered by Driverco - driverco@gmail.com");
    console.log("Starting Mode:"+process.env.NODE_ENV);
  });


module.exports = app;