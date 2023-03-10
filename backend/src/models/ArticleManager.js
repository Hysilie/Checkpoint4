const AbstractManager = require("./AbstractManager");

class ArticleManager extends AbstractManager {
  constructor() {
    super({ table: "article" });
  }

  /* Find all articles */
  findAll() {
    return this.connection.query(
      `SELECT ${this.table}.* , user.username
      FROM  ${this.table}
      LEFT JOIN user ON user_id = user.id;
      `
    );
  }

  /* Find last articles for the home page */

  findLatestArticles() {
    return this.connection.query(
      `SELECT ${this.table}.* , username
    FROM ${this.table}
    LEFT JOIN user ON user_id = user.id
    ORDER by creationDate desc
    LIMIT 3;`
    );
  }

  /* Find article by id */
  find(id) {
    return this.connection.query(
      `SELECT ${this.table}.* , user.username 
      FROM  ${this.table} 
      LEFT JOIN user ON user_id = user.id 
      WHERE article.id = ?`,
      [id]
    );
  }

  /* Find all articles by user */
  findByUser(userId) {
    return this.connection.query(
      `select * from  ${this.table} where user_id = ?`,
      [userId]
    );
  }

  /* Create an article */
  insert(article) {
    return this.connection.query(
      `insert into ${this.table} (title, content, user_id) values (?, ?, ?)`,
      [article.title, article.content, article.user_id]
    );
  }

  /* Delete an article by id */
  delete(id) {
    return this.connection.query(`delete from ${this.table} where id = ?`, [
      id,
    ]);
  }

  /* Update the article */
  update(article) {
    return this.connection.query(
      `update ${this.table} set title = ?, content = ?  where id = ?`,
      [article.title, article.content, article.id]
    );
  }
}
module.exports = ArticleManager;
