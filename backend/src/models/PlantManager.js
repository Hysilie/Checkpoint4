const AbstractManager = require("./AbstractManager");

class PlantManager extends AbstractManager {
  constructor() {
    super({ table: "plant" });
  }

  /* Find all plants */
  findAll() {
    return this.connection.query(
      `select ${this.table}.*, username from  ${this.table} inner join user on user.id = ${this.table}.user_id ORDER by creationDate desc`
    );
  }

  /* Find plant by his id */
  find(id) {
    return this.connection.query(
      `select ${this.table}.*, username from ${this.table} inner join user on user.id = ${this.table}.user_id  where ${this.table}.id = ?`,
      [id]
    );
  }

  /* Find all plant by user */
  findPlantByUser(userId) {
    return this.connection.query(
      `select * from  ${this.table} where user_id = ?`,
      [userId]
    );
  }

  /* Find by latest add */
  findLatestPlants() {
    return this.connection.query(
      `SELECT ${this.table}.* , username
    FROM ${this.table}
    LEFT JOIN user ON user_id = user.id
    ORDER by creationDate desc
    LIMIT 4;`
    );
  }

  /* Delete a plant by id */
  delete(id) {
    return this.connection.query(`delete from ${this.table} where id = ?`, [
      id,
    ]);
  }

  /* Add a plant */
  insert(plant, picture) {
    return this.connection.query(
      `insert into ${this.table} (title, picture,user_id,content) values (?, ?, ?, ?)`,
      [plant.title, picture, plant.user_id, plant.content]
    );
  }

  /* Delete all plants of a user */
  deleteAllPlantsByUser(userId) {
    return this.connection.query(
      `delete from ${this.table} where user_id = ?`,
      [userId]
    );
  }
}

module.exports = PlantManager;
