const models = require("../models");

const favoriteByUser = (req, res) => {
  const id = parseInt(req.params.id, 10);
  models.favorite
    .findFavoriteByUser(id)
    .then(([rows]) => {
      res.send(rows);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const addFavorite = (req, res) => {
  const { favorite } = req.body;

  models.favorite
    .addFavorite(favorite)
    .then(([result]) => {
      res.location(`/favorites/${result.insertId}`).sendStatus(201);
    })
    .catch((error) => {
      console.error(error);
      res.sendStatus(500);
    });
};

module.exports = {
  favoriteByUser,
  addFavorite,
};
