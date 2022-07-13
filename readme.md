*****
<h2>Como linkear tu bot al codigo</h2>
( Una vez que te sientas comodo con el codigo del bot podes subirlo en heroku para no tener que estar levantandolo )
<br> <br>

<h3> Pasos a seguir: </h3>

- Crea tu bot de discord, guia oficial de Discord.
  https://discord.com/developers/docs/intro<br>
- Aqui encontraras el token
![token](./img/bot1.PNG)

- Aqui encontraras el clientId
![token](./img/bot2.PNG)

- Finalmente activa las opciones de desarrollador en discord<br>
configuracion --> avanzado --> opciones de dev
![token](./img/bot3.PNG)

-   Ya en el codigo busca por <b>config.json</b> y completa segun lo siguiente:<br>
    "token": "ElTokenDeTuBotDeDiscord",<br>
    "clientId": "ApplicationIDdeTuDiscordBot",<br>
    "guildId": "ClientIdDelServidorAlQueElBotSeUne";<br>

- En <b>LolData.js</b> dentro de la carpeta models: <br>
  Cambiar el nombre de usuario por el usuario que hostea el sv y va a estar jugando la partida (username en LOL)

- Una vez completado config.json y Loldata.js: <br> 
    --> Ejecutar en la terminal <b>npm install</b> (instalara los paquetes necesarios) <br>
    --> Ejecutar <b>deploy-command.js</b> (registrara los comandos) <br>
    --> Ejecutar <b>index.js</b><br>
    --> El bot se conectara al servidor de discord y registrara<br> sus comandos:
    * /startGame (una vez iniciado estara escuchando y esperando a que una partida inicia para empezar a relatar)
    * extra commands /join and /leave
  
<br>

- Agregar comandos de voz:<br>
  En la siguiente pagina podras encontrar la voz que he utilizado (en este caso MarianoCloss)<br>
  https://fakeyou.com/

- El patron que decidi llevar es el de "ellos", "nosotros" + numeroAzar.
  <br>Aqui un ejemplo<br>
  fb = firstblood<br>
  fbE = firstblood Ellos<br>
  fbN = firstblood Nosotros<br>



<br><br>
*****
- Para agregar nuevas interacciones, la logica es bastante simple y seguramente mejorable

-   Helpful links:<br>
https://developer.riotgames.com/docs/lol#game-client-api_live-client-data-api<br>
https://discordjs.guide/voice/audio-resources.html#creation<br>
https://stackoverflow.com/questions/70610280/discordjs-13-bot-not-playing-local-mp3-file

*****

 <b><h3> Pueden agregarse cuantos audios quieras. Programe el bot por diversion y espero se disfrute y funcione. <br><br>
 Tambien espero que si te gusto le des tus mejoras y lo compartas con los demas</h3></b>

