const playersList = []
const hostUser = '7VII'

const LolData = class {

    getMyTeam(data) {
        var hostUserTeam
        data.forEach((res) => {
            if (res.summonerName === hostUser) {
                hostUserTeam = res.team
            }
            if (res.team === hostUserTeam && playersList.length < 5) {
                playersList.push(res.summonerName)
            }

        });
        return playersList
    }

    currentEvents(data) {
        let current = data.Events;
        return current
    }
}

module.exports = LolData;