# syntax=docker/dockerfile:1.7-labs

ARG BASE_IMAGE=node:22.14.0-alpine

# 開発環境
FROM ${BASE_IMAGE} AS dev

WORKDIR /var/www/html/api
ENV TZ=Asia/Tokyo

RUN npm i -g @nestjs/cli

COPY ./entry_point_dev.sh /usr/local/bin/entry_point.sh

RUN chmod +x /usr/local/bin/entry_point.sh

ENTRYPOINT [ "entry_point.sh" ]


# CI環境
FROM ${BASE_IMAGE} AS testing

WORKDIR /var/www/html/api
ENV TZ=Asia/Tokyo

RUN npm i -g @nestjs/cli

COPY ./app/package*.json ./

RUN npm ci

COPY ./app ./

RUN chmod +x ./testing.sh

ENTRYPOINT [ "./testing.sh" ]


# ビルド環境
FROM ${BASE_IMAGE} AS build

WORKDIR /tmp
ENV TZ=Asia/Tokyo
ENV NODE_ENV=production

# example: nest generate resource(nest g res)
RUN npm i -g @nestjs/cli

COPY ./app/package*.json ./

RUN npm ci

COPY ./app ./

RUN npm run build


# 本番環境
FROM ${BASE_IMAGE} AS prod

EXPOSE 8080
WORKDIR /var/www/html/api
ENV TZ=Asia/Tokyo
ENV NODE_ENV=production

COPY --from=build --exclude=src --exclude=test --exclude=node-compile-cache --exclude=*.json --exclude=*.mjs --exclude=*.md* --exclude=.* /tmp ./

ENTRYPOINT [ "node", "./dist/src/main" ]