const express= require('express');
const app= express()

app.get('/add', (req,res) => {
    logInput(req.query)
    const {num1,num2}=(req.query)
    res.send(`addition answer is ${parseInt(num1)+parseInt(num2)}`)
})

app.get('/sub', (req,res) => {
    logInput(req.query)
    const {num1,num2}=(req.query)
    res.send(`subraction answer is ${parseInt(num1)+parseInt(num2)}`)
})

app.get('/multiply', (req,res) => {
    logInput(req.query)
    const {num1,num2}=(req.query)
    res.send(`multiplication answer is ${parseInt(num1)+parseInt(num2)}`)
})

app.get('/divide', (req,res) => {
    logInput(req.query)
    const {num1,num2}=(req.query)
    res.send(`divide answer is ${parseInt(num1)+parseInt(num2)}`)
})

app.listen(4000);

function logInput(query){
    const {num1,num2}=(query)
    console.log('num1 is', num1)
    console.log('num2 is', num2)
}