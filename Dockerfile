FROM node.v0.10.17

ADD . /src
RUN cd /src; npm install
WORKDIR /src
ENTRYPOINT npm start
