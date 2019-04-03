/*
Project Name:COMP308_Assignment2_Portfolio
File Name:index.js
Student Name:Atul Sharma
Student ID:300969400
Date: April 3, 2019
*/
let express = require('express');
let router = express.Router();

let indexController = require('../controllers/index');


/* GET home page. */
//router.get('/', indexController.displayHomePage);

/* GET about page. */
//router.get('/about', indexController.displayAboutPage);

/* GET products page. */
//router.get('/products', indexController.displayProductsPage);

/* GET services page. */
//router.get('/services', indexController.displayServicesPage);

/* GET contact page. */
//router.get('/contact', indexController.displayContactPage);

/* GET - displays the Login Page */
//router.get('/login', indexController.displayLoginPage);

/* POST - processes the Login Page */
router.post('/login', indexController.processLoginPage);

/* GET - displays the User Registration Page */
//router.get('/register', indexController.displayRegisterPage);

/* POST - processes the User Registration Page */
router.post('/register', indexController.processRegisterPage);

/* GET - perform user logout */
router.get('/logout', indexController.performLogout);


module.exports = router;
