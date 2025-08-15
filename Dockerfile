FROM node:20.11.1-alpine AS builder

WORKDIR /app

COPY package*.json ./

WORKDIR /app
RUN npm install

COPY . .

RUN npm run build

FROM node:20.11.1-alpine

WORKDIR /app/web

COPY --from=builder /app/package*.json ./
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public

CMD ["npm", "start"]
