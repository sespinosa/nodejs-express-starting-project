FROM node:11.6.0-alpine

RUN apk add --no-cache bash

WORKDIR /app

COPY package.json .

RUN npm install --quiet

COPY . .

EXPOSE 4040

CMD [ "npm", "start" ]
