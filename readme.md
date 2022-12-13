#MERN stack docker setup for local environment

## Run all containers in single command
Just execute following command to run the docker and that's it

```bash
docker-compose up
```
To shoutdown the docker use following command

```bash
docker-compose down
```

## Run individual container
1. Create a image
    ```bash
    docker build -t <docker-image-name-you-want> .
    ```
2. Run docker image inside the container for mac/linux
    ```bash
    docker run --rm --name <container-name-you-want> -e WATCHPACK_POLLING=true -it -p 3000:3000 -v $(pwd):/app <your-docker-image-name>
    ```
3. Run docker image inside the container for windows
     ```bash
    docker run --rm --name <container-name-you-want> -e WATCHPACK_POLLING=true -it -p 3000:3000 -v <absolute-path-or-%cd%>:/app <your-docker-image-name>
    ```
4. To check running containers
    ```bash
    docker ps
    ```
5. To stop running containers
    ```bash
    docker stop <container-id/name>
    ```  

5. To see the list of images
    ```bash
    docker image ls
    ``` 
##Full forms
```bash
-p => Port
-it => interactive mode
-d => detached mode

```

