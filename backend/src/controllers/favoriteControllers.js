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

/* Remove all favorite of a user */
const deleteAllFavoritesByUser = (req, res) => {
  const userId = req.params.id;

  models.favorite
    .deleteAllFavoritesByUser(userId)
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

/* Remove all favorite of a plant linked to a user */
const deleteAllFavoritesByPlantCreator = (req, res) => {
  const userId = req.params.id;

  models.favorite
    .deleteAllFavoritesByPlantCreator(userId)
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

/*  get all favorite of a plant linked to a user */
const getAllFavoritesByPlantCreator = (req, res) => {
  const userId = req.params.id;
  models.favorite
    .getAllFavoritesByPlantCreator(userId)
    .then(([result]) => {
      if (result.affectedRows === 0) {
        res.sendStatus(404);
      } else {
        res.send(result).status(204);
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
  deleteAllFavoritesByUser,
  deleteAllFavoritesByPlantCreator,
  getAllFavoritesByPlantCreator,
};
