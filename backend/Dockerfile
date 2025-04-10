# Dockerfile for Go (backend)
FROM golang:1.24.2 AS build

WORKDIR /app
COPY . . 
RUN go mod tidy

# 本番用のサーバー
FROM golang:1.24.2-alpine

WORKDIR /app
COPY --from=build /app ./
EXPOSE 8080
CMD ["go", "run", "main.go"]
