FROM node:latest as build-stage
WORKDIR /merchant-hub/
COPY public/ /merchant-hub/public
COPY src/ /merchant-hub/src
COPY package.json /merchant-hub/
COPY . .
RUN npm install
CMD ["npm", "start"]