FROM alpine AS build

ENV CI=true

ENV WDS_SOCKET_PORT=0

ENV PORT=3000

RUN apk update && apk upgrade && apk add --no-cache --update nodejs npm

WORKDIR /app

COPY ./package.json ./

RUN npm install

COPY ./ ./

RUN npm run build

FROM nginx:stable-alpine AS main

COPY --from=build /app/build/ /usr/share/nginx/html