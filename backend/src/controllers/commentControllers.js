const models = require("../models");

/* Add a comment */
const add = (req, res) => {
  const comment = req.body;

  models.comment
    .addComment(comment)
    .then(([result]) => {
      res.location(`/articles/${result.insertId}`).sendStatus(201);
    })
    .catch((error) => {
      console.error(error);
      res.sendStatus(500);
    });
};

/* Get all comments of an article */

const getByArticleId = (req, res) => {
  const articleId = parseInt(req.params.id, 10);
  models.comment
    .findByArticle(articleId)
    .then(([rows]) => {
      res.send(rows);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

/* Modify the comment of a user */
const update = (req, res) => {
  const comment = req.body;

  comment.id = parseInt(req.params.id, 10);

  models.comment
    .updateComment(comment)
    .then(([result]) => {
      if (result.affectedRows === 0) {
        res.sendStatus(404);
      } else {
        res.sendStatus(204);
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

/* Delete a comment by his id */
const destroy = (req, res) => {
  models.comment
    .deleteComment(req.params.id)
    .then(([result]) => {
      if (result.affectedRows === 0) {
        res.sendStatus(404);
      } else {
        res.sendStatus(204);
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};
/* Delete all comments of an article */
const destroyByArticle = (req, res) => {
  const { articleId } = req.body;
  models.comment
    .deleteByArticle(articleId)
    .then(([result]) => {
      if (result.affectedRows === 0) {
        res.sendStatus(404);
      } else {
        res.sendStatus(204);
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

module.exports = {
  add,
  getByArticleId,
  update,
  destroy,
  destroyByArticle,
};
