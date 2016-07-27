var express=require('express');
var cal=require('../ca2');
var router=express.Router();
router.get('/add/:num1/:num2',function(req,res)
{
res.send("addition:"+cal.add(parseInt(req.param('num1')),parseInt(req.param('num2'))));
})
router.get('/sub/:num1/:num2',function(req,res)
{
res.send("Substraction:"+cal.sub(parseInt(req.param('num1')),parseInt(req.param('num2'))));
})
router.get('/multi/:num1/:num2',function(req,res)
{
res.send("Multiplication:"+cal.multi(parseInt(req.param('num1')),parseInt(req.param('num2'))));
})
router.get('/divide/:num1/:num2',function(req,res)
{
res.send("Division:"+cal.divide(parseInt(req.param('num1')),parseInt(req.param('num2'))));
})

module.exports=router;
