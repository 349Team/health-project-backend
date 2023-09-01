all:
	docker rm -f health-db
	cp .env.example .env
	docker-compose up -d --build
	sleep 3.0
	yarn start:dev

start:
	docker-compose up -d --build
	timeout 3
	yarn start:dev