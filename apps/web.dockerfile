ARG BASE_IMAGE=node:22.14.0-alpine

# 開発環境
FROM ${BASE_IMAGE} AS local

WORKDIR /var/www/html/apps/web/app

ENV TZ=Asia/Tokyo

COPY ./entry_point_dev.sh /usr/local/bin/entry_point.sh

RUN chmod +x /usr/local/bin/entry_point.sh

ENTRYPOINT [ "entry_point.sh", "web", "npm run watch & npm run dev" ]


# CI環境
FROM ${BASE_IMAGE} AS testing

WORKDIR /var/www/html/web
ENV TZ=Asia/Tokyo

COPY ./web/app ./web/app

COPY ./package*.json ./

RUN npm ci -w web

# TODO: 追加予定(web-testing.sh)
RUN chmod +x ./testing.sh

ENTRYPOINT [ "./testing.sh" ]