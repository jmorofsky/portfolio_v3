FROM node:20-alpine AS builder

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

RUN npm run prod-build

FROM nginx:alpine

RUN rm -rf /usr/share/nginx/html/*

COPY --from=builder /app/dist /usr/share/nginx/html/dist

COPY nginx.conf /etc/nginx/nginx.conf

COPY index.html /usr/share/nginx/html

COPY ./src/assets/favicon.ico /usr/share/nginx/html/src/assets/favicon.ico

EXPOSE 80

# Command to run Nginx in the foreground
CMD ["nginx", "-g", "daemon off;"]
