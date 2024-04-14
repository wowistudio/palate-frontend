HOST=fluwide
DB_PORT=3306
DB_TUNNEL=$(DB_PORT):localhost:$(DB_PORT)
API_PORT=9000:localhost:9000


db-tunnel:
	ssh -f -N -L $(DB_TUNNEL) $(HOST)
db-tunnel-kill:
	kill -9 $(shell ps aux | grep 'ssh -f -N -L $(DB_TUNNEL) $(HOST)' | grep -v grep | awk '{print $$2}')
db-shell:
	psql postgresql://postgres:password@localhost:3306/palate

api-tunnel:
	ssh -f -N -L $(API_PORT) $(HOST)
api-tunnel-kill:
	kill -9 $(shell ps aux | grep 'ssh -f -N -L $(API_PORT) $(HOST)' | grep -v grep | awk '{print $$2}')

