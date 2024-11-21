const express= require('express')
const {Worker}=require('worker_threads')

const app=express();
const PORT=3000;
app.get('/one',(req,res)=>{
    const sum=longTask();
    res.send({sum:sum})
})
app.get('/two',(req,res)=>{
    const child=new Worker('./longTask.js');
    child.on('message',(sum)=>{
        res.send({sum:sum});
    })
})

app.listen(PORT,()=>{
    console.log(`running successfully on ${PORT}`)
})
function longTask(){
    let sum=0;
    for(let i=0;i<1e9;i++)
    {
        sum+=i
    }
    return sum
}