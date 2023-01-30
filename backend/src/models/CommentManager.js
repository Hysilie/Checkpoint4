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
}

module.exports = CommentManager;
