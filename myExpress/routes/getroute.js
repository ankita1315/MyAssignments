var express = require('express');
var router = express.Router();
var arr=[1,2,3];


/* GET users listing. */
router.get('/', function(req, res) {
//  res.send({num1:req.params.num1, num2:req.params.num2});
res.send(arr);

});


router.post('/',function(req,res,next){
var value=req.body.value1;
console.log(value);
arr.push(value);
res.send(arr);
});

router.put('/', function(req, res, next) {
 var ind=req.body.ind;
   var value=req.body.var;
   arr[ind]=value;
   res.send("after modify- "+arr);
  });

module.exports = router;
