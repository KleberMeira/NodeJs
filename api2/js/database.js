const pg = require('pg')

const client = new pg.Client({
    user: 'postgres',
    host: 'localhost',
    database: 'postgres',
    password: '123mudar',
    port: 3306,
})

module.exports = client