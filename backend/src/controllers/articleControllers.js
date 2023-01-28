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

module.exports = {
  browse,
  read,
  getByUserId,
  add,
};
