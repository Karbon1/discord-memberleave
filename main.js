const Discord = require('discord.js');
const client = new Discord.Client();
const channelId = process.env.CHANNEL_ID

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('guildMemberRemove', member => {
  try {
    client.channels.get(channelId).send(member.user.tag + " left the server!");
  } catch (e) {
    console.log("Was not able to find a channel with the id " + channelId + "!");
  }
});

client.login(process.env.TOKEN);
