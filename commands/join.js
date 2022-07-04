const { SlashCommandBuilder } = require('@discordjs/builders');
const { joinVoiceChannel } = require('@discordjs/voice');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('join')
		.setDescription('Une al canal de voz'),
	async execute(interaction) {
		const channel = interaction.member.voice.channel
		if (!channel) return interaction.reply('Unite primero a un canal de voz')
		const connection = joinVoiceChannel({
			channelId: channel.id,
			guildId: channel.guild.id,
			adapterCreator: channel.guild.voiceAdapterCreator,
		});
		interaction.reply('Bueno a ver que hacen mancos')
	},
};
