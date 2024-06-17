<h1 align="center">
Full Cycle 3.0 - Desafio Nginx com Node.js
</h1>

Este projeto demonstra a utilização do nginx como proxy reverso, quando um usuário acessar o nginx, o mesmo fará uma chamada a aplicação node.js. Essa aplicação por sua vez adicionará um registro em nosso banco de dados mysql, cadastrando um nome na tabela people.

O retorno da aplicação node.js para o nginx deverá ser:

<h1>Full Cycle Rocks!</h1>

- Lista de nomes cadastrada no banco de dados..

# Estrutura do Projeto
```
desafio-nginx-node/
├── docker-compose.yml
├── nginx/
│   ├── Dockerfile
│   └── default.conf
├── node/
│   ├── Dockerfile
│   ├── index.js
│   ├── node_modules/
│   ├── package-lock.json
│   └── package.json
└── sql/
    └── script.sql
```

## Construir as imagens

Inicia todos os serviços definidos no arquivo `docker-compose.yml`:

```sh
docker-compose up -d
```

## Link para acesso a aplicação após executar o comando anterior.:
```sh
http://localhost:8080/
```

