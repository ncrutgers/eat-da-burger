var connection = require("../config/connection.js");

// Functions that execute necessary MySQL commands in the controllers  
// Object for all our SQL statement functions.
var orm = {
    // Function that retrieves all records in burgers table
    selectAll: function(table, cb) {
        var queryString = "SELECT * FROM ??";
        connection.query(queryString, [table], function(err, result) {
            if (err) throw err;
            cb(result);
        });
    },
    // Function that adds a new burger
    insertOne: function(table, insertCol1, insertCol2, insertVal1, insertVal2, cb) {
        var queryString = "INSERT INTO ?? (??, ??) VALUES (?, ?)";
        connection.query(queryString, [table, insertCol1, insertCol2, insertVal1, insertVal2], function(err, result) {
            if (err) throw err;
            cb(result);
        });
    },
    // Function that updates state of a burger: devoured
    updateOne: function(table, setCol, setVal, condCol, condVal, cb) {
        var queryString = "UPDATE ?? SET ?? = ? WHERE ?? = ?";
        connection.query(queryString, [table, setCol, setVal, condCol, condVal], function(err, result) {
          if (err) throw err;    
          cb(result);
        });
    }
};

module.exports = orm;