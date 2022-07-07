const { join } = require('node:path');
const { createAudioResource } = require('@discordjs/voice');
const { createAudioPlayer, NoSubscriberBehavior } = require('@discordjs/voice');
const Voice = require('@discordjs/voice')

const Speak = class {   

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
        console.log(nAzar)

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
        console.log(nAzar)

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

    async getDoubleKill(channelData){
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
        let resource = createAudioResource(join(__dirname, `../gameEvents/inGame/multikills/doublekills/dk1.wav`), { inlineVolume: true });
        resource.volume.setVolume(0.5);
        
        connection.subscribe(player);
        player.play(resource)

    }

    async getTripleKill(channelData){
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
        let resource = createAudioResource(join(__dirname, `../gameEvents/inGame/multikills/triplekills/tk1.wav`), { inlineVolume: true });
        resource.volume.setVolume(0.5);
        
        connection.subscribe(player);
        player.play(resource)
    }    

    
    async getQuadraKill(channelData){
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
        let resource = createAudioResource(join(__dirname, `../gameEvents/inGame/multikills/quadrakills/qk1.wav`), { inlineVolume: true });
        resource.volume.setVolume(0.5);
        
        connection.subscribe(player);
        player.play(resource)
    }  

    
    async getPentaKill(channelData){
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
        let resource = createAudioResource(join(__dirname, `../gameEvents/inGame/multikills/pentakills/pk1.wav`), { inlineVolume: true });
        resource.volume.setVolume(0.5);
        
        connection.subscribe(player);
        player.play(resource)
    }  

    async getEnemyAce(channelData){
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
        let resource = createAudioResource(join(__dirname, `../gameEvents/inGame/multikills/ace/ace1.wav`), { inlineVolume: true });
        resource.volume.setVolume(0.5);
        
        connection.subscribe(player);
        player.play(resource)
    }  

    async getDragon(channelData){
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
        let resource = createAudioResource(join(__dirname, `../gameEvents/dragons/dn1.wav`), { inlineVolume: true });
        resource.volume.setVolume(0.5);
        
        connection.subscribe(player);
        player.play(resource)
    }  

    async getLoseDragon(channelData){
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
        let resource = createAudioResource(join(__dirname, `../gameEvents/dragons/de1.wav`), { inlineVolume: true });
        resource.volume.setVolume(0.5);
        
        connection.subscribe(player);
        player.play(resource)
    }  

    async getHerald(channelData){
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
        let resource = createAudioResource(join(__dirname, `../gameEvents/baron_heraldo/hn1.wav`), { inlineVolume: true });
        resource.volume.setVolume(0.5);
        
        connection.subscribe(player);
        player.play(resource)
    }  

    async getLoseHerald(channelData){
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
        let resource = createAudioResource(join(__dirname, `../gameEvents/baron_heraldo/he1.wav`), { inlineVolume: true });
        resource.volume.setVolume(0.5);
        
        connection.subscribe(player);
        player.play(resource)
    }  

    async getBaron(channelData){
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
        let resource = createAudioResource(join(__dirname, `../gameEvents/baron_heraldo/bn1.wav`), { inlineVolume: true });
        resource.volume.setVolume(0.5);
        
        connection.subscribe(player);
        player.play(resource)
    }  

    async getLoseBaron(channelData){
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
        let resource = createAudioResource(join(__dirname, `../gameEvents/baron_heraldo/be1.wav`), { inlineVolume: true });
        resource.volume.setVolume(0.5);
        
        connection.subscribe(player);
        player.play(resource)
    }  

    async getVictory(channelData){
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
        let resource = createAudioResource(join(__dirname, `../gameEvents/inGame/victory/v1.wav`), { inlineVolume: true });
        resource.volume.setVolume(0.5);
        
        connection.subscribe(player);
        player.play(resource)
    }  

    async getDefeat(channelData){
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
        let resource = createAudioResource(join(__dirname, `../gameEvents/inGame/defeat/d1.wav`), { inlineVolume: true });
        resource.volume.setVolume(0.5);
        
        connection.subscribe(player);
        player.play(resource)
    }  




}

module.exports = Speak;