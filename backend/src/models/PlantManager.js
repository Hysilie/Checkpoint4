const AbstractManager = require("./AbstractManager");

class PlantManager extends AbstractManager {
  constructor() {
    super({ table: "plant" });
  }

  /* Find all plants */
  findAll() {
    return this.connection.query(`select * from  ${this.table}`);
  }

  /* Find plant by his id */
  find(id) {
    return this.connection.query(`select * from  ${this.table} where id = ?`, [
      id,
    ]);
  }

  /* Find all plant by user */
  findPlantByUser(userId) {
    return this.connection.query(
      `select * from  ${this.table} where user_id = ?`,
      [userId]
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
      `insert into ${this.table} (title, picture,user_id) values (?, ?, ?)`,
      [plant.title, picture, plant.user_id]
    );
  }
}

module.exports = PlantManager;
