# Discord Bot for MemberLeave action

This bot has been originally created by [@theprogrammer2](https://github.com/theprogrammer2).

Docker Hub: [https://hub.docker.com/r/nicof2000/discord-memberleave/](https://hub.docker.com/r/nicof2000/discord-memberleave/)

You can deploy this Discord bot using docker-compose:
```
version: '3'
services:
  bot:
    image: nicof2000/discord-memberleave
    container_name: root_memberleave-bot_1
    restart: always
    environment:
      TOKEN: discord_bot_token
      CHANNEL_ID: channel_id
```

After you created the `docker-compose.yml` you can start it with:

```
$ docker-compose up bot
```
