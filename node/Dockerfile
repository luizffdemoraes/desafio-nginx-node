FROM node:15-buster

# Cria o diretório de trabalho
WORKDIR /usr/src/app

# Copia o código da aplicação
COPY . .

RUN apt-get update && apt-get install -y wget

ENV DOCKERIZE_VERSION v0.7.0

# Instalação do Dockerize para aguardar a disponibilidade do MySQL
RUN wget https://github.com/jwilder/dockerize/releases/download/$DOCKERIZE_VERSION/dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz \
    && tar -C /usr/local/bin -xzvf dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz \
    && rm dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz

# Instala o pacote mysql e salva no package.json
RUN npm install

# Expõe a porta da aplicação
EXPOSE 3000

# Comando para rodar a aplicação
# CMD ["node", "index.js"]