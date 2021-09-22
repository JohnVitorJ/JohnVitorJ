include .env

.PHONY: up
up:
	docker-compose up --build -d
	
.PHONY: down
down:
	docker-compose down
	
.PHONY: logs
logs:
	docker-compose logs -f