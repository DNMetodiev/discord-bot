const { SlashCommandBuilder } = require('discord.js')

const data = new SlashCommandBuilder()
  .setName('forecast')
  .setDescription('Replies with the weather forecast')
  .addStringOption((option) => {
    option
      .setName('location')
      .setDescription('The location can be a city, zip/postal code, or a lantitude and logitude')
  });