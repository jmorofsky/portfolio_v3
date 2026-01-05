FROM node:20-alpine AS builder

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

RUN npm run prod-build

FROM nginx:stable-alpine

RUN rm -rf /usr/share/nginx/html/*

COPY --from=builder /app/dist /usr/share/nginx/html/dist

COPY index.html /usr/share/nginx/html

COPY ./src/assets/favicon.ico /usr/share/nginx/html/src/assets/favicon.ico

EXPOSE 80
