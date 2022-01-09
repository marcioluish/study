# O node é utilizado para lançar um servidor de desenvolvimento
# (cont) onde a aplicação em React rodará.
# Node é necessário otimizar o código em React e transformá-lo
# (cont) em um cógio que browsers entendam.
# É usualmente assim que códigos em React são setados em Docker.
FROM node:14

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

EXPOSE 3000

CMD [ "npm", "start" ]