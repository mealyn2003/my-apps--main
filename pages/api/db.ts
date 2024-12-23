import mysql, { Pool } from 'mysql2/promise';

const pool: Pool = mysql.createPool({
  host: 'localhost',
  user: 'root',       
  password: '1234',   
  database: 'contact_form', 
});

export default pool;