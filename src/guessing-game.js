class GuessingGame {
    constructor() {}

    setRange(min, max) {
        this.min = min;
        this.max = max;
    }
    
    guess() {
        this.pivot = Math.round((this.max+this.min)/2);
        return this.pivot;
    }

    lower() {
        this.max = this.pivot;
        console.log(this.max);
    }

    greater() {
        this.min = this.pivot;
        console.log(this.min);
    }
}

module.exports = GuessingGame;


