FROM node:14

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

EXPOSE 80

# Since we'll use nodemon, we need to use the start
# (cont) script of nodemon
# CMD [ "node", "app.js" ]
CMD ["npm", "start"]