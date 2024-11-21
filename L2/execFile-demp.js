const { execFile } = require('child_process')

execFile('./execu.sh',(err,stdout,stderr)=>{
    if(err){
        console.log(`{ error : ${err.message}}`)
        return 
    }
    if(stdout){
        console.log(stderr)
        return
    }
    console.log(`Data : ${stdout}`)
})