
const Recipe = require("../models/recipeModel");

exports.createRecipe = async(req, res) => {
    try{
        const newRecipe = new Recipe(req.body);
        await newRecipe.save();
        res.status(201).json(newRecipe);

    }catch(error){
        res.status(400).json({message:"Not created",error})
    }

}

exports.getAllrecipes =  async(req, res) => {
    try{
        const recipes = await Recipe.find();
        res.status(201).json(recipes);

    }catch(error){
        res.status(500).json({message:"error fetching the recipes",error})
    }

}