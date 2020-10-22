const mysql = require('mysql');
console.log(process.env.DB_HOST);
const db_connection = mysql.createConnection({
    host : process.env.DB_HOST,
    user : process.env.DB_USER,
    password : process.env.DB_PASSWORD,
    database : process.env.DB_DATABASE
});
db_connection.connect((err)=>{
    if(err) throw err;
    console.log('Database connected');
})

module.exports = db_connection;