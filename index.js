const http = require('http');
//we have used require, cause we need http. and we have http as a variable saved.
const server = http.createServer((req,res) => {
res.write("<h1>helol World</h1><div>heloooo<div/>")
res.end()

})
server.listen(8000,()=> {
    console.log('Application is running')
})


// const http = require('http');

