const models = require("../models");

/* Get all articles */
const browse = (req, res) => {
  models.article
    .findAll()
    .then(([rows]) => {
      res.send(rows);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

/* Get three last articles */
const latestArticles = (req, res) => {
  models.article
    .findLatestArticles()
    .then(([rows]) => {
      res.send(rows);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

/* Get an article by his id */
const read = (req, res) => {
  models.article
    .find(req.params.id)
    .then(([rows]) => {
      if (rows[0] == null) {
        res.sendStatus(404);
      } else {
        res.send(rows[0]);
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

/* Get all articles of a user */
const getByUserId = (req, res) => {
  const userId = parseInt(req.params.id, 10);
  models.article
    .findByUser(userId)
    .then(([rows]) => {
      res.send(rows);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

/* Create an article */
const add = (req, res) => {
  const article = req.body;

  models.article
    .insert(article)
    .then(([result]) => {
      res.location(`/articles/${result.insertId}`).sendStatus(201);
    })
    .catch((error) => {
      console.error(error);
      res.sendStatus(500);
    });
};

/* Destroy an article by his id */
const destroy = (req, res) => {
  models.article
    .delete(req.params.id)
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

/* Update the article */
const edit = (req, res) => {
  const article = req.body;

  article.id = parseInt(req.params.id, 10);

  models.article
    .update(article)
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
  browse,
  latestArticles,
  read,
  getByUserId,
  add,
  destroy,
  edit,
};
