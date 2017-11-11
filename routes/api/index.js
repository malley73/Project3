const router = require("express").Router();
const userRoutes = require("./users");
const listRoutes = require("./lists");

// define the routes to use
router.use("/users", userRoutes);
router.use("/lists", listRoutes);

module.exports = router;
