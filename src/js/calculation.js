export default class Calculation {
// class Calculation {
    constructor(distance) {
        this.distance = distance;
        this.baseAttack = 100
    }

    // геттер вызова урона от расстояния
    get attack() {
        return this.attackEnd();
    }

    // считаем коэффицент урона от расстояния
    attackDistance(distance) {
        return 1 - (distance - 1) * 0.1;
    }

    // считаем конечный урон от расстояния
    attackEnd() {
        return this.baseAttack * this.attackDistance(this.distance);
    }

    // вычисление урона если наслали дурман
    durman() {
        const answerDurman = (this.attackEnd() - Math.log2(this.distance) * 5).toFixed(0);
        return parseInt(answerDurman);
    }
}

// module.exports = Calculation;
