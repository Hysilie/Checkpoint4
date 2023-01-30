const AbstractManager = require("./AbstractManager");

class FavoriteManager extends AbstractManager {
  constructor() {
    super({ table: "favorite" });
  }

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

  addFavorite(favorite) {
    return this.connection.query(
      `INSERT INTO ${this.table} (user_id, plant_id, favorite)
    VALUES (?, ?, 1)`,
      [favorite.user_id, favorite.plant_id]
    );
  }
}

module.exports = FavoriteManager;
