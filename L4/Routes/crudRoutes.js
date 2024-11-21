import express from 'express'
import { getAll, createPost, getOne, updatePost, deletePost} from '../Controllers/crudController.js';
const crudRoutes=express.Router();

crudRoutes.get('/',getAll)

crudRoutes.get('/:id',getOne)

crudRoutes.post('/create',createPost)

crudRoutes.put('/update/:id',updatePost)

crudRoutes.delete('/delete/:id',deletePost)

export default crudRoutes;