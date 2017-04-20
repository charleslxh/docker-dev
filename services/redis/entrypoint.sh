#!/bin/sh

REDIS_SERVER_CONF="/etc/redis/master/redis.conf"
REDIS_SENTINEL_CONF="/etc/redis/master/sentinel.conf"

run() {
  # Start redis server.
  sed -i "s/\$MASTER/$MASTER/g" $REDIS_SERVER_CONF
  sed -i "s/\$PASSWORD/$PASSWORD/g" $REDIS_SERVER_CONF
  redis-server $REDIS_SERVER_CONF

  # Start redis sentinel.
  sed -i "s/\$REPLICATION_NAME/$REPLICATION_NAME/g" $REDIS_SENTINEL_CONF
  sed -i "s/\$MASTER_HOST/$MASTER_HOST/g" $REDIS_SENTINEL_CONF
  sed -i "s/\$MASTER_PORT/$MASTER_PORT/g" $REDIS_SENTINEL_CONF
  sed -i "s/\$QUORUN/$QUORUN/g" $REDIS_SENTINEL_CONF
  sed -i "s/\$PASSWORD/$PASSWORD/g" $REDIS_SENTINEL_CONF

  redis-sentinel $REDIS_SENTINEL_CONF
}

runMaster() {
  REDIS_SERVER_CONF="/etc/redis/master/redis.conf"
  REDIS_SENTINEL_CONF="/etc/redis/master/sentinel.conf"
  run
}

runSlave() {
  REDIS_SERVER_CONF="/etc/redis/slave/redis.conf"
  REDIS_SENTINEL_CONF="/etc/redis/slave/sentinel.conf"
  run
}

case "$ROLE" in
  master)
    runMaster
    ;;
  start)
    runSlave
    ;;
  *)
    echo "Redis role is not specified, start master by default."
    runMaster
    ;;
esac
