const { type } = require('express/lib/response');
const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema({
    food:{
        type:String,
        required:true

    },
    products:{
        type:[String],
        required:true

    },

    procedure:{
        type:String,
        required:false

    },

    manufactureAt:{
        type:Date,
        default:Date.now
    }


});
const Recipe = mongoose.model("Recipe", recipeSchema);

module.exports = Recipe;