const express = require("express");

/* Multer is used to manage images uploads */
// const multer = require("multer");
// const upload = multer({ dest: "public/uploads/" });

const router = express.Router();

/* ~~  CONTROLLERS REQUIRE ~~  */
/* We get the authentification service */
const {
  hashPassword,
  verifyPassword,
  verifyToken,
} = require("./services/auth");
const authentificationControllers = require("./controllers/authControllers");
const userControllers = require("./controllers/userControllers");
const articleControllers = require("./controllers/articleControllers");

/* ~~ PUBLIC ROUTES  ~~ */
/* Register and Login */
/* Users Management */
router.post("/register", hashPassword, userControllers.add);
router.post(
  "/login",
  authentificationControllers.getUserByUsernameWithPasswordAndPassToNext,
  verifyPassword
);

/* Articles Management */
router.get("/articles", articleControllers.browse);
router.get("/articles/:id", articleControllers.read);
router.get("/articles/user/:id", articleControllers.getByUserId);

/* ~~ PROTECTED ~~ */
/* The middleware will now check if the token exist */
router.use(verifyToken);

/* Users Management */
router.get("/users", userControllers.browse);
router.get("/users/:id", userControllers.read);
router.put("/users/:id", userControllers.edit);
router.delete("/users/:id", userControllers.destroy);

/* Articles Management */
router.post("/create-article", articleControllers.add);
router.delete("/articles/:id", articleControllers.destroy);

module.exports = router;
