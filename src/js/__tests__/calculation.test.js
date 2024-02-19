import Calculation from "../calculation";


test("проверяем подсчёт коэффицента урона от расстояния => attackDistance", () => {
    const cal = new Calculation();

    expect(cal.attackDistance(1)).toBe(1);
    expect(cal.attackDistance(2)).toBe(0.9);
    expect(cal.attackDistance(3)).toBe(0.8);
    expect(cal.attackDistance(4)).toBe(0.7);
    expect(cal.attackDistance(5)).toBe(0.6);
})

test("проверяем подсчёт конечного урона => attackEnd", () => {
    expect(new Calculation(1).attackEnd()).toBe(100);
    expect(new Calculation(2).attackEnd()).toBe(90);
    expect(new Calculation(3).attackEnd()).toBe(80);
    expect(new Calculation(4).attackEnd()).toBe(70);
    expect(new Calculation(5).attackEnd()).toBe(60);
})

test("проверяем урон с дурманом => durman", () => {
    expect(new Calculation(1).durman()).toBe(100);
    expect(new Calculation(2).durman()).toBe(85);
    expect(new Calculation(3).durman()).toBe(72);
    expect(new Calculation(4).durman()).toBe(60);
    expect(new Calculation(5).durman()).toBe(48);
})

test("проверяем вызов гетера attack", () => {
    expect(new Calculation(1).attack).toBe(100);
    expect(new Calculation(2).attack).toBe(90);
    expect(new Calculation(3).attack).toBe(80);
    expect(new Calculation(4).attack).toBe(70);
    expect(new Calculation(5).attack).toBe(60);
})