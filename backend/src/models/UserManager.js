const AbstractManager = require("./AbstractManager");

class UserManager extends AbstractManager {
  constructor() {
    super({ table: "user" });
  }

  find(id) {
    return this.connection.query(
      `select id, firstname, username, email, admin, registrationDate, profilePicture from  ${this.table} where id = ?`,
      [id]
    );
  }

  /* Manage to find by username and password */
  findByUsernameWithPassword(username) {
    return this.connection.query(
      `select * from  ${this.table} where username = ?`,
      [username]
    );
  }

  /* Manage to find users */
  findAll() {
    return this.connection.query(
      `select id, firstname, username, email, admin, registrationDate, profilePicture from  ${this.table}`
    );
  }

  /* Manage to add user */
  insert(user) {
    return this.connection.query(
      `insert into ${this.table} (firstname, username, email, hashedPassword) values (?, ?, ?, ?)`,
      [user.firstname, user.username, user.email, user.hashedPassword]
    );
  }

  /* Manage to update user */
  update(user) {
    return this.connection.query(
      `update ${this.table} set firstname = ?, username = ?  where id = ?`,
      [user.firstname, user.username, user.id]
    );
  }

  /* Manage to delete user */
  delete(id) {
    return this.connection.query(`delete from ${this.table} where id = ?`, [
      id,
    ]);
  }

  /* Manage to update picture */
  updateAvatar(id, profilePicture) {
    return this.connection.query(
      `update ${this.table} set profilePicture = ? where id = ?`,
      [profilePicture, id]
    );
  }
}

module.exports = UserManager;
