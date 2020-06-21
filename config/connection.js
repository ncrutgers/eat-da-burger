var mysql =  require("mysql");
var connection;
// If the server contains the JAWSDB_URL environmental variable, it	connect to the JawsDB database
if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    // Connect to mysql locally db w/ credentials. If the server lacks the variable, it falls back on an explicitly defined local database.
    connection = mysql.createConnection({
        host: "",
        user: "",
        password: "",
        database: "burgers_db"
});

}

// Connects to mysql connection
connection.connect(function(err) {
    if (err) {
        console.log("Error connecting: " + err.stack);
        return;
    }
    console.log("Connected as id " + connection.threadId);
});

module.exports = connection;