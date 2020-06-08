export interface IDice {
    last: number
}

// dice class, will implement rolling
export default class Dice implements IDice {
    last = 6;

    constructor(inLast: number) {
        this.last = inLast;
    }

    roll() {
        Math.floor(Math.random() * this.last) + 1
    }
}

