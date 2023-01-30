const models = require("../models");

/* Favorites of a user */
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

/* Add a favorite for a user */
const addFavorite = (req, res) => {
  const favorite = req.body;

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

/* Remove a favorite for a user */
const deleteFavorite = (req, res) => {
  const favorite = req.body;

  models.favorite
    .deleteFavorite(favorite)
    .then(([result]) => {
      if (result.affectedRows === 0) {
        res.sendStatus(404);
      } else {
        res.sendStatus(204);
      }
    })
    .catch((error) => {
      console.error(error);
      res.sendStatus(500);
    });
};

/* Remove all favorites */
const deleteAllFavorites = (req, res) => {
  const favorite = req.body;

  models.favorite
    .deleteAllFavorites(favorite)
    .then(([result]) => {
      if (result.affectedRows === 0) {
        res.sendStatus(404);
      } else {
        res.sendStatus(204);
      }
    })
    .catch((error) => {
      console.error(error);
      res.sendStatus(500);
    });
};

module.exports = {
  favoriteByUser,
  addFavorite,
  deleteFavorite,
  deleteAllFavorites,
};
