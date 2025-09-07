FROM debian:bookworm-slim AS base
RUN apt-get update -y && \
    apt-get install -y --no-install-recommends \
      git \
      zip \
      curl \
      procps \
      ca-certificates && \
    rm -rf /var/lib/apt/lists/*

ARG USER_ID
ARG GROUP_ID
ENV HOME=/home/devel
RUN addgroup devel --gid ${GROUP_ID} && \
    adduser devel --uid ${USER_ID} --gid ${GROUP_ID} --disabled-password --comment ''

FROM base AS builder
# https://hub.docker.com/_/eclipse-temurin#using-a-different-base-image
ENV JAVA_HOME=/opt/java/openjdk
COPY --from=eclipse-temurin:8 $JAVA_HOME $JAVA_HOME
ENV PATH="${JAVA_HOME}/bin:${PATH}"

USER devel
ENV NVS_HOME="$HOME/.nvs"
ENV PATH="$PATH:$NVS_HOME"

RUN git clone https://github.com/jasongin/nvs "$NVS_HOME" && \
    . nvs.sh install
RUN nvs add 8

RUN mkdir /home/devel/.sbt /home/devel/.ivy2 && \
    chown -R ${USER_ID}:${GROUP_ID} /home/devel/.sbt /home/devel/.ivy2

WORKDIR /home/devel/app

FROM nginx:alpine AS nginx
RUN sed -i '/index/s/index  index\.html index\.htm;/index  looty.html looty-dev.html;/g' /etc/nginx/conf.d/default.conf
