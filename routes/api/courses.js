const router = require("express").Router();

router.route("/")
  .get(function() { 
    console.log("this is a test from COURSES"); 
  });


module.exports = router;
