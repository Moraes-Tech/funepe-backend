/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');

class ResourceSchema extends Schema {
  static get connection() {
    return 'pgauth';
  }

  up() {
    this.create('resources', (table) => {
      table.increments();
      table.string('name').notNullable().unique();
      table.string('slug').notNullable().unique();
      table.timestamps();
    });
  }

  down() {
    this.drop('resources');
  }
}

module.exports = ResourceSchema;
