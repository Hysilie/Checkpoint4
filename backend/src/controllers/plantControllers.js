const models = require("../models");

/* get all plants */
const browse = (req, res) => {
  models.plant
    .findAll()
    .then(([results]) => {
      res.send(results);
    })
    .catch((error) => {
      console.error(error);
      res.sendStatus(500);
    });
};

/* Get a plant by his id */
const read = (req, res) => {
  models.plant
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

/* Add a plant with his data */
const add = (req, res) => {
  const user = req.body;

  models.plant
    .insert(user)
    .then(([result]) => {
      res.location(`/api/plants/${result.insertId}`).sendStatus(201);
    })
    .catch((error) => {
      console.error(error);
      res.sendStatus(500);
    });
};

/* Get all plants of a user */
const getPlantsbyUser = (req, res) => {
  const userId = parseInt(req.params.id, 10);
  models.plant
    .findPlantByUser(userId)
    .then(([rows]) => {
      res.send(rows);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

/* Get latest 3 plants */
const latestPlants = (req, res) => {
  models.plant
    .findLatestPlants()
    .then(([rows]) => {
      res.send(rows);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

/* Destroy a plant by his id */
const destroy = (req, res) => {
  models.plant
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

/* Destroy all plant of a user */
const destroyAllPlantsByUser = (req, res) => {
  const userId = req.params.id;
  models.plant
    .deleteAllPlantsByUser(userId)
    .then(([result]) => {
      if (result.affectedRows === 0) {
        res.sendsendStatus(404);
      } else {
        res.sendStatus(204);
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

/* Controllers for update an image of a plant */
const updatePicture = (req, res) => {
  const { picture } = req;
  const plant = req.body;

  models.plant
    .insert(plant, picture)
    .then(([result]) => {
      if (result.affectedRows === 0) {
        res.sendStatus(404);
      } else {
        res.send({ picture }).status(204);
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

module.exports = {
  browse,
  read,
  add,
  getPlantsbyUser,
  destroy,
  updatePicture,
  latestPlants,
  destroyAllPlantsByUser,
};
