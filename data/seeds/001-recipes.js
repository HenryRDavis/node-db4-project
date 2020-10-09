
exports.seed = function(knex) {
  const recipes = [
      {
        name: "Hanburger"
      },
      {
        name: "Chicken Burger"
      },
      {
        name: "Fish Burger"
      },
  ]
  return knex('recipes').insert(recipes)
};
