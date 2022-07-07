const { join } = require('node:path');
const { createAudioResource } = require('@discordjs/voice');
const { createAudioPlayer, NoSubscriberBehavior } = require('@discordjs/voice');
const Voice = require('@discordjs/voice')
const reproduceVoice = {

    async getVoz(channelData){
        const channel = channelData;
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
        let resource = createAudioResource(join(__dirname, `../gameEvents/inGame/dkill.wav`), { inlineVolume: true });
        resource.volume.setVolume(0.5);
        
        connection.subscribe(player);
        player.play(resource)
    }
}
module.exports = reproduceVoice;