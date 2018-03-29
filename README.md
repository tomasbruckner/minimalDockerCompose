# Minimal Docker Compose

This is a super simple example how to connect two containers using Docker Compose. We will use Node.js container and MongoDB container.

I find out that a lot of tutorials are unnecessary complicated or depracated. I like to keep things simple when trying to understand the basics of a technology, that's why I made this example.

In `docker-compose.yml` there is `depends_on` in the definition of Node.js container. In most tutorials I have found on this topic they use `links`, but this is now deprecated (please don't use it), because *docker-compose* creates network by default now. So you don't have to use IP address, but can use name of the service (as defined in *docker-compose.yml*) instead.

Have fun exploring docker-compose!

## Get started

Run the command:

```
docker-compose up
```

Now you can go to http://localhost:3333 and should see `some data from db`.


