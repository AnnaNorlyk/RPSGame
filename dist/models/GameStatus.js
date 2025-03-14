export class GameStatus {
    wins;
    losses;
    draws;
    constructor() {
        this.wins = 0;
        this.losses = 0;
        this.draws = 0;
    }
    recordWin() {
        this.wins++;
    }
    recordLoss() {
        this.losses++;
    }
    recordDraw() {
        this.draws++;
    }
}
//# sourceMappingURL=GameStatus.js.map