const models = require("../models");

// check if the username and the password matches
const getUserByUsernameWithPasswordAndPassToNext = (req, res, next) => {
  const { username } = req.body;

  models.user
    .findByUsernameWithPassword(username)
    .then(([users]) => {
      if (users[0] != null) {
        [req.user] = users;

        next();
      } else {
        res.sendStatus(401);
      }
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Error retrieving data from database");
    });
};

module.exports = {
  getUserByUsernameWithPasswordAndPassToNext,
};
