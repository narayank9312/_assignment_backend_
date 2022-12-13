const express = require("express");
const router = express.Router();
var userController = require("../controllers/userController");

router.post("/createUser", userController.createUser);

router.get("/listUser", userController.listUser);
router.get("/:id", userController.updateUser);
router.delete("/delete/:id", userController.deleteUser);

module.exports = router;
