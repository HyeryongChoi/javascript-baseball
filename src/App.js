const BaseballGameController = require('./controllers/BaseballGameController');
class App {
  #baseballGameController;
  play() {
    this.#baseballGameController = new BaseballGameController();
    this.#baseballGameController.playGame();
  }
}

const app = new App();
app.play();

module.exports = App;
