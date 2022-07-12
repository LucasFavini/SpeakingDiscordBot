const { join } = require('node:path');
const { createAudioResource } = require('@discordjs/voice');
const { createAudioPlayer, NoSubscriberBehavior } = require('@discordjs/voice');
const Voice = require('@discordjs/voice')
const sleep = ms => new Promise(res => setTimeout(res, ms));

const Speak = class {   

    async joinChannel(channelData){
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
    }

    async gameStart(channelData, nAzar){
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
        let resource = createAudioResource(join(__dirname, `../gameEvents/inGame/arranca/a${nAzar}.wav`), { inlineVolume: true });
        resource.volume.setVolume(0.5);
        
        connection.subscribe(player);
        player.play(resource)
    }

    async minionsSpawn(channelData, nAzar){
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
        let resource = createAudioResource(join(__dirname, `../gameEvents/inGame/minions/ms${nAzar}.wav`), { inlineVolume: true });
        resource.volume.setVolume(0.5);
        
        connection.subscribe(player);
        player.play(resource)
    }

    async firstTurret(channelData, nAzar){
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
        let resource = createAudioResource(join(__dirname, `../gameEvents/inGame/turrets_ini/tpN${nAzar}.wav`), { inlineVolume: true });
        resource.volume.setVolume(0.5);
        connection.subscribe(player);
        player.play(resource)
    }

    async getTurret(channelData, nAzar){
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
        let resource = createAudioResource(join(__dirname, `../gameEvents/inGame/turrets_ini/tN${nAzar}.wav`), { inlineVolume: true });
        resource.volume.setVolume(0.5);
        connection.subscribe(player);
        player.play(resource)
    }

    async getIni(channelData, nAzar){
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
        let resource = createAudioResource(join(__dirname, `../gameEvents/inGame/turrets_ini/iN${nAzar}.wav`), { inlineVolume: true });
        resource.volume.setVolume(0.5);
        
        connection.subscribe(player);
        player.play(resource)
    }

    async firstBlood(channelData, nAzar){
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
        let resource = createAudioResource(join(__dirname, `../gameEvents/inGame/firstblood/fbn${nAzar}.wav`), { inlineVolume: true });
        resource.volume.setVolume(0.5);
        
        connection.subscribe(player);
        player.play(resource)
    }    

    async LosefirstBlood(channelData, nAzar){
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
        let resource = createAudioResource(join(__dirname, `../gameEvents/inGame/firstblood/fbe${nAzar}.wav`), { inlineVolume: true });
        resource.volume.setVolume(0.5);
        
        connection.subscribe(player);
        player.play(resource)
    }    

    async getDoubleKill(channelData, nAzar){
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
        let resource = createAudioResource(join(__dirname, `../gameEvents/inGame/multikills/doublekills/dk${nAzar}.wav`), { inlineVolume: true });
        resource.volume.setVolume(0.5);
        
        connection.subscribe(player);
        player.play(resource)

    }

    async getTripleKill(channelData, nAzar){
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
        let resource = createAudioResource(join(__dirname, `../gameEvents/inGame/multikills/triplekills/tk${nAzar}.wav`), { inlineVolume: true });
        resource.volume.setVolume(0.5);
        
        connection.subscribe(player);
        player.play(resource)
    }    

    
    async getQuadraKill(channelData, nAzar){
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
        let resource = createAudioResource(join(__dirname, `../gameEvents/inGame/multikills/quadrakills/qk${nAzar}.wav`), { inlineVolume: true });
        resource.volume.setVolume(0.5);
        
        connection.subscribe(player);
        player.play(resource)
    }  

    
    async getPentaKill(channelData, nAzar){
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
        let resource = createAudioResource(join(__dirname, `../gameEvents/inGame/multikills/pentakills/pk${nAzar}.wav`), { inlineVolume: true });
        resource.volume.setVolume(0.5);
        
        connection.subscribe(player);
        player.play(resource)
    }  

    async getAce(channelData, nAzar){
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
        let resource = createAudioResource(join(__dirname, `../gameEvents/inGame/multikills/ace/aceN${nAzar}.wav`), { inlineVolume: true });
        resource.volume.setVolume(0.5);
        
        connection.subscribe(player);
        player.play(resource)
    }  


    async getEnemyAce(channelData, nAzar){
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
        let resource = createAudioResource(join(__dirname, `../gameEvents/inGame/multikills/ace/aceE${nAzar}.wav`), { inlineVolume: true });
        resource.volume.setVolume(0.5);
        
        connection.subscribe(player);
        player.play(resource)
    }  

    async getEnemyAce(channelData, nAzar){
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
        let resource = createAudioResource(join(__dirname, `../gameEvents/inGame/multikills/ace/ace${nAzar}.wav`), { inlineVolume: true });
        resource.volume.setVolume(0.5);
        
        connection.subscribe(player);
        player.play(resource)
    }  

    async getDragon(channelData, nAzar){
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
        let resource = createAudioResource(join(__dirname, `../gameEvents/dragons/dn${nAzar}.wav`), { inlineVolume: true });
        resource.volume.setVolume(0.5);
        
        connection.subscribe(player);
        player.play(resource)
    }  

    async getLoseDragon(channelData, nAzar){
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
        let resource = createAudioResource(join(__dirname, `../gameEvents/dragons/de${nAzar}.wav`), { inlineVolume: true });
        resource.volume.setVolume(0.5);
        
        connection.subscribe(player);
        player.play(resource)
    }  

    async getHerald(channelData, nAzar){
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
        let resource = createAudioResource(join(__dirname, `../gameEvents/baron_heraldo/hn${nAzar}.wav`), { inlineVolume: true });
        resource.volume.setVolume(0.5);
        
        connection.subscribe(player);
        player.play(resource)
    }  

    async getLoseHerald(channelData, nAzar){
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
        let resource = createAudioResource(join(__dirname, `../gameEvents/baron_heraldo/he${nAzar}.wav`), { inlineVolume: true });
        resource.volume.setVolume(0.5);
        
        connection.subscribe(player);
        player.play(resource)
    }  

    async getBaron(channelData, nAzar){
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
        let resource = createAudioResource(join(__dirname, `../gameEvents/baron_heraldo/bn${nAzar}.wav`), { inlineVolume: true });
        resource.volume.setVolume(0.5);
        
        connection.subscribe(player);
        player.play(resource)
    }  

    async getLoseBaron(channelData, nAzar){
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
        let resource = createAudioResource(join(__dirname, `../gameEvents/baron_heraldo/be${nAzar}.wav`), { inlineVolume: true });
        resource.volume.setVolume(0.5);
        
        connection.subscribe(player);
        player.play(resource)
    }  

    async getVictory(channelData, nAzar){
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
        let resource = createAudioResource(join(__dirname, `../gameEvents/inGame/victory/v${nAzar}.wav`), { inlineVolume: true });
        resource.volume.setVolume(0.5);
        
        connection.subscribe(player);
        player.play(resource)

        await sleep(10000);
        connection.destroy();
    }  

    async getDefeat(channelData, nAzar){
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
        let resource = createAudioResource(join(__dirname, `../gameEvents/inGame/defeat/d${nAzar}.wav`), { inlineVolume: true });
        resource.volume.setVolume(0.5);
        
        connection.subscribe(player);
        player.play(resource)

        await sleep(10000);
        connection.destroy();
    }  

    async closeConnection(channelData, nAzar){
        const channel = channelData;
        const connection = Voice.joinVoiceChannel({
            channelId: channel.id,
            guildId: channel.guild.id,
            adapterCreator: channel.guild.voiceAdapterCreator,
        });
        connection.destroy();
    }  

}

module.exports = Speak;