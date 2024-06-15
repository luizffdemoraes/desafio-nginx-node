const express = require('express')
const app = express()
const port = 3000
const config = {
    host: 'db',
    user: 'root',
    password: 'root',
    database: 'nodedb'
};

const mysql = require('mysql')
const connection = mysql.createConnection(config)

const sql = `INSERT INTO people(name) values('Wesley')`
connection.query(sql)
connection.end()

app.get('/', (req, res) => {
    const selectSql = `SELECT name FROM people`
    connection.query(selectSql, (err, results, fields) => {
        if (err) throw err;
        let namesList = '<ul>'
        results.forEach(row => {
            namesList += `<li>${row.name}</li>`
        });
        namesList += '</ul>'
        res.send(`<h1>Full Cycle Rocks!</h1>${namesList}`)
    });
})

app.listen(port, () => {
    console.log('Rodando na porta ' + port)
})