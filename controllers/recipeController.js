
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
exports.getRecipeById = async (req, res) => {
    try {
      const recipe = await Recipe.findById(req.params.id);
      if (!recipe) return res.status(404).json({ error: 'Recipe not found' });
      res.status(200).json(recipe);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };
  
  // Update a recipe by ID
  exports.updateRecipe = async (req, res) => {
    try {
      const recipe = await Recipe.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
      });
      if (!recipe) return res.status(404).json({ error: 'Recipe not found' });
      res.status(200).json(recipe);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  };
  
  // Delete a recipe by ID
  exports.deleteRecipe = async (req, res) => {
    try {
      const recipe = await Recipe.findByIdAndDelete(req.params.id);
      if (!recipe) return res.status(404).json({ error: 'Recipe not found' });
      res.status(200).json({ message: 'Recipe deleted' });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };