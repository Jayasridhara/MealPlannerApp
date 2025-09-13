const express=require('express');
const mealplanRouter=express.Router();

mealplanRouter.get('/mealplans',(req,res)=>{
    res.json({message:'get all meal plans routes'})
})

module.exports=mealplanRouter;