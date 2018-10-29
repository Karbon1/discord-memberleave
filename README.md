# Discord Bot for MemberLeave action

This bot has been originally created by [@theprogrammer2](https://github.com/theprogrammer2).

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
