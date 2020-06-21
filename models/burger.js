var orm = require("../config/orm.js");
// Model object with call back functions; makes connection between ORM and burger functions
var burger = {
    selectAll: function(cb) {
        orm.selectAll("burgers", function(res) {
            cb(res);
          });
    },
    insertOne: function(insertCol1, insertCol2, insertVal1, insertVal2, cb) {
        orm.insertOne("burgers", insertCol1, insertCol2, insertVal1, insertVal2, function(res) {
          cb(res);
        });
    },
    updateOne: function(setCol, setVal, condCol, condVal, cb) {
        orm.updateOne("burgers", setCol, setVal, condCol, condVal, function(res) {
          cb(res);
        });
    }    
};

module.exports = burger;