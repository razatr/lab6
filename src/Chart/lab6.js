function f(x) {
    return -x * x * x - 2
}

const n = 30

function f2(x, y) {
    return 3 * x * x / (x * x * x + y + 1)
}

function mEuler(i, x) {
    return fEuler[i - 1]['y'] + ( x - (i - 1) / n) * f2((i - 1) / n, fEuler[i - 1]['y'])
}

export const func = []
export const fEuler = [{ x:0, y:-2}]
export const secondOrder1 = [{ x:0, y:-2}]
export const secondOrder2 = [{ x:0, y:-2}]
export const fourthOrder = [{ x:0, y:-2}]

for (let i = 0; i < 50; i++) {
    let x = i / n
    func.push({
        x: x,
        y: f(x)
    })
}

for (let i = 1; i <= 30; i++) {
    const x = i / n
    fEuler.push({
        x: x,
        y: mEuler(i, x)
    })
    secondOrder1.push({
        x: x,
        y: fEuler[i - 1]['y'] + (f2(x,f(x)) + f2((i - 1) / n, fEuler[i - 1]['y'])) / (2 * n)
    })

    const k1 = f2((i - 1) / n, fEuler[i - 1]['y']) / n
    const k2 = f2((i - 1) / n + 1 / n, fEuler[i - 1]['y'] + k1) / n

    secondOrder2.push({
        x: x,
        y: fEuler[i - 1]['y'] + (k1 + k2) / 2
    })
}

for (let i = 1; i <= 30; i++) {
    const x = i / n

    const k1 = f2((i - 1) / n, fEuler[i - 1]['y']) / n
    const k2 = f2((i - 1) / n + 1 / (2 * n), fEuler[i - 1]['y'] + k1 / 2) / n
    const k3 = f2((i - 1) / n + 1 / (2 * n), fEuler[i - 1]['y'] + k2 / 2) / n
    const k4 = f2((i - 1) / n + 1 / n, fEuler[i - 1]['y'] + k3) / n

    fourthOrder.push({
        x: x,
        y: fEuler[i - 1]['y'] + (k1 + 2*k2 + 2 * k3 + k4) / 6
    })
}