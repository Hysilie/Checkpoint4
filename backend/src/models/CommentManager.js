const AbstractManager = require("./AbstractManager");

class CommentManager extends AbstractManager {
  constructor() {
    super({ table: "comment" });
  }

  /* Add a comment to an article */
  addComment(comment) {
    return this.connection.query(
      `INSERT INTO ${this.table} (user_id, article_id, content)
            VALUES (?, ?, ?)`,
      [comment.user_id, comment.article_id, comment.content]
    );
  }

  /* Find all comments of an article */
  findByArticle(articleId) {
    return this.connection.query(
      `SELECT ${this.table}.* , username
            FROM ${this.table}
            LEFT JOIN user ON user_id = user.id
            WHERE article_id = ?`,
      [articleId]
    );
  }

  /* Modify the comments of a user */
  updateComment(comment) {
    return this.connection.query(
      `UPDATE ${this.table} SET content = ? WHERE id = ?`,
      [comment.content, comment.id]
    );
  }

  /* Destroy a comment */
  deleteComment(id) {
    return this.connection.query(`DELETE FROM ${this.table} WHERE id = ?`, [
      id,
    ]);
  }
}

module.exports = CommentManager;
