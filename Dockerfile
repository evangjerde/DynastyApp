FROM node:16

# Create app dir in our container/image
WORKDIR /usr/src/app

COPY package*.json ./

RUN npm i

COPY ./dist .

EXPOSE 8080
CMD [ "node", "dist/main" ]
