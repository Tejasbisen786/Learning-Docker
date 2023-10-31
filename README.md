# Learning-Docker
<div>
**Docker**

- Don't need to set envirement for each and every machine once you setup env with the help of docker it will work for same for all machine who wanted to run the program in diffent machine.
- every container consist own os

- need Docker CLI AND GUi
daemon -> create and pull everthing does
desktop: for visulization purpose 

<div>
# Docker COmmand*

- docker -v : cheack Version
- docker run -it ubuntu : to run container and    create ubuntu os in container
 first cheack ubntu locally present or not /
 otherwise pull and downloaded container of unbutu from hub.docker.com like github for container
- whoami : to cheak where you're

inside the container whatever you want to do you can do this

 * what is images and Container? 
 - images run on container:
 - images it's like os :
 - container help to run those image file on it

 * ex : 
 docker run -it ubuntu -1
  mkdir data-1
  ls

 dcoker run -it ubuntu -2
   mkdir data-1
  ls

  each container has own data and those data can't not shARE with each other. but image can be same for both container.

  custom image 
   -ubuntu
   -Node
   -mangodb
   -reddis



# docker commands

 - docker container ls : to listing the ongoing running container
 - docker container ls -all : listing all running container 
 - docker container ls -a : listing container with container Id and rest information associated with the containers
 - docker stop < container_name> : stop the container
 - docker run < container_name> : to run the container

docker exec < contaoner_name> ls : connected with bash 
docker exec -it < container_name > bash : help to attached with the bash

docker images : to listing all the images present on local machine

docker run -it node : To download the node js 

# port mapping

- server need port PORT:8080
on local terminal you can't access port from contaianer cause it run on container 

- To acces the [port]
 which run on container if ypu have to acess on the local terminal so you
have to EXPOSED SERVERIMAGE " that concept we call it port mapping
 - docker run -it mailhog PORT:1025
 -p : repesent the port mapping inside the command
 - port mapping command:
  docker run -it -p  1024:1024 mailhog/mailhog

 6000  [ mapped with 6000 to run in local ] : 9000[container port ]

* To pass the environment variable *
docker run -it -p -e key=value -e key=value   1024:1024 mailhog/mailhog

-e : reprsent environment varible with key and value pair

# Dockerization NODE js application 

- Dockerfile - Write step pick base os

<a> https://hub.docker.com/repository/docker/tejasbisen/tejasnode-app/general </a>








