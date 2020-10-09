
exports.up = function(knex) {
  return knex.schema.createTable('recipes', tbl => {
      tbl.increments();
      tbl.string('name').notNullable().unique();
  })
  .createTable('ingredients', tbl => {
      tbl.increments();
      tbl.string('name').notNullable().unique();
    })
    .createTable('recipe_ingred', tbl => {
      tbl.increments();
      
      tbl.float('quantity')

      tbl.integer('recipe_id')
      .unsigned()
      .references('id')
      .inTable('recipes')
      .onDelete('RESTRICT')
      .onUpdate('CASCADE')


      tbl.integer('ingredient_id')
      .unsigned()
      .references('id')
      .inTable('ingredients')
      .onDelete('RESTRICT')
      .onUpdate('CASCADE')
})
};

exports.down = function(knex) {
  return knex.schema
  .dropTableIfExists('recipe_ingred')
  .dropTableIfExists('ingredients')
  .dropTableIfExists('recipes')
};
