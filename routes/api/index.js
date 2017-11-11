const router = require("express").Router();
const courseRoutes = require("./courses");
const bookRoutes = require("./books");

// define the routes to use
router.use("/courses", courseRoutes);
router.use("/books", bookRoutes);

module.exports = router;
