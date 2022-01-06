import { ProxyState } from "../AppState.js"
import { jeopardyService } from "../Services/JeopardyService.js"

function drawQuestion() {
  let template = ''
  ProxyState.questions.forEach(q => template += q.Template)
  document.getElementById('question').innerHTML = template
}

export class JeopardyController {
  constructor() {
    // NOTE we want to make sure the array in appstate has been populated before we try to draw it 
    ProxyState.on('questions', drawQuestion)
    jeopardyService.getJeopardyQuestion()
  }

  show() {
    document.getElementById('correct').classList.remove('visually-hidden')
    document.getElementById('wrong').classList.remove('visually-hidden')
  }

  async selectAnswer(answer) {
    try {
      jeopardyService.selectAnswer(answer)
    } catch (error) {
      console.log(error.message)
    }
  }
}