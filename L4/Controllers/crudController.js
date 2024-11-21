import express from 'express';
import postSchema from '../Helper/postSchema.js';

let posts=[{id:1,username:"Srini123",post:"Srini123's Post",dateOfPost:"11/21/2024"},
    {id:2,username:"123Hello",post:"123Hello's Post",dateOfPost:"11/21/2024"}
]
export const getAll=(req,res)=>{
    const limit = parseInt(req.query.limit);
    if(!isNaN(limit) && limit>0){
        return res.status(200).json(posts.slice(0,limit))
    }
    res.status(200).json(posts)

}

export const getOne=(req,res)=>{
    const id=parseInt(req.params.id);
    const post=posts.find((pos)=>pos.id===id)
    if(!post){
        return res.status(404).json({message:"ID not found!!"})
    }
    res.status(200).json(post)

}

export const createPost=async(req,res)=>{
    try{
    console.log(req.body)
    const result= await postSchema.validateAsync(req.body)
    const date = new Date().toLocaleDateString()
    
    const newPost={
        id:posts.length+1,
        username:result.username,
        post:result.post,
        dateOfPost:date
    }
    if(!newPost.post){
        return res.status(400).json("{message : Include post content}")
    }
    posts.push(newPost);
    res.status(201).json(posts)
    }
    catch(err){
        console.log(err)
    }
}

export const updatePost=(req,res)=>{
    const id = parseInt(req.params.id);
    let post=posts.find((pos)=>pos.id===id)
    if(!post){
        return res.status(404).json({message:"ID not found!!"})
    }
    post.username=req.body.username
    post.post=req.body.post
    res.status(200).json(posts)
    
}
export const deletePost=(req,res)=>{
    const id = parseInt(req.params.id);
    let post=posts.find((pos)=>pos.id===id)
    if(!post){
        return res.status(404).json({message:"ID not found!!"})
    }
    posts=posts.filter((post)=>{
        if(post.id!==id){
            return post
        }
    })
    
    res.status(200).json(posts)
    
}