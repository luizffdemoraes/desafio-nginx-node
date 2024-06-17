// Importação dos módulos necessários
const express = require('express')
const mysql = require('mysql');
const app = express()
const port = 3000

// Configurações para conexão com o banco de dados MySQL
const config = {
    host: 'db',
    user: 'root',
    password: 'root',
    database: 'nodedb'
};

// Criação da conexão com o banco de dados MySQL
const connection = mysql.createConnection(config)

// Comando SQL para inserção de registros na tabela 'people'
const sql = `INSERT INTO people(name) values('Wesley');`
connection.query(sql)

// Rota GET para a raiz ('/')
app.get('/', (req, res) => {
    
    var html = "<h1>Full Cycle Rocks!</h1><br/>";

    connection.query("SELECT * FROM nodedb.people", function (err, result) {
    
        result.forEach(function(row, index) {
            html += row.id + " " + row.name + "<br/>";
        })

        res.send(html);
    });
})

// Inicia o servidor Express na porta especificada
app.listen(port, () => {
    console.log('Rodando na porta ' + port)
})