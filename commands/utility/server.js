const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('server')
		.setDescription('Mostra informações sobre o servidor.'),
	async execute(interaction) {
		await interaction.reply(`O nome do servidor é ${interaction.guild.name} e le tem ${interaction.guild.memberCount} membros.`);
	},
};