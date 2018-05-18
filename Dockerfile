FROM node:8-slim

ADD package.json yarn.lock /tmp/
RUN cd /tmp && yarn install
RUN mkdir -p /opt/app && cp -a /tmp/node_modules /opt/app/

ADD package.json gulpfile.js tsconfig.json /opt/app/
ADD src /opt/app/src/
ADD test /opt/app/test/
ADD tasks /opt/app/tasks/

WORKDIR /opt/app

RUN yarn build

EXPOSE 3010

CMD ["yarn", "dev"]

