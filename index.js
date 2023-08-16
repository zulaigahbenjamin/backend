import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import Router from "./routes/routes.js";

// Assuming your './config/database.js' exports the 'connection' object
import connection from './config/database.js';

const app = express();

app.use(express.json());
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(Router);

app.get('/', (req, res)=> {
    res.json({
        msg: "You're home"
    })
})
// connection.connect(err => {
//     if (err) {
//         console.error('Database connection error:', err);
//         return;
//     }
//     console.log('Connected to the database');

//     // Example database operation: Selecting data from a table
//     connection.query('SELECT * FROM products', (queryErr, results) => {
//         if (queryErr) {
//             console.error('Database query error:', queryErr);
//             return;
//         }
//         console.log('Fetched data from the products table:', results);

//         // Close the database connection when done
//         connection.end((endErr) => {
//             if (endErr) {
//                 console.error('Error closing database connection:', endErr);
//             } else {
//                 console.log('Database connection closed');
//             }
//         });
//     });

    // Start the server after connecting to the database
    app.listen(5000, () =>
        console.log('Server running at http://localhost:5000'));
