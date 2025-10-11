FROM node:22.14.0-alpine AS dev

WORKDIR /var/www/html/web

ENV TZ=Asia/Tokyo

COPY ./entry_point_dev.sh /usr/local/bin/entry_point.sh

RUN chmod +x /usr/local/bin/entry_point.sh

ENTRYPOINT [ "entry_point.sh" ]