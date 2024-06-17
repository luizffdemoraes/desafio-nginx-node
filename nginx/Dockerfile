# Imagem base
FROM nginx:alpine

# Instalação do pacote OpenSSL
RUN apk add --no-cache openssl

# Variável de ambiente para definir a versão do Dockerize
ENV DOCKERIZE_VERSION v0.7.0

# Instalação do Dockerize para esperar pela disponibilidade do MySQL e execução do script de entrada
RUN wget https://github.com/jwilder/dockerize/releases/download/$DOCKERIZE_VERSION/dockerize-alpine-linux-amd64-$DOCKERIZE_VERSION.tar.gz \
    && tar -C /usr/local/bin -xzvf dockerize-alpine-linux-amd64-$DOCKERIZE_VERSION.tar.gz \
    && rm dockerize-alpine-linux-amd64-$DOCKERIZE_VERSION.tar.gz

# Copia o arquivo de configuração NGINX
COPY default.conf /etc/nginx/conf.d/

# Comando de entrada para esperar pelo MySQL e iniciar o NGINX
ENTRYPOINT ["dockerize","-wait", "tcp://db:3306","./docker-entrypoint.sh"]

# Comando padrão para iniciar o NGINX em modo daemon
CMD ["nginx", "-g", "daemon off;"]