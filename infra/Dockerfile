FROM hashicorp/terraform:1.13.4

RUN apk update && \
    apk add --no-cache tzdata && \
    rm -rf /var/cache/apk/*

RUN ln -s /usr/share/zoneinfo/Asia/Tokyo /etc/localtime
RUN ls -1 /usr/share/zoneinfo/ | grep -vx Asia | xargs -I {} rm -r /usr/share/zoneinfo/{}

RUN adduser -D terraform

WORKDIR /home/terraform/infra/envs

ENTRYPOINT [ "tail", "-f", "/dev/null" ]