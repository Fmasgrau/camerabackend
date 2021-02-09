const express = require('express')

const router = express.Router();

const Post = require('../../Models/ValidationResponse')



//Get all Transactions

router.get('/', async (req, res) => {

    try{
        const Transactions = await Post.find();
        if(!Transactions) throw Error("No items!")
        res.status(200).json(Transactions)
    }

    catch (error){
        res.status(400).json({message : error})
    }
})


//Get By Id

router.get('/:id', async (req, res) => {

    try{
        const Transactions = await Post.findById(req.params.id);
        if(!Transactions) throw Error("No items!")
        res.status(200).json(Transactions)
    }

    catch (error){
        res.status(400).json({message : error})
    }
})

//POST new Transaction
router.post('/', async (req, res) => {

    const newPost = new Post(req.body)
    
    
    try{
        const post = await newPost.save();

        if(!post) throw Error('Something wrong while saving the post');

        res.status(200).json(post)
    }

    catch (error) {
        res.status(400).json({message: error})
    }   
})


//Delete Post

router.delete('/:id', async (req, res) => {

    try{
        const Transactions = await Post.findByIdAndRemove(req.params.id);
        if(!Transactions) throw Error("No items!")
        res.status(200).json(Transactions)
    }

    catch (error){
        res.status(400).json({message : error})
    }
})


//Update a record

router.patch('/:id', async (req, res) => {

    try{
        const Transactions = await Post.findByIdAndUpdate(req.params.id, req.body);
        if(!Transactions) throw Error("No items!")
        res.status(200).json(Transactions)
    }

    catch (error){
        res.status(400).json({message : error})
    }
})

module.exports = router;

