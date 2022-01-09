FROM php:7.4-fpm-alpine

RUN docker-php-ext-install pdo pdo_mysql

ENV PHP_ROOT /var/www/html

# RUN addgroup -g 1000 laravel \
#     && adduser -u 1000 -G laravel -s /bin/sh -D laravel \
#     && mkdir -p $PHP_ROOT

WORKDIR $PHP_ROOT

COPY --chown=www-data:www-data ["./src", "./"]

# RUN chmod -R 755 $PHP_ROOT

# USER laravel:laravel