const express = require('express');
const app = express();

const port = 8888;

const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("esercizio_compito.db");


app.post('/biglietti', (req,res) => {
       const t = correntDate.getTime();
       const x = Date(t);
       const id = Math.random().toString().replace("0.", "");
       db.run(`INSERT INTO biglietti (id_biglietti, data_entrata,) VALUES (?,?)`, id, t, (error, result) => {
        if(error){
            response = {
                "code": -1,
                "data": error.message
            }
            res.status(500).send(response);
        }
       const response = {
            "code": 1,
            "data": result
        }
        res.status(201).send(response);
    });
});


       app.get('/biglietti/:id'), (req, res) => {
            const id = req.params.id;
            db.all(`SELECT * FROM biglietti WHERE id=?`, id, (error, rows) => {
            });
       };

app.put('/biglietti/:id', (req, res) => {
    const id = req.params.id;
    
    });


app.delete('/biglietti/:id', (req, res) => {
    const id = req.params.id;
    db.run(`DELETE FROM biglietti WHERE id = ?`, id, (error, result) => {
        if(error){
            response = {
                "code": -1,
                "data": error.message
            }
            res.status(500).send(response);
        }
        response = {
            "code": 1,
            "data": result
        }
        res.status(200).send(response);
    });
});

app.use(express.json()) 
app.use(express.urlencoded({ extended: true })) 


app.listen(port, () => {console.log(`Server listening on port ${port}`)
});