const router = require("express").Router();

// This is brought in to make database operations easier..
// finding, updating, deleting, etc..
const listsController = require("../../controllers/listsController");

// Matches with "/api/lists" 
router.route("/")
  // with GET
  // .get(function() { 
  //   console.log("this is a test"); 
  // });
  .get(listsController.findAll);
  // with POST
  // .post(listController.create);

// Matches with "/api/lists/:id"
router
  .route("/:id")
  // with GET
  .get(listsController.findById)
  // with PUT
  .put(listsController.update)
  // with DELETE
  .delete(listsController.remove);

module.exports = router;
