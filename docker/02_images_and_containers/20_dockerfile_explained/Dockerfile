# Typically start with FROM
# This allows to build your image based on another image
# This is where you put some stack, tool, etc
# This is telling Docker: "Hey! In my own image, I want to start by pulling in a node image!"
FROM node

# By default, all commands listed on the RUN line, will be executed in the
# [cont] working directory of the container [. 'root folder']
# The WORKDIR command tells docker where commands should be executed
WORKDIR /app

# This insures that whenever we change the dependencies of our code,
# [cont] and not the code itself, npm install will be executed.
# Otherwise, every time we change the code, npm install would be executed.
COPY package.json /app

RUN npm install

# Now, we tell Docker which files that live in our local machine should go into the image
# The first {argument}, which in this case is a dot, tells Docker to use all files and folders
# [cont] in the same directory of the Dockerfile [HOST FILE SYSTEM]
# Each container, built based on an image, has its own internal file system,
# [cont] which is totally detached from our file system in our machine
# It's highly recommended to not use the root folder of the container [.],
# [cont] but some subfolder
COPY . ./app

# Here we list essential commands that must be run as a first step
# In this case, npm install is essential to install all packages
# [cont] in the node container
# RUN npm install [substitued by line 16]

# As the container is a detached system from our system, by running RUN and CMD
# [cont] doesn't garantee that the container has connection to our system
# This way, we need to let Docker know that when this container is started
# [cont] we want to expose a certain port to our local system
# NOTE: this command is optional, since it's possible to expose ports with
# [cont] 'docker run' command in the terminal line
EXPOSE 80

# CMD instruction will be executed only when a container is started based on
#[cont] on the built image. All instructions before CMD are used to construct the image
# The container adds a new extra layer on top of the image, which is the
# [cont] running application started by the CMD command
CMD ["node", "server.js"]
