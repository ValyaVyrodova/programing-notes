const team = {
    _players: [
        {
            firstName: 'Pablo',
            lastName: 'Sanchez',
            age: 11
        },
        {
            firstName: 'Pete',
            lastName: 'Wheeler',
            age: 54
        },
        {
            firstName: 'Andrey',
            lastName: 'Ptushkin',
            age: 30
        }
    ],
    _games: [
        {
            opponent: 'Broncos',
            teamPoints: 42,
            opponentPoints: 27
        },
        {
            opponent: 'Amigos',
            teamPoints: 37,
            opponentPoints: 16
        },
        {
            opponent: 'Lalalaula',
            teamPoints: 54,
            opponentPoints: 10
        }
    ],

    addGame(opp, myPts, oppPts) {
        const game = {
            opponent: opp,
            teamsPoints: myPts,
            opponentPoints: oppPts
        }
        this._games.push(game)
    },

    get players() {
        return this._players
    },

    get games() {
        return this._games
    },

    addPlayer(firstName, lastName, age) {
        let player = {
            firstName: firstName,
            lastName: lastName,
            age: age
        }
        this._players.push(player)
    }
}

team.addPlayer('Steph ', 'Curry ', 28)
team.addPlayer('Lisa ', 'Leslie ', 44)
team.addPlayer('Bugs ', 'Bunny ', 76)

console.log(team._players)


team.addGame('Titans', 100, 98)
team.addGame('Mafia', 58, 16)

console.log(team._games)

