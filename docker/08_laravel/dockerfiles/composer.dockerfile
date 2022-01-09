FROM composer:latest

ENV PHP_ROOT /var/www/html

WORKDIR $PHP_ROOT

RUN addgroup -g 1000 laravel \
    && adduser -u 1000 -G laravel -s /bin/sh -D laravel \
    && mkdir -p $PHP_ROOT

USER laravel:laravel

ENTRYPOINT ["composer", "--ignore-platform-reqs"]
