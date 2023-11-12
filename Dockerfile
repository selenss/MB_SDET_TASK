FROM cypress/included:latest

WORKDIR /e2e-docker

COPY ./package.json .
COPY ./package-lock.json .
COPY ./cypress.config.js .
COPY ./cypress ./cypress
RUN npm install

ENTRYPOINT [ "npm", "run" ]