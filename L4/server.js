import express from 'express'
import crudRoutes from './Routes/crudRoutes.js'
import loggingMiddleware from './Middleware/loggingMiddleware.js';

const app=express();

const PORT=process.env.PORT || 8000;

app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(loggingMiddleware)

app.use('/api/crud',crudRoutes)
app.listen(PORT,()=>{
    console.log(`Successfully running on port ${PORT}`)
})