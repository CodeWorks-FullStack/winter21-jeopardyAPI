
export class Question {
  constructor(data) {
    this.id = data.id
    this.answer = data.answer
    this.question = data.question
    this.value = data.value
    this.category = data.category.title
    this.airDate = data.airdate
  }

  get Template() {
    return /*html*/ `
    <div class="row max-height">
      <div class="col-12 d-flex flex-column h-25">
        <small>Category: ${this.category}</small>
        <small>Value: ${this.value}</small>
        <small>Player: <span id="active-player"></span> </small>
      </div>
      <div class="col-12 mt-5 text-center">
        <h4 class="selectable show mb-3" onclick="app.jeopardyController.show()">Question: ${this.question}</h4>
        <h4 class="p-0 answer position-absolute">Answer: ${this.answer}</h4>
      </div>
      <div class="col-12">
        <div class="d-flex justify-content-between">
          <button class="btn btn-success visually-hidden" id="correct" onclick="app.jeopardyController.selectAnswer('correct')">Correct</button>
          <button class="btn btn-danger visually-hidden" id="wrong" onclick="app.jeopardyController.selectAnswer('wrong')">WRONG</button>
        </div>
      </div>
    </div>
    `
  }
}