const express=require('express');

const app=express();
const PORT=3000;
Date.prototype.timeNow = function () {
    return ((this.getHours() < 10)?"0":"") + this.getHours() +":"+ ((this.getMinutes() < 10)?"0":"") + this.getMinutes() +":"+ ((this.getSeconds() < 10)?"0":"") + this.getSeconds();
}
function Homepage(req,res){
    
    res.send("<h1>Hello WOrld</h1>")
}
function About(req,res){
    res.send(`<h1>About</h1>
        <p>Hello All</p>`);
}
let loggerMiddleware=function (req,res,next){
    const currDate=new Date();
    console.log(`Logged at ${currDate.timeNow()}`)
    next()
}
app.use(loggerMiddleware)
app.get('/',Homepage)
app.get('/about',About)

app.listen(PORT,()=>{
    console.log(`Running in ${PORT}`)
})
