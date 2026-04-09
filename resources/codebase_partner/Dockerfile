FROM ubuntu:22.04

RUN apt update -y
RUN apt install nodejs unzip wget npm mysql-server -y

COPY resources /home/ubuntu/codebase_partner

WORKDIR /home/ubuntu/codebase_partner

RUN npm cache clean --force && npm install aws aws-sdk

ENV APP_PORT=80

EXPOSE 80

CMD ["npm", "start"]
