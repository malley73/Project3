const router = require("express").Router();
const userRoutes = require("./users");
const listRoutes = require("./lists");
//const mailRoutes = require("./mailer");

// define the routes to use
router.use("/users", userRoutes);
router.use("/lists", listRoutes);
//router.use("/mailer", mailRoutes);

module.exports = router;
