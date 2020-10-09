
exports.seed = function(knex) {
  const ingredients = [
    {
      name: "hamburger buns",
    },
    {
      name: "beef",
    },
    {
      name: "chicken",
    },
  ]
  return knex('ingredients').insert(ingredients)
};
