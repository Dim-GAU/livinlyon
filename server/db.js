const Pool = require("pg").Pool;

const pool = new Pool({
    user: "princesse",
    password: "ubuntu",
    host: "localhost",
    port:"5432",
    database: "livinlyon"
});

module.exports = pool;