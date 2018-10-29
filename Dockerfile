FROM node:latest

ENV TOKEN discord_bot_token
ENV CHANNEL_ID 444884680852897794

RUN mkdir /app/
WORKDIR /app/

COPY main.js /app/
COPY package.json /app/

RUN npm install

CMD node /app/main.js
