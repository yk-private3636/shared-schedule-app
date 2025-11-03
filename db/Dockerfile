FROM postgres:17.6 AS dev

ENV TZ=Asia/Tokyo

COPY ./init/test_db_setup.sql /docker-entrypoint-initdb.d