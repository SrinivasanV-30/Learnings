const loggingMiddleware=(req,res,next)=>{
    const date=new Date()
    console.log(req.method,req.path,date)
    next()

}

export default loggingMiddleware;