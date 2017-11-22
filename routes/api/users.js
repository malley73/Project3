const router = require("express").Router();

// This is brought in to make database operations easier..
// finding, updating, deleting, etc..
const usersController = require("../../controllers/usersController");

// Matches with "/api/users" 
router.route("/")
  // with GET
  // .get(function() { 
  //   console.log("this is a test"); 
  // });
   .get(usersController.findAll);
  
  // with POST
  // .post(userController.create);

// Matches with "/api/users/:id"
router
  .route("/:id")
  // with GET
  .get(usersController.findById)
  // with PUT
  .put(usersController.update)
  // with DELETE
  .delete(usersController.remove);

module.exports = router;
