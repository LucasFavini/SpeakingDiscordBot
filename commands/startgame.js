const { SlashCommandBuilder } = require('@discordjs/builders');
const LolData = require('../models/LolData');
const myHttp = require('../utils/myHttp');
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
      interaction.reply('...Escuchando Partida al terminar me voy crack')
      marianoCloss.joinChannel(voiceChannel)

      //inicializando variables de uso continuo
      const sleep = ms => new Promise(res => setTimeout(res, ms));
      var lobbyEnded = 0
      var listening = 0;
      var startgame = true;
      var contador = 0;
      var stopSearching = true;
      //----------------

      while (lobbyEnded === 0) {
        let status = await client.isGameOn()
        if (!status) {
          console.log('Dejo de buscar partida')
          marianoCloss.closeConnection(voiceChannel)
          break
        }
        else {
          lobbyEnded = 1
          if (lobbyEnded === 1) {
            (async function () {
              while (listening === 0) {
                try {
                  await sleep(1000);

                  const num = function randomInRange(min, max) { return Math.floor(Math.random() * (max - min + 1) + min); }
                  const gameData = await client.getInfo();
                  const events = await client.getEvents();
                  const myTeam = lolData.getMyTeam(gameData.data.allPlayers)


                  const currentEvents = lolData.currentEvents(events)
                  currentEvents.forEach((res) => {
                    let lastEvent = currentEvents.length - 1

                    if (res.EventName === 'GameStart' && startgame === true) {
                      marianoCloss.gameStart(voiceChannel, num(1, 6));
                      contador = res.EventID
                      startgame = false
                    }

                    if (res.EventName === 'MinionsSpawning' && res.EventID == lastEvent && res.EventID != contador) {
                      marianoCloss.minionsSpawn(voiceChannel, num(1, 6));
                      contador = res.EventID
                    }


                    if (res.EventName === 'FirstBrick' && res.EventID == lastEvent && res.EventID != contador) {
                      if (myTeam.includes(res.KillerName)) {
                        marianoCloss.firstTurret(voiceChannel, num(1, 2));
                        contador = res.EventID
                      }
                    }

                    if (res.EventName === 'TurretKilled' && res.EventID == lastEvent && res.EventID != contador) {
                      if (myTeam.includes(res.KillerName)) {
                        marianoCloss.getTurret(voiceChannel, num(1, 2));
                        contador = res.EventID
                      }
                    }

                    if (res.EventName === 'InhibKilled' && res.EventID == lastEvent && res.EventID != contador) {
                      if (myTeam.includes(res.KillerName)) {
                        marianoCloss.getIni(voiceChannel, num(1, 2));
                        contador = res.EventID
                      }
                    }

                    if (res.EventName === 'FirstBlood' && res.EventID == lastEvent && res.EventID != contador) {
                      if (myTeam.includes(res.Recipient)) {
                        marianoCloss.firstBlood(voiceChannel, num(1, 6));
                        contador = res.EventID
                      } else {
                        marianoCloss.LosefirstBlood(voiceChannel, num(1, 6));
                        contador = res.EventID
                      }
                    }

                    if (res.EventName === 'Multikill' && res.KillStreak >= 2 && res.EventID == lastEvent && res.EventID != contador
                      && myTeam.includes(res.KillerName)) {

                      if (res.KillStreak === 2) {
                        marianoCloss.getDoubleKill(voiceChannel, num(1, 6))
                      }
                      else if (res.KillStreak === 3) {
                        marianoCloss.getTripleKill(voiceChannel, num(1, 6))
                      }
                      else if (res.KillStreak === 4) {
                        marianoCloss.getQuadraKill(voiceChannel, num(1, 6))
                      }
                      else if (res.KillStreak === 5) {
                        marianoCloss.getPentaKill(voiceChannel, num(1, 6))
                      }
                      contador = res.EventID
                    }

                    if (res.EventName === 'Ace' && res.EventID == lastEvent && res.EventID != contador) {
                      if (myTeam.includes(res.Acer)) {
                        marianoCloss.getAce(voiceChannel, num(1, 2));
                        contador = res.EventID
                      } else {
                        marianoCloss.getEnemyAce(voiceChannel, num(1, 6));
                        contador = res.EventID
                      }

                    }

                    if (res.EventName === 'DragonKill' && res.EventID == lastEvent && res.EventID != contador) {
                      if (myTeam.includes(res.KillerName)) {
                        marianoCloss.getDragon(voiceChannel, num(1, 6))
                        contador = res.EventID
                      } else {
                        marianoCloss.getLoseDragon(voiceChannel, num(1, 6))
                        contador = res.EventID

                      }

                    }

                    if (res.EventName === 'HeraldKill' && res.EventID == lastEvent && res.EventID != contador) {
                      if (myTeam.includes(res.KillerName)) {
                        marianoCloss.getHerald(voiceChannel, num(1, 6))
                        contador = res.EventID
                      } else {
                        marianoCloss.getLoseHerald(voiceChannel, num(1, 6))
                        contador = res.EventID
                      }

                    }

                    if (res.EventName === 'BaronKill' && res.EventID == lastEvent && res.EventID != contador) {
                      if (myTeam.includes(res.KillerName)) {
                        marianoCloss.getBaron(voiceChannel, num(1, 6))
                        contador = res.EventID
                      } else {
                        marianoCloss.getLoseBaron(voiceChannel, num(1, 6))
                        contador = res.EventID
                      }

                    }

                    if (res.EventName === 'GameEnd' && res.Result === 'Win' && res.EventID == lastEvent && res.EventID != contador) {
                      marianoCloss.getVictory(voiceChannel, num(1, 6))
                      contador = res.EventID
                      listening = 1
                      lobbyEnded = 0
                    }

                    if (res.EventName === 'GameEnd' && res.Result === 'Lose' && res.EventID == lastEvent && res.EventID != contador) {
                      marianoCloss.getDefeat(voiceChannel, num(1, 6))
                      contador = res.EventID
                      listening = 1
                      lobbyEnded = 0
                    }

                  });
                } catch (error) {
                  if (error.code === 'ECONNREFUSED') {
                    marianoCloss.closeConnection(voiceChannel)
                    break
                  }
                }
              }
            })();
          }
        }
      }


    }
  },
};
