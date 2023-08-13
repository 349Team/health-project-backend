all:
	docker rm -f health-db
	cp .env.example .env
	docker-compose up -d --build
	sleep 3.0
	yarn start:dev

start:
	docker-compose up -d --build
	sleep 3.0
	yarn start:dev

all-win:
	docker rm -f health-db
	cp .env.example .env
	docker-compose up -d --build
	timeout /t 3
	yarn start:dev

start-win:
	docker-compose up -d --build
	timeout /t 3
	yarn start:dev

