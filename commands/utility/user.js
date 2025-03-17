const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('user')
		.setDescription('Mostra informações do usuário que rodou o comando.'),
	async execute(interaction) {
		await interaction.reply(`O comando foi executado por ${interaction.user.username}, que entrou em ${interaction.member.joinedAt}.`);
	},
};