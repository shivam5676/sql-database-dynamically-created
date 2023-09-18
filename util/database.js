const mysql=require("mysql2/promise")
const pool=mysql.createPool({
    host: 'localhost',          // Your MySQL host
    user: 'root',      // Your MySQL username
    password: '(@Shivam',  // Your MySQL password
    database: 'expense-database'   // Your MySQL database name
})




  module.exports=pool
