FROM node:latest

WORKDIR /usr/src/app/

RUN yarn global add concurrently typescript ts-node

COPY package*.json ./

RUN yarn install

COPY . .

#CMD [ "npm", "bundle" ]
