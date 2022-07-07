const https = require('https');
const fs = require('fs');
const path = require('path');
const axios = require('axios');

const baseURL = 'https://127.0.0.1:2999';
//endpoints
const allGameData = '/liveclientdata/allgamedata';
const eventData = '/liveclientdata/eventdata';

const userData = 'https://127.0.0.1:2999/liveclientdata/playerscores?summonerName=7VII'

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

}
module.exports = myHttp;