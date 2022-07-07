const { SlashCommandBuilder } = require('@discordjs/builders');
const Voice = require('@discordjs/voice')
const { join } = require('node:path');
const { createAudioResource } = require('@discordjs/voice');
const { createAudioPlayer, NoSubscriberBehavior } = require('@discordjs/voice');


const createCommand = (commandName, commandDesc) => {
    const obj = {
        data: new SlashCommandBuilder()
            .setName(`${commandName}`)
            .setDescription(`${commandDesc}`),            
    };
    return obj.data;
};

async function execute(interaction) {
    const channel = interaction.member.voice.channel
    const connection = Voice.joinVoiceChannel({
        channelId: channel.id,
        guildId: channel.guild.id,
        adapterCreator: channel.guild.voiceAdapterCreator,
    });
    const player = createAudioPlayer({
        behaviors: {
            noSubscriber: NoSubscriberBehavior.Pause,
        },
    });
    let resource = createAudioResource(join(__dirname, `../sounds/${interaction.commandName}.wav`), { inlineVolume: true });
    resource.volume.setVolume(0.5);

    connection.subscribe(player);
    player.play(resource)
    interaction.reply(`${interaction.user.username} dice...`);
  }
  
module.exports = {
    createCommand,
    execute
}
