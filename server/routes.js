const express = require('express');
const router = express.Router();
const pool = require('./db.js');
//const mysqlPassword = require('mysql-password');
//const dateFormat = require('dateformat');

router.get("/api", (req, res) => {
  res.json({ message: "Hello from server!" });
});

/* GET all users */
router.post("/check_user", (req, res) => {
    let {email, password} = req.body;
 
    pool.getConnection((err, connection) => {
        if (err) {
            console.log('API could not connect to DB: ')
            return
        }

        let sql = 'SELECT * from USER WHERE USER.email=? AND USER.password=?';

        // Use the connection
        connection.query(sql, [email, password], (error, data) => {
            if(error){
                res.json({"status": 500, "error": error, "response": error});
            } 
            else {
                console.log(data)
                if (email === data.email && password === data.password) {
                    res.json({"status": 200, "message": 'success', "response": "Login successful."});
                }
            }
        });

        // When done with the connection, release it.
        connection.release();

        // Handle error after the release.
        if (err) {
            console.log('Error in release MySQL database connection. Error: ');
        return;
        }
    })
})



module.exports = router;