const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const expressValidator = require('express-validator');
const flash = require('connect-flash');
const session = require('express-session');

//mongoose.connect("mongodb://localhost/History");
//Solutie ->
mongoose.connect('mongodb://127.0.0.1/History').then(() => {
console.log("Connected to Database");
}).catch((err) => {
    console.log("Not Connected to Database ERROR! ", err);
});

let db = mongoose.connection;
//Verificam conexiunea pentru baza de date
db.once('open',function(){
    console.log("Connected to MongoDB");
});

//Verificam erorile pentru baza de date
db.on('error',function(err){
    console.log(err);
})
//Initializare 
const app = express();

let Article = require('../models/article.js');

//app.engine('html', require('ejs').renderFile);


//app.use(express.static(__dirname + '/public'));
/*
app.get('/', function(req, res) {
      res.type("text/html");
      res.sendFile(__dirname + '/public/html1.html');
      res.sendFile(__dirname + '/html1style.css');
});
app.get('/html1style.css', function(req, res) {
    res.sendFile(__dirname + "/" + "html1style.css");
 });
 */
app.use(express.static("public"));
app.use('/views', express.static("public"));
/*
var engines = require('consolidate');

app.set('views', __dirname + '/views');
app.engine('html', engines.mustache);
app.set('view engine', 'html');

exports.index = function(req, res){
    res.render('html1.html');
  };
var cons = require('consolidate');
app.engine('html',cons.swig)
app.set('views',path.join(__dirname,'views'));
app.set('view engine','html');
*/



app.set('views',path.join(__dirname,'views'))
app.set('view engine','pug')


//Body parser middleware
app.use(bodyParser.urlencoded({extended : false}))
app.use(bodyParser.json())

//Public Folder
app.use(express.static(path.join(__dirname,'public')));

//Middleware-ul pentru Express Session
app.use(session({
    secret:'keyboard cat',
    resave: true,
    saveUninitialized: true,
    //cookie:{secure:true}
}));

//Middleware-ul pentru Express Messages 
app.use(require('connect-flash')());
app.use(function(req,res,next){
    res.locals.messages = require('express-messages')(req,res);
    next();
});

//Middleware-ul pentru Express Validator 
app.use(expressValidator({
    errorFormatter: function(param, msg, value) {
        var namespace = param.split('.')
        , root    = namespace.shift()
        , formParam = root;
  
      while(namespace.length) {
        formParam += '[' + namespace.shift() + ']';
      }
      return {
        param : formParam,
        msg   : msg,
        value : value
      };
    }
}));

//Home
app.get('/',function(req,res){
    Article.find({},function(err, articles){
        if(err){
            console.log(err);
        } else {
            res.render('index',{
                title:'Articles',
                articles:articles
            });
        }
    });
});

//Fisierele din Router
let articles = require('../routes/articles.js');
app.use('/articles',articles);

//Incarcarea server-ului
app.listen(3000,function(){
    console.log("Server just started on port 3000");
})