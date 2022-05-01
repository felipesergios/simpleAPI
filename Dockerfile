FROM node:alpine
WORKDIR /usr/app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
RUN npx knex migrate:latest
RUN npx knex seed:run
CMD ["npm","start"]