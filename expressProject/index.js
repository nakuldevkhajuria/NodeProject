const express = require('express');
// const server = express.crea
const app = express();//here we are using express instance for execution
//function listen(){}
//function like .get ,.post, .pull,
const middleware = (req,res,next) => {
    console.log('i am in middleware');
    next();
}

app.get('/api', middleware,(req,res) => {

    console.log('Logged in')
    res.send("Logged in")
})
app.listen(5000, ()=> {
    console.log('App started')
})

