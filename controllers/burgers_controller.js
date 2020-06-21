var express = require("express");
var burger = require("../models/burger.js");

var router = express.Router();

// Create all our routes
// Renders index.handlebars with selectAll retrieved data at "/" route
router.get("/", function(req, res) {
    burger.selectAll(function(data) {
      var selAllObject = {
        burgers: data
      };
      res.render("index", selAllObject);
    });
});
// Creates new record for burger in db when insertOne function is called at "/api/burgers"   
router.post("/api/burgers", function(req, res) {
    burger.insertOne("burger_name", "devoured", req.body.burger_name, req.body.devoured, function(result) {
      console.log(result);
      // Send back the ID 
      res.json({ id: result.insertId });
    });
});
// Updates devoured state in db when updateOne function is called at "/api/burgers/:id"  
router.put("/api/burgers/:id", function(req, res) {  
    // console.log(req.params.id);
    // console.log(req.body.devoured);  
    burger.updateOne("devoured", req.body.devoured, "id", req.params.id,
      function(result) {
        if (result.changedRows === 0) {
          // If no rows were changed, then the ID must not exist, so 404
          return res.status(404).end();
        }
        res.status(200).end();
  
      }
    );
});

module.exports = router;
