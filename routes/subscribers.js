const express = require('express')
const subscriber = require('../models/subscriber')
const router = express.Router()
const Subscriber = require('../models/subscriber')

router.get('/', async (req, res)=>{
    try{
        const subscriber = await Subscriber.find()
        res.json(subscriber)
    }catch (error){
        res.status(500).json({message: error.message})
    }
})

router.get('/:id', getSubscriber, (req, res)=>{
    res.json(res.subscriber)
})

router.post('/', async (req, res)=>{
    const subscriber = new Subscriber({
        userName: req.body.userName,
        userChannel: req.body.userChannel
    })

    try{
        const newSubscriber = await subscriber.save()
        res.status(201).json(newSubscriber)
    }catch(error){
        res.status(400).json({message: error.message})
    }

})

router.patch('/:id', getSubscriber, async (req, res)=>{
    if(req.body.userName != null){
        res.subscriber.userName = req.body.userName
    }
    if(req.body.userChannel != null){
        res.subscriber.userChannel = req.body.userChannel
    }

    try {
        const uptadeSubscriber = await res.subscriber.save()
        res.json(uptadeSubscriber)
    } catch (error) {
        res.status(400).json({message: error.message})
    }
})

router.delete('/:id', getSubscriber, async (req, res)=>{
    try {
        await res.subscriber.remove()
        res.json({message: 'Subscriber foi deletado'})
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})


async function getSubscriber(req, res, next){
    try{
        algo = await Subscriber.findById(req.params.id)
        if(algo == null){
            return res.status(404).json({message: 'subscriber não encontrado'})
        }
    }catch (error){
        return res.status(500).json({message: error.message})
    }
a
    res.subscriber = algo
    next()
}



module.exports = router