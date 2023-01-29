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

module.exports = {
  favoriteByUser,
};
