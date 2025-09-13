const express=require('express');
const mealplanRouter = require('./routes/mealplanRoutes');
const app=express();

//listen for incomin g requires

app.use('/',mealplanRouter);

module.exports=app;