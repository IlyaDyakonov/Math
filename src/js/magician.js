import Calculation from "./calculation";


export default class Magician extends Calculation {
    constructor(distance, stoned) {
        super(distance);
        this.stoned = stoned;
    }

    get stoned() {
        return this._stoned;
    }

    // устанавливаем значение есть ли дурман
    set stoned(value) {
        this._stoned = value;
    }

    get attack() {
        if (this._stoned) {
            return this.durman();
        } else {
            return this.attackEnd();
        }
    }
}