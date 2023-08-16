import mysql from "mysql2";
   
// create the connection to database
const db = mysql.createConnection({
  host: 'bgkq7axlalh52arwgnvv-mysql.services.clever-cloud.com',
  user: 'u9j898sc5oghrbny',
  password: 'kRlXj9ltbbDgL5JVT21O',
  database: 'bgkq7axlalh52arwgnvv'
});

// // Connect to the database
// connection.connect(err => {
//     if (err) {
//       console.error('Database connection error:', err);
//       return;
//     }
//     console.log('Connected to the database');
  
//     // Example database operation: Selecting data from a table
//     connection.query('SELECT * FROM products', (queryErr, results) => {
//       if (queryErr) {
//         console.error('Database query error:', queryErr);
//         return;
//       }
//       console.log('Fetched data from the users table:', results);
  
//       // Perform more database operations as needed
  
//       // Close the database connection when done
//       connection.end((endErr) => {
//         if (endErr) {
//           console.error('Error closing database connection:', endErr);
//         } else {
//           console.log('Database connection closed');
//         }
//       });
//     });
//   });


export default db;