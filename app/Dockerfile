FROM node:6.10.2

RUN mv /etc/apt/sources.list /etc/apt/sources.list_backup

RUN echo " \
    deb http://mirrors.cloud.aliyuncs.com/ubuntu/ trusty main restricted universe multiverse \n \
    deb http://mirrors.cloud.aliyuncs.com/ubuntu/ trusty-security main restricted universe multiverse \n \
    deb http://mirrors.cloud.aliyuncs.com/ubuntu/ trusty-updates main restricted universe multiverse \n \
    deb http://mirrors.cloud.aliyuncs.com/ubuntu/ trusty-proposed main restricted universe multiverse \n \
    deb http://mirrors.cloud.aliyuncs.com/ubuntu/ trusty-backports main restricted universe multiverse \n \

    deb http://mirrors.aliyun.com/ubuntu/ trusty main restricted universe multiverse \n \
    deb http://mirrors.aliyun.com/ubuntu/ trusty-security main restricted universe multiverse \n \
    deb http://mirrors.aliyun.com/ubuntu/ trusty-updates main restricted universe multiverse \n \
    deb http://mirrors.aliyun.com/ubuntu/ trusty-proposed main restricted universe multiverse \n \
    deb http://mirrors.aliyun.com/ubuntu/ trusty-backports main restricted universe multiverse \n \
  " > /etc/apt/sources.list

RUN apt-get update -qq && \
    apt-get install -y --force-yes build-essential libpq-dev libkrb5-dev && \
    rm -rf /var/lib/apt/lists/*

WORKDIR app

RUN rm /etc/localtime && \
    ln -s /usr/share/zoneinfo/Australia/Sydney/etc/localtime

ENV RUNNING_DOCKER true

EXPOSE 3000
CMD [ "npm", "start" ]
