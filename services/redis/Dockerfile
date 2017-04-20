FROM redis

RUN mkdir -p /var/redis

ADD master /etc/redis/master
ADD slave /etc/redis/slave

ADD entrypoint.sh /

RUN chmod +x /entrypoint.sh

ENTRYPOINT ["/entrypoint.sh"]

EXPOSE 6379
EXPOSE 26379
