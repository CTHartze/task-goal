const router = require('express').Router();
//imports todo model
const todoItemsModel = require('../models/todoItems');


//creating first route -- adding Todo Item
router.post('/api/item', async (req, res)=>{
    try{
        const newItem = new todoItemsModel({
          item: req.body.item
        })
        //saves item in database
        const saveItem = await newItem.save()
        res.status(200).json('Item Added Successfully.');
    }catch(err){
        res.json(err);
    }
})

//second route -- get data from database
router.get('/api/items', async (req, res)=>{
    try{
        const allTodoItems = await todoItemsModel.find({});
        res.status(200).json(allTodoItems)
    }catch(err){
        res.json(err);
    }
})


//updates item
router.put('/api/item/:id', async (req, res)=>{
    try{
        //finds item by id and updates it
        const updateItem = await todoItemsModel.findByIdAndUpdate(req.params.id, {$set: req.body});
        res.status(200).json('Item Updated');
    }catch(err){
        res.json(err);
    }
})






//exports router
module.exports = router;