const router = require("express").Router();

// This is brought in to make database operations easier..
// finding, updating, deleting, etc..
const userController = require("../../controllers/userController");

// Matches with "/api/users" 
router.route("/")
  // with GET
  .get(function() { 
    console.log("this is a test"); 
  });
  // with POST
  // .post(userController.create);

// Matches with "/api/users/:id"
router
  .route("/:id")
  // with GET
  .get(userController.findById)
  // with PUT
  .put(userController.update)
  // with DELETE
  .delete(userController.remove);

module.exports = router;
