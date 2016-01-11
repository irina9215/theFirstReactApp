.PHONY:	server
server:
 	browser-sync	start	--server	--files='index.html,bundle/app.css'


.PHONY:	clean
clean:
	rm	-r	boudle