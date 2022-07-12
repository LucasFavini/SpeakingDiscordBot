const https = require('https');
const fs = require('fs');
const path = require('path');
const axios = require('axios');

const baseURL = 'https://127.0.0.1:2999';
//endpoints
const allGameData = '/liveclientdata/allgamedata';
const eventData = '/liveclientdata/eventdata';

const userData = 'https://127.0.0.1:2999/liveclientdata/playerscores?summonerName=7VII'

var stopSearching = true
setTimeout(() => {stopSearching = false}, 500000);

const httpsAgent = new https.Agent({
  ca: fs.readFileSync(path.join(__dirname, '../utils/riotgames.pem'), 'utf-8')
});

const myHttp = class {

  async getInfo() {

    const getAllGameData = async () => {
      try {
        return axios.get(`${baseURL}${allGameData}`, { httpsAgent })
          .then(res => res)
      } catch (error) {
        console.error(error)
        console.error('7777777')

      }
    }
    return await getAllGameData()
  }

  async getEvents() {
    const getEventsData = async () => {
      try {
        return axios.get(`${baseURL}${eventData}`, { httpsAgent })
          .then(res => res.data)
      } catch (error) {
        console.error(error)
      }
    }
    return await getEventsData();
  }

  getVoiceChannel(channel) {
    return channel
  }

  async isGameOn() {
		const sleep = ms => new Promise(res => setTimeout(res, ms));
    while (stopSearching) {
      await sleep(3000);
      try {
        console.log('La partida aun no ha comenzado')
        let response = await this.getInfo().then().catch(e => e.code);
        if (response != 'ECONNREFUSED' || response != 'RESOURCE_NOT_FOUND'){
          await this.getInfo().then(res => res)
          if (stopSearching) {
            console.log('La partida ha comenzado')
            return true
          }
            break
        }
      } catch (error) {
        //console.log(error.code) TODO agregar correcion 
      }
    }
  };
}


module.exports = myHttp;