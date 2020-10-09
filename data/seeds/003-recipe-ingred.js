
exports.seed = function(knex) {
  const recipe_ingredients = [
    {
      recipe_id: 1,
      ingredient_id: 1,
      quantity: 2,
    },
    {
      recipe_id: 2,
      ingredient_id: 2,
      quantity: 2,
    },
    {
      recipe_id: 3,
      ingredient_id: 3,
      quantity: 2,
    },
  ]
  return knex('recipe_ingred').insert(recipe_ingredients)
};
