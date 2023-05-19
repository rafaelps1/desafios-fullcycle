# Stage builder
FROM golang:1.20-alpine AS builder

WORKDIR /usr/src/app

COPY go.mod ./
RUN go mod download && go mod verify

COPY . .
RUN go build -v

# Stage setup
FROM scratch

COPY --from=builder /usr/src/app/hello /

CMD ["/hello"]
