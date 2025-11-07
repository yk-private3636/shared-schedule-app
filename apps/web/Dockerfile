ARG BASE_IMAGE=node:22.14.0-alpine

# 開発環境
FROM ${BASE_IMAGE} AS dev

WORKDIR /var/www/html/apps/web/app

ENV TZ=Asia/Tokyo

COPY ../entry_point_dev.sh /usr/local/bin/entry_point.sh

RUN chmod +x /usr/local/bin/entry_point.sh

ENTRYPOINT [ "entry_point.sh", "web", "npm run dev" ]


# CI環境
FROM ${BASE_IMAGE} AS testing

WORKDIR /var/www/html/web
ENV TZ=Asia/Tokyo

COPY ./app/package*.json ./

RUN npm ci

COPY ./app ./

RUN chmod +x ./testing.sh

ENTRYPOINT [ "./testing.sh" ]


# ビルド環境
# FROM ${BASE_IMAGE} AS build

# WORKDIR /tmp
# ENV NODE_ENV=production

# COPY ./app/package*.json ./

# RUN npm ci

# COPY ./app ./

# RUN npm run build

# RUN cp -r /tmp/.next/static /tmp/.next/standalone/.next/


# 本番環境
# FROM ${BASE_IMAGE} AS prod

# EXPOSE 3000
# WORKDIR /var/www/html/web
# ENV TZ=Asia/Tokyo
# ENV NODE_ENV=production

# COPY --from=build /tmp/.next /var/www/html/web/.next

# ENTRYPOINT [ "node", ".next/standalone/server.js" ]