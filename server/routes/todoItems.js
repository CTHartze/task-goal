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




//exports router
module.exports = router;