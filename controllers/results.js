var express = require('express')
var router = express.Router();

router.get('/',function (req , res){
res.render("results.ejs")
console.log("hi")
});


router.post('/',(req,res)=>{
  console.log(req.body.userInput)
//  res.redirect('/results')
});


module.exports = router;
