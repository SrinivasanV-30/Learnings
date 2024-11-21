const {exec}=require("child_process")


exec("ls -lh", (err,stdout,stderr)=>{
    if(err){
        console.log(`{ error : ${err.message}}`)
        return
    }
    if(stderr){
        console.log(`stdout : ${stderr}`)
        return
    }
    console.log(`Stdout : ${stdout}`)
})