import { ProxyState } from "../AppState.js"
import { playersService } from "../Services/PlayersService.js"

function drawPlayers() {
  let template = ''
  ProxyState.players.forEach(p => template += p.Template)
  document.getElementById('players').innerHTML = template
}

function drawActivePlayer() {
  document.getElementById('active-player').innerHTML = ProxyState.activePlayer.name
}

export class PlayersController {
  constructor() {
    ProxyState.on('players', drawPlayers)
    ProxyState.on('activePlayer', drawActivePlayer)
    playersService.getAllPlayers()
  }

  async addPlayer() {
    try {
      window.event.preventDefault()
      let form = window.event.target
      const newPlayer = {
        name: form.name.value
      }
      console.log('new player obj', newPlayer)
      await playersService.addPlayer(newPlayer)
      form.reset()
    } catch (error) {
      console.log(error.message)
    }
  }

  setActivePlayer(id) {
    playersService.setActivePlayer(id)
  }
}