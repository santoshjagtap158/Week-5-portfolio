
const express = require("express");
const router = express.Router();

const {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser
} = require("../controllers/userController");

// CRUD routes
router.get("/", getUsers);
router.get("/:id", getUserById);
router.post("/", createUser);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);
// Dynamic Parameter Endpoint
router.get("/:id/:section", (req, res) => {
  const { id, section } = req.params;

  res.json({
    userId: id,
    section: section
  });
});
module.exports = router;
