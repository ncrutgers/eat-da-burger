var mysql =  require("mysql");
// Connect to mysql db w/ credentials
var connection = mysql.createConnection({
    host: "",
    port: 3306,
    user: "",
    password: "",
    database: "burgers_db"
});
// Connects to mysql connection
connection.connect(function(err) {
    if (err) {
        console.log("Error connecting: " + err.stack);
        return;
    }
    console.log("Connected as id " + connection.threadId);
});

module.exports = connection;