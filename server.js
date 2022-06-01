const express = require('express') ;
const fs = require ('fs') ;
const v = require ('./verif');

const app = express ();
const PORT = 5200 ;

app.get ('/',v,(req,res) =>{
    fs.readFile('./Home.html','utf8',(err,data) =>{
        err?res.end('File Not Found')&& console.error(err) :res.end(data);

    })
})
app.get('/Home.html' ,v,(req,res)=>{
    fs.readFile('./Home.html','utf8',(err,data) =>{
        err?res.end('File Not Found')&& console.error(err) :res.end(data);

    })
})
app.get('/OurServices.html' ,v,(req,res)=>{
    fs.readFile('./OurServices.html','utf8',(err,data) =>{
        err?res.end('File Not Found')&& console.error(err) :res.end(data);

    })
})
app.get('/ContactUs.html' ,v,(req,res)=>{
    fs.readFile('./ContactUs.html','utf8',(err,data) =>{
        err?res.end('File Not Found')&& console.error(err) :res.end(data);

    })
})
app.listen(PORT,(req,res) =>{
    console.log(`Serve running : port ${PORT}...`)
});

