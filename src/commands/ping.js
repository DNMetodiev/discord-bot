const { SlashCommandBuilder } = require('discord.js')

const data = new SlashCommandBuilder()
  .setName('ping')
  .setDescription('Replies wtih Pong!');

async function execute(interaction) {
  await interaction.reply('Pong!')
}

module.exports = {
  data,
  execute,
}