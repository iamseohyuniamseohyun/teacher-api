const express = require('express')
const app = express()
var cors = require('cors')
const port = 3000

app.use(cors())
app.get('/:name',function (req,res){
   // const q = req.query
   // console.log(q)
    const p = req.params
    //console.log(p.name) //라우팅으로 갔고온 정보를 params 속성을 통해 변수에 담아 쓸수 있음
    // res.send({'infor' : '2-1담임'})
    if(p.name==="김동연"){
        res.json({'infor' : '2-1담임'})
    }else if(p.name==="이영기"){
        res.json({'infor' : "2-2담임"})
    }
    else if(p.name==="김주영"){
        res.json({'infor' : "2-3담임"})
    }
    else if(p.name==="김민기"){
        res.json({'infor' : "2-1부담임"})
    }else{
        res.json({'infor' : "정보없음"})
    }

})

//app.get('/dong',function (req,res){
//    res.send({'infor' : '2-1담임'})
//})
//app.get('/young',function (req,res){
//   res.send({'infor' : '2-2담임'})
//})
//app.get('/joo',function (req,res){
//    res.send({'infor' : '2-3담임'})
//})
//app.get('/min',function (req,res){
//    res.send({'infor' : '2-1부담임'})
//})



app.listen(port, ()=>{
    console.log('server running on PORT $(port)')
})