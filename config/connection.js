var mysql = require("mysql");

//mysql://w0u1pw93zmkbt2gn:xh3165qlnpj0mm9t@y0nkiij6humroewt.cbetxkdyhwsb.us-east-1.rds.amazonaws.com:3306/k8vpcodnfn9a58nm
//for heroku deployment
if(process.env.JAWSDB_URL){
    connection=mysql.createConnection(process.env.JAWSDB_URL);
}
else{
    connection=mysql.createConnection({
    host:"localhost",
    user: "root",
    password:"",
    database: "inventory_db"
    })

}

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

module.exports = connection;