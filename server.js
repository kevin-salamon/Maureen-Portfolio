const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();

router.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/public/index.html'));
});

router.get('/about',function(req,res){
  res.sendFile(path.join(__dirname+'/public/about.html'));
});

router.get('/journalism',function(req,res){
  res.sendFile(path.join(__dirname+'/public/journalism.html'));
});

router.get('/contentmarketing',function(req,res){
    res.sendFile(path.join(__dirname+'/public/contentmarketing.html'));
});
  
router.get('/contact',function(req,res){
    res.sendFile(path.join(__dirname+'/public/contact.html'));
});

app.use(express.static(__dirname + '/public'));
app.use('/', router);

app.listen(process.env.port || 3000);

console.log('Running at Port 3000');