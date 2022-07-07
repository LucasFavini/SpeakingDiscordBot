const { SlashCommandBuilder } = require('@discordjs/builders');
const LolData = require('../models/LolData');
const myHttp = require('../utils/myHttp');
const ReproduceVoice = require('../utils/reproduceVoice');
const { getVoz } = require('../utils/reproduceVoice');
const Speak = require('../utils/Speak');

var voiceChannel;
const client = new myHttp();
const lolData = new LolData();
const marianoCloss = new Speak();


module.exports = {
  data: new SlashCommandBuilder()
    .setName('startgame')
    .setDescription('Empieza a narrar'),
  async execute(interaction) {
    const channel = interaction.member.voice.channel
    voiceChannel = channel
    if (!channel) {
      return interaction.reply('Unite primero a un canal de voz')
    } else {
      interaction.reply('Escuchando Partida')

      //inicializando variables de uso continuo
      const sleep = ms => new Promise(res => setTimeout(res, ms));      


      var contador = 0;
      var startgame = true;

      (async function () {
        while (true) {
          await sleep(1000);
          const num = function randomInRange(min, max){ return Math.floor(Math.random() * (max - min + 1) + min);}
          const gameData = await client.getInfo();
          const events = await client.getEvents();
          const myTeam = lolData.getMyTeam(gameData.data.allPlayers)

          const currentEvents = lolData.currentEvents(events)
           currentEvents.forEach((res) => {

            let lastEvent = currentEvents.length - 1

            if (res.EventName === 'GameStart' && startgame === true) {
              marianoCloss.gameStart(voiceChannel, num(1,2));
              contador = res.EventID
              startgame = false
            }

            if (res.EventName === 'MinionsSpawning' && res.EventID == lastEvent && res.EventID != contador) {
              marianoCloss.minionsSpawn(voiceChannel, num(1,2));
              contador = res.EventID
            }

            if (res.EventName === 'FirstBlood' && res.EventID == lastEvent && res.EventID != contador && myTeam.includes(res.Recipient)) {
                marianoCloss.firstBlood(voiceChannel, num(1,2));
              contador = res.EventID    
            }
            if (res.EventName === 'FirstBlood' && res.EventID == lastEvent && res.EventID != contador && !myTeam.includes(res.Recipient)) {
              marianoCloss.LosefirstBlood(voiceChannel, num(1,2));
            contador = res.EventID    
          }

            if (res.EventName === 'Multikill' && res.KillStreak >= 2 && res.EventID == lastEvent && res.EventID != contador 
            && myTeam.includes(res.KillerName)) {     

              if(res.KillStreak === 2){
                marianoCloss.getDoubleKill(voiceChannel)
              }
              else if (res.KillStreak===3) {
                marianoCloss.getTripleKill(voiceChannel)
              }
              else if(res.KillStreak === 4){
                marianoCloss.getQuadraKill(voiceChannel)
              }
              else if(res.KillStreak === 5){
                marianoCloss.getPentaKill(voiceChannel)
              }
              contador = res.EventID
            }

            if (res.EventName === 'Ace' && res.EventID == lastEvent && res.EventID != contador && !myTeam.includes(res.Recipient)) {
              marianoCloss.getEnemyAce(voiceChannel);
            contador = res.EventID    
          }

            if (res.EventName === 'DragonKill' && res.EventID == lastEvent && res.EventID != contador && myTeam.includes(res.KillerName)) {     
              marianoCloss.getDragon(voiceChannel)
              contador = res.EventID
            }

            if (res.EventName === 'DragonKill' && res.EventID == lastEvent && res.EventID != contador && !myTeam.includes(res.KillerName)) {     
              marianoCloss.getLoseDragon(voiceChannel)
              contador = res.EventID
            }

            
            if (res.EventName === 'HeraldKill' && res.EventID == lastEvent && res.EventID != contador && myTeam.includes(res.KillerName)) {     
              marianoCloss.getHerald(voiceChannel)
              contador = res.EventID
            }

            if (res.EventName === 'HeraldKill' && res.EventID == lastEvent && res.EventID != contador && !myTeam.includes(res.KillerName)) {     
              marianoCloss.getLoseHerald(voiceChannel)
              contador = res.EventID
            }

            if (res.EventName === 'BaronKill' && res.EventID == lastEvent && res.EventID != contador && myTeam.includes(res.KillerName)) {     
              marianoCloss.getBaron(voiceChannel)
              contador = res.EventID
            }

            if (res.EventName === 'BaronKill' && res.EventID == lastEvent && res.EventID != contador && !myTeam.includes(res.KillerName)) {     
              marianoCloss.getLoseBaron(voiceChannel)
              contador = res.EventID
            }

            if (res.EventName === 'GameEnd' && res.Result ==='Win' &&res.EventID == lastEvent && res.EventID != contador) {     
              marianoCloss.getVictory(voiceChannel)
              contador = res.EventID
            }

            if (res.EventName === 'GameEnd' && res.Result ==='Lose' &&res.EventID == lastEvent && res.EventID != contador) {     
              marianoCloss.getDefeat(voiceChannel)
              contador = res.EventID
            }
            

          });
        }
      })();
    }
  },
};
