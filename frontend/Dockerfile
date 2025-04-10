# Dockerfile for Next.js (frontend)
FROM node:18 AS build

WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install
COPY . .
RUN npm run build

# 本番用サーバー
FROM node:18-slim

WORKDIR /app
COPY --from=build /app ./
EXPOSE 3000
CMD ["npm", "start"]
