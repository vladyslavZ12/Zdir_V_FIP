var express = require('express');
var router = express.Router();




const knex = require('knex');
const client = require('./client');
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
         user: 'crmsystemgroup25@gmail.com',
         pass: 'crmsystem!'
     }
 });

// mysql://b8c01ca0de33d3:c70c50bb@us-cdbr-east-02.cleardb.com/heroku_de6f35639d8dd1c?reconnect=true
const db = knex({
  client: 'mysql',
  connection: {
  host : 'us-cdbr-east-02.cleardb.com',
  user : 'b8c01ca0de33d3',
  password : 'c70c50bb',
  database : 'heroku_de6f35639d8dd1c'
}
});


/* GET home page. */
router.get('/welcome', function(req, res, next) {
  res.render('index', { title: 'Welcome' });
});
router.get('/about', function(req, res, next) {
  res.render('about', { title: 'About' });
});
router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Contact' });
});


router.post('/addClient',client.addClients(db,nodemailer,transporter));

module.exports = router;
