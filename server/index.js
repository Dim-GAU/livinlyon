const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");

app.use(cors());
app.use(express.json());


app.post("/appartment/add", async (req, res) => {
    try {
        const {owner, rooms, location, description} = req.body;
        const newAppartment = await pool.query("INSERT INTO appartment (owner, rooms, location, description) VALUES ($1, $2, $3, $4) RETURNING *",
            [owner, rooms, location, description]);
        res.json(newAppartment)
    } catch (err) {

    }
})

app.get("/appartment/:id", async (req, res) => {
    try {
        const {id} = req.params;
        const appartment = await pool.query("SELECT * FROM appartment WHERE appartment_id = $1;", [id]);
        res.json(appartment.rows);
    } catch (err) {
        console.error("ok")
    }
})

app.get("/appartment/search/:location1/:location2/:location3/:location4/:location5/:location6/:location7/:location8/:location9", async (req, res) => {
    try {
        const {location1, location2, location3, location4, location5, location6, location7, location8, location9} = req.params;


        const allAppartments = await pool.query("SELECT * FROM appartment WHERE location IN ($1, $2, $3, $4, $5, $6, $7, $8, $9);", [location1, location2, location3, location4, location5, location6, location7, location8, location9]);
        res.json(allAppartments.rows);
        console.log("ok")

    } catch (err) {
        console.error(err.message);
    }
});

app.get("/appartment/search/:location1/:location2/:location3/:location4/:location5/:location6/:location7/:location8", async (req, res) => {
    try {
        const {location1, location2, location3, location4, location5, location6, location7, location8} = req.params;


        const allAppartments = await pool.query("SELECT * FROM appartment WHERE location IN ($1, $2, $3, $4, $5, $6, $7, $8);", [location1, location2, location3, location4, location5, location6, location7, location8]);
        res.json(allAppartments.rows);
        console.log("ok")

    } catch (err) {
        console.error(err.message);
    }
});

app.get("/appartment/search/:location1/:location2/:location3/:location4/:location5/:location6/:location7", async (req, res) => {
    try {
        const {location1, location2, location3, location4, location5, location6, location7} = req.params;


        const allAppartments = await pool.query("SELECT * FROM appartment WHERE location IN ($1, $2, $3, $4, $5, $6, $7;", [location1, location2, location3, location4, location5, location6, location7]);
        res.json(allAppartments.rows);
        console.log("ok")

    } catch (err) {
        console.error(err.message);
    }
});

app.get("/appartment/search/:location1/:location2/:location3/:location4/:location5/:location6/:location7", async (req, res) => {
    try {
        const {location1, location2, location3, location4, location5, location6, location7} = req.params;


        const allAppartments = await pool.query("SELECT * FROM appartment WHERE location IN ($1, $2, $3, $4, $5, $6, $7);", [location1, location2, location3, location4, location5, location6, location7]);
        res.json(allAppartments.rows);
        console.log("ok")

    } catch (err) {
        console.error(err.message);
    }
});

app.get("/appartment/search/:location1/:location2/:location3/:location4/:location5/:location6", async (req, res) => {
    try {
        const {location1, location2, location3, location4, location5, location6} = req.params;


        const allAppartments = await pool.query("SELECT * FROM appartment WHERE location IN ($1, $2, $3, $4, $5, $6);", [location1, location2, location3, location4, location5, location6]);
        res.json(allAppartments.rows);
        console.log("ok")

    } catch (err) {
        console.error(err.message);
    }
});

app.get("/appartment/search/:location1/:location2/:location3/:location4/:location5", async (req, res) => {
    try {
        const {location1, location2, location3, location4, location5} = req.params;


        const allAppartments = await pool.query("SELECT * FROM appartment WHERE location IN ($1, $2, $3, $4, $5);", [location1, location2, location3, location4, location5]);
        res.json(allAppartments.rows);
        console.log("ok")

    } catch (err) {
        console.error(err.message);
    }
});

app.get("/appartment/search/:location1/:location2/:location3/:location4", async (req, res) => {
    try {
        const {location1, location2, location3, location4} = req.params;


        const allAppartments = await pool.query("SELECT * FROM appartment WHERE location IN ($1, $2, $3, $4);", [location1, location2, location3, location4]);
        res.json(allAppartments.rows);
        console.log("ok")

    } catch (err) {
        console.error(err.message);
    }
});

app.get("/appartment/search/:location1/:location2/:location3", async (req, res) => {
    try {
        const {location1, location2, location3} = req.params;


        const allAppartments = await pool.query("SELECT * FROM appartment WHERE location IN ($1, $2, $3);", [location1, location2, location3]);
        res.json(allAppartments.rows);
        console.log("ok")

    } catch (err) {
        console.error(err.message);
    }
});

app.get("/appartment/search/:location1/:location2", async (req, res) => {
    try {
        const {location1, location2} = req.params;


        const allAppartments = await pool.query("SELECT * FROM appartment WHERE location IN ($1, $2);", [location1, location2]);
        res.json(allAppartments.rows);
        console.log("ok")

    } catch (err) {
        console.error(err.message);
    }
});

app.get("/appartment/search/:location1", async (req, res) => {
    try {
        const {location1} = req.params;


        const allAppartments = await pool.query("SELECT * FROM appartment WHERE location IN ($1);", [location1]);
        res.json(allAppartments.rows);
        console.log("ok")

    } catch (err) {
        console.error(err.message);
    }
});
//recherche d'appartement

app.get("/appartment/get", async (req, res) => {
    try {
        const allAppartments = await pool.query("SELECT * FROM appartment");
        res.json(allAppartments.rows);
    } catch (err) {
        console.error(err.message);
    }
});

app.delete("/appartment/:id", async(req, res) => {
    try {
        const {id} = req.params;
        const deleteAppartment = await pool.query("DELETE FROM appartment WHERE apparment_id = $1",
            [id]
        );

        res.json("Appartment has been deleted!");
    } catch (err) {
        console.log(err.message);
    }
})



app.listen(8000, () => {
    console.log("server has started on port 8000");
});