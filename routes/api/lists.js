const router = require("express").Router();

// This is brought in to make database operations easier..
// finding, updating, deleting, etc..
const listController = require("../../controllers/listController");

// Matches with "/api/lists" 
router.route("/")
  // with GET
  .get(function() { 
    console.log("this is a test"); 
  });
  // with POST
  // .post(listController.create);

// Matches with "/api/lists/:id"
router
  .route("/:id")
  // with GET
  .get(listController.findById)
  // with PUT
  .put(listController.update)
  // with DELETE
  .delete(listController.remove);

module.exports = router;
