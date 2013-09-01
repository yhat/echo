FROM node.v0.10.17

ADD . /src
RUN cd /src; npm install
WORKDIR /src
EXPOSE 3000
ENTRYPOINT npm start
