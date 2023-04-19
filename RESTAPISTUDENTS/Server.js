const express = require('express')
const app = express()
const mongoose = require('mongoose')
const Student = require('./models/StudentModule')
// app.get('/',(req,res)=>{
//     res.send('hello')
// })
app.use(express.json())
// app.use(express.)
app.get('/students',async(req,res)=>{
    try{
        const student = await Student.find({});
        res.status(200).json(student);
    }
    catch(error){
        res.status(500).json({message:error})
    }
})

app.post('/students',async(req,res)=>{
    try{
        const student = await Student.create(req.body);
        res.status(200).json(student);
    }
    catch(error){
        res.status(500).json({message:error})
    }
})

mongoose.set('strictQuery',false)
mongoose.connect('mongodb+srv://RUSHI:rushi123@cluster0.f7ecpnd.mongodb.net/?retryWrites=true&w=majority')
.then(()=>{
    console.log('connect sucess')
    app.listen(5501,()=>{
        console.log('server running at 5501')
    })

}).catch((error)=>{
    console.log(error)
})
// app.listen(5501,()=>{
//     console.log('server running at 5501')
// })