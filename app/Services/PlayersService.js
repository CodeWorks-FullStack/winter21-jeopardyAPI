import { ProxyState } from "../AppState.js"
import { Player } from "../Models/Player.js"
import { sandboxApi } from "./AxiosService.js"

class PlayersService {
  async getAllPlayers() {
    const res = await sandboxApi.get()
    console.log('get all players res', res.data)
    ProxyState.players = res.data.map(p => new Player(p))
    console.log('ProxyState players', ProxyState.players)
    // TODO maybe sort players alphabetically
  }

  async addPlayer(newPlayer) {
    const res = await sandboxApi.post('', newPlayer)
    ProxyState.players = [...ProxyState.players, new Player(res.data)]
    console.log('ProxyState players', ProxyState.players);
  }

  setActivePlayer(id) {
    let foundPlayer = ProxyState.players.find(p => p.id == id)
    ProxyState.activePlayer = foundPlayer
    console.log('found player in service', foundPlayer)
  }

  async editPlayer() {
    const res = await sandboxApi.put(`${ProxyState.activePlayer.id}`, ProxyState.activePlayer)
    let foundPlayerIndex = ProxyState.players.findIndex(p => p.id == ProxyState.activePlayer.id)
    ProxyState.players.splice(foundPlayerIndex, 1, new Player(res.data))
    ProxyState.players = ProxyState.players
    console.log('edit player res', res.data)
  }
}

export const playersService = new PlayersService()