const express = require('express');
const router = express.Router();
const userController = require('../controllers/usercontroller')

router.get('/users',(req , res)=>{
    userController.getUsers(req,res);
})

router.get('/users/:id',(req , res)=>{
    userController.getUserById(req,res)
})

module.exports = router