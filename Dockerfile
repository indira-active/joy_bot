FROM node:argon

# create app directory

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY package.json .

RUN npm install

CMD [ "npm", "start" ]