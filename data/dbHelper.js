const db = require("./db-config");

module.exports = {
  getRecipes,
  getShoppingList,
};

function getRecipes() {
  return db("recipes");
}

function getShoppingList(recipe_id) {
  return db("recipe_ingred AS r")
    .join("ingredients.id", "r.recipe_id")
    .select("r.quantity", "ingredients.name")
    .where("recipe_id", "=", recipe_id);
}