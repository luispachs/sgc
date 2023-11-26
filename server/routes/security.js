const express = require('express');
const  Auth  = require('../Utils/Auth');
require('dotenv').config();

const route = express.Router();

route.post('/login', async (req, res) => {
    let user = req.body.user;
    let remember = req.body.rememberPassword;
    let password = req.body.password;
    try{
        let token = await Auth.authentication(user, password, remember);
        return res.json({ "status": 200, "data": { "token": token } });
    }catch(error){
        return res.status(400).json({ "status": 400, "data": { "token": error.message }})
    }
    
    
});


module.exports = route;