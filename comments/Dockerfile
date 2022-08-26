FROM alpine

RUN apk update && apk upgrade && apk add --no-cache --update nodejs npm

WORKDIR /app

COPY ./package.json ./

RUN npm install

COPY ./ ./

CMD [ "npm", "start" ]