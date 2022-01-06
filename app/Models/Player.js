
export class Player {
  constructor(data) {
    this.id = data.id
    this.name = data.name
    this.points = data.points
    this.incorrect = data.incorrect
    this.correct = data.correct
    this.questions = data.questions
  }

  get Template() {
    return /*html*/ `
    <div class="col-12 selectable" onclick="app.playersController.setActivePlayer('${this.id}')">
      <h6>${this.name} - Score: ${this.points}</h6>
    </div>
    `
  }
}