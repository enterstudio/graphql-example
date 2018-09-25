FROM node:latest

WORKDIR /usr/src/app/

RUN yarn global add concurrently typescript

COPY package*.json ./

RUN yarn install

COPY . .

#CMD [ "npm", "bundle" ]
