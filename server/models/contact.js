/*
Project Name:COMP308_Assignment2_Portfolio
File Name:contact.js
Student Name:Atul Sharma
Student ID:300969400
Date: April 3, 2019
*/
let mongoose = require('mongoose');

// create a model class
let contactSchema = mongoose.Schema({
    firstName: String,
    lastName: String,
    age: Number
},
{
    collection: "first"
});

module.exports = mongoose.model('contact', contactSchema);