const express= require('express');
const app= express();
var n1,n2,result;


app.get('/add', (req,res) => {
    console.log('addition')
    console.log(n1=(req.query.num1))
    console.log(n2=(req.query.num2))
    result=(Number(n1) +Number(n2))
    res.send(`answer is ${result}`)

})

app.get('/sub', (req,res) => {
    console.log('subrations')
    console.log(n1=(req.query.num1))
    console.log(n2=(req.query.num2))
    result=(Number(n1) - Number(n2))
    res.send(`answer is ${result}`)

})

app.get('/multiply', (req,res) => {
    console.log('multiplication')
    console.log(n1=(req.query.num1))
    console.log(n2=(req.query.num2))
    result=(Number(n1) * Number(n2))
    res.send(`answer is ${result}`)

})

app.get('/divide', (req,res) => {
    console.log('division')
    console.log(n1=(req.query.num1))
    console.log(n2=(req.query.num2))
    result=(Number(n1)/Number(n2))
    res.send(`answer is ${result}`)

})

app.listen(4000);