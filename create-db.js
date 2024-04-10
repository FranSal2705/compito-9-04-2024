const sqlite3 = require("sqlite3");
const db = new sqlite3.Database("esercizio_compito.db");

db.serialize(() => {
    db.run(`CREATE TABLE biglietti (
           id_biglietti TEXT PRIMARY KEY,
           data_entrata INTEGER NOT NULL,
           prezzo INTEGER,
           data_uscita INTEGER,
          )`
  );
});