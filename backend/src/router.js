const express = require("express");
/* Multer is used to manage images uploads */
const multer = require("multer");

const upload = multer({ dest: process.env.PLANTS_DIRECTORY });

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
const plantControllers = require("./controllers/plantControllers");
const fileControllers = require("./controllers/fileControllers");

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
router.get("/articles-latest", articleControllers.latestArticles);

/* Plants Management */
router.get("/plants", plantControllers.browse);
router.get("/plants/:id", plantControllers.read);
router.get("/plants/user/:id", plantControllers.getPlantsbyUser);

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
router.put("/articles/:id", articleControllers.edit);

/* Plants Management */
router.delete("/plants/:id", plantControllers.destroy);

/* Plants picture management */
router.post(
  "/pictures",
  verifyToken,
  upload.single("picture"),
  fileControllers.rename,
  plantControllers.updatePicture
);

router.get("/pictures/:fileName", fileControllers.upload);

module.exports = router;
