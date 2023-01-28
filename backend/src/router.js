const express = require("express");

/* Multer is used to manage images uploads */
//const multer = require("multer");

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

/* ~~ PUBLIC ROUTES  ~~ */
/* Register and Login */
/* Users Management */
router.post("/register", hashPassword, userControllers.add);
router.post(
  "/login",
  authentificationControllers.getUserByUsernameWithPasswordAndPassToNext,
  verifyPassword
);

/* ~~ PROTECTED ~~ */
/* The middleware will now check if the token exist */
router.use(verifyToken);

/* Users Management */
router.get("/users", userControllers.browse);
router.get("/users/:id", userControllers.read);
router.put("/users/:id", userControllers.edit);
router.delete("/users/:id", userControllers.destroy);

module.exports = router;
