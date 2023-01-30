const models = require("../models");

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

module.exports = {
  add,
};
