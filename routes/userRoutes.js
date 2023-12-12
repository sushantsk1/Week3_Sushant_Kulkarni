const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController.js");

router.post("/", userController.createUser);
router.get("/", userController.getUserList);
router.get("/:userId", userController.getUserDetails);
router.put("/:userId", userController.updateUserDetails);
router.delete("/:userId", userController.deleteUser);

router.get("/admin/users", userController.getAdminUserList);

module.exports = router;
