FROM node:14

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

EXPOSE $PORT

# Isso adiciona um ANONYMOUS volume
# VOLUME ["/app/feedback"]

# O comando abaixo montaria um volume ANONYMOUS para a pasta NODE_MODULES.
# Ao criar um volume bindado para ter alterações em tempo real
# (cont) (bindando a toda a pasta à pasta /APP), a pasta node_modules seria
# (cont) sobrescrita, apagando-a no container. Leve em consideração que na máquina
# (cont) local não é rodado o comando "NPM INSTALL"
# VOLUME [ "/app/node_modules" ]

# CMD ["node", "server.js"]

# Vamos usar, para testes, o script start que por sua vez, utiliza o NODEMON.
# Esse teste está no conexto de BIND volumes, tentando "pegar" todas as alterações
# (cont) feitas em código em tempo real
CMD ["npm", "start"]