FROM node:20

WORKDIR /secure

COPY package*.json /secure/

RUN npm install

COPY . /secure/

EXPOSE 3000
CMD [ "npm", "start"]