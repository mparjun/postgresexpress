const {Pool,Client} = require('pg') ;
const pool = new Pool({
    user : 'postgres',
    host: 'localhost',
    database : 'students',
    password: 'abhimanue',
    port : 5432
         })

module.exports = pool;
   