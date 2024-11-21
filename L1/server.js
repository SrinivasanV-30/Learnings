import { getPosts } from "./mods.js";
import http from 'http';

const PORT=8000;
const server=http.createServer((req,res)=>{

    if(req.url==="/"){
        res.writeHead(200,{"Content-Type":"text/html"})
        res.end("<h1>Hello World</h1>");

    }
    else if(req.url==="/hello"){
        res.writeHead(200,{"Content-Type":"text/html"})
        res.end("<h1>Hello</h1>");

    }
    else{
        res.writeHead(404,{"Content-Type":"application/json"})
        res.end("{Error: Not found}")
    }
})
server.listen(PORT,()=>{
    console.log(`Server running on port ${PORT}`)
})