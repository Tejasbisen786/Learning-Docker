# Docker Netwroking
 - bridge
 - host
  pulling image busy box
   - docker run -it busybox
    connection between host and your local machine called as bridge connection for enstablshing connection
- Docker Nework ls - lisitng network
- docker run -it --network=host busybox
- docker network inspect bridge : getting info related bridge network

- if bridge ntwoked used no need to mension -p flag ( port mapping )  cause both local machine and docker container connected with the same network

# Custom Network 

docker network create -d bridge youtube


docker run -it --network=youtube --name tusharbisen busybox

# Volume Mounting

- container has consist memeory 
- To prevent the data loss when container is deleted 

- volume mounting help to store the data even if container is deleted

docker volume ls : lisitng the volume

- * Creating own volume *

docker crete volume

# Effcient Caching layers
 - order matters for optimizing whole pipeline
 for an  container where image file run 

# Docker Multi-Stage Builds

  - To reduce the size of image so that it reduces the uneecesaru executing time 

