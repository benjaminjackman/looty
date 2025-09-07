# https://clarkgrubb.com/makefile-style-guide#phony-targets

DOCKER_BUILD_VARS := COMPOSE_DOCKER_CLI_BUILD=1 DOCKER_BUILDKIT=1
COMPOSE := $(DOCKER_BUILD_VARS) docker compose

.PHONY: docker build-dev build-prod start restart stop destroy bash clean

.env:
	cp .env.dist .env

docker: .env
	${COMPOSE} pull --ignore-pull-failures --include-deps
	${COMPOSE} build --no-cache

build-dev: clean
	${COMPOSE} run --rm builder bash -c "bin/sbt clean && bin/sbt fastOptJS"
	@make restart

build-prod: clean
	${COMPOSE} run --rm builder bash -c "bin/sbt clean && bin/sbt fullOptJS"
	@make restart

start:
	${COMPOSE} up --detach nginx

restart:
	${COMPOSE} restart nginx

stop:
	${COMPOSE} down

destroy: stop
	${COMPOSE} rm --force --stop --volumes

bash:
	${COMPOSE} run --rm builder bash

clean:
	rm -rf ./build ./buildffsrc ./looty/target ./project/project/target ./project/target ./target
