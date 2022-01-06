import { ProxyState } from "../AppState.js"
import { Player } from "../Models/Player.js"
import { Question } from "../Models/Question.js"
import { jeopardyApi, sandboxApi } from "./AxiosService.js"
import { playersService } from "./PlayersService.js"

class JeopardyService {

  async getJeopardyQuestion() {
    const res = await jeopardyApi.get()
    console.log('random question response', res.data)
    ProxyState.questions = res.data.map(q => new Question(q))
    console.log('Proxystate question', ProxyState.questions)
  }

  async selectAnswer(answer) {
    // If we were to extend this, we would need to have the id of the question passed through, then find it in the question collection
    if (ProxyState.activePlayer == null) {
      window.alert('Pick a Player First!!')
    }
    let activeQuestion = ProxyState.questions[0]
    if (answer == 'correct') {
      ProxyState.activePlayer.points += activeQuestion.value
      ProxyState.activePlayer.correct++
    } else {
      ProxyState.activePlayer.points -= activeQuestion.value
      ProxyState.activePlayer.incorrect++
    }
    ProxyState.activePlayer.questions++
    // NOTE abstraced edit functionality to the players service
    playersService.editPlayer()
    this.getJeopardyQuestion()
  }
}

export const jeopardyService = new JeopardyService() 