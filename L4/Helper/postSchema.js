import joi from 'joi';

const postSchema=joi.object({
    username:joi.string().alphanum().max(30).required(),
    post:joi.string().max(150).required(),
})

export default postSchema;