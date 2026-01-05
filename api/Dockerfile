FROM node:20-alpine AS builder

WORKDIR /app

COPY package*.json ./

RUN npm ci

COPY . .

FROM node:20-alpine

ENV NODE_ENV=production

WORKDIR /app

COPY --from=builder /app/package*.json ./
RUN npm ci --only=production

COPY --from=builder /app/src ./src
COPY --from=builder /app/.env ./.env

RUN addgroup -S appgroup && adduser -S appuser -G appgroup

EXPOSE 4000

CMD ["node", "src/server.mjs"]
