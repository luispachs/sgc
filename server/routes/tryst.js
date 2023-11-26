const Route = require('express').Router;
let route = Route();

route.get('/tryst/next',(req,res)=>{
    res.status(200).json({})
});


module.exports = route