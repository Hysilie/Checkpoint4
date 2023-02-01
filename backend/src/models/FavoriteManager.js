const AbstractManager = require("./AbstractManager");

class FavoriteManager extends AbstractManager {
  constructor() {
    super({ table: "favorite" });
  }

  /* Find all favorites of a user */
  findFavoriteByUser(id) {
    return this.connection.query(
      `SELECT  ${this.table}.*, user.username, plant.picture, plant.title
        FROM  ${this.table}
        LEFT JOIN user ON user_id = user.id
        LEFT JOIN plant ON plant_id = plant.id
        WHERE user.id = ?`,
      [id]
    );
  }

  /* Add a favorite for a user */
  addFavorite(favorite) {
    return this.connection.query(
      `INSERT INTO ${this.table} (user_id, plant_id, favorite)
    VALUES (?, ?, 1)`,
      [favorite.user_id, favorite.plant_id]
    );
  }

  /* Remove favorite for a user */
  deleteFavorite(favorite) {
    return this.connection.query(
      `DELETE FROM ${this.table} WHERE user_id = ? AND plant_id = ?`,
      [favorite.user_id, favorite.plant_id]
    );
  }

  /* Delete every favorite status */
  deleteAllFavorites(favorite) {
    return this.connection.query(
      `DELETE FROM ${this.table} WHERE  plant_id = ?`,
      [favorite.plant_id]
    );
  }

  /* Delete every favorite of user */
  deleteAllFavoritesByUser(userId) {
    return this.connection.query(
      `DELETE FROM ${this.table} WHERE user_id = ?`,
      [userId]
    );
  }

  /* Get all the favorite  for a plant where the creator is ? */
  getAllFavoritesByPlantCreator(userId) {
    return this.connection.query(
      `
      SELECT ${this.table}.*, user.username, plant.picture, plant.title
      FROM ${this.table}
      LEFT JOIN plant ON plant_id = plant.id
      LEFT JOIN user ON user.id = plant.user_id
      WHERE user.id = ?`,
      [userId]
    );
  }

  /*  I want to delete all the favorite for a plant where the the creator is ?  */
  deleteAllFavoritesByPlantCreator(userId) {
    return this.connection.query(
      `
      DELETE ${this.table}
      FROM ${this.table}
      LEFT JOIN plant ON plant_id = plant.id
      LEFT JOIN user ON user.id = plant.user_id
      WHERE user.id = ? `,
      [userId]
    );
  }
}

module.exports = FavoriteManager;
