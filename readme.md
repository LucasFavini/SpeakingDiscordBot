*****
- Deberas crear un bot en la pagina oficial de Discord

-   En configJson:
    "token": "Tu discordBot token",
    "clientId": "Application id de tu discordBot",
    "guildId": "ClientId del servidor al que el bot se une";

- En LolData.js --> cambiar nombre de usuario por usuario que hostea el sv (username en LOL)

- Una vez completado config.json y Loldata.js 
    --> Ejecutar deploy-command.js (registrara los comandos) 
    --> Ejecutar index.js
    --> El bot se conectara al servidor de discord y registrara sus comandos
    * /join
    * /startGame (ejecutar cuando la partida inicia , al terminar la partida, cierra el bot (habra que ejecutar index.js nuevamente))

    --> Para agregar nuevas interacciones la logica es bastante simple y seguramente mejorable


-   Helpful links:
https://developer.riotgames.com/docs/lol#game-client-api_live-client-data-api
https://discordjs.guide/voice/audio-resources.html#creation
https://stackoverflow.com/questions/70610280/discordjs-13-bot-not-playing-local-mp3-file

*****

