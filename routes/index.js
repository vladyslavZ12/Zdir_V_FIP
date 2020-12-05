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


const db = knex({
  client: 'mysql',
  connection: {
  host : '127.0.0.1',
  user : 'root',
  password : '',
  database : 'test'
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
