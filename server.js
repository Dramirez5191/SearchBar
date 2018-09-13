var express = require('express')
var app = express();
var path = require('path');
var controllers = require('./controllers')
var bodyParser = require("body-parser")
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
app.use(controllers)

//get is getting something
//app.get is a route
//this will use whatever is in the public folder__static stuff like css
app.use(express.static(path.join(__dirname,'public')));
//this will use whatever is in views folder
app.set('views',path.join(__dirname,"views"));

//tempalte engine ejs or any other templating engine
app.set('view engine', 'ejs')

//listen for incoming blabla on port 9000
app.listen(9000, function(){
  console.log('exmaple app listen on port 9000!')
});
