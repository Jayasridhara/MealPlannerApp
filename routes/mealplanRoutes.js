const express=require('express');
const { getAllMealPlans, createMealPlan } = require('../controller/mealplanController');
const mealplanRouter=express.Router();
mealplanRouter.post('/mealplans',createMealPlan)
mealplanRouter.get('/mealplans',getAllMealPlans)

module.exports=mealplanRouter;