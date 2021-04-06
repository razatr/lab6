function f(x) {
    return -x * x * x - 2
}

function f2(x, y) {
    return 3 * x * x / (x * x * x + y + 1)
}

function mEuler(i, x) {
    return fEuler[i - 1]['y'] + ( x - (i - 1) / 30) * f2((i - 1) / 30, fEuler[i - 1]['y'])
}

export const func = []
export const fEuler = [{ x:0, y:-2}]
export const secondOrder1 = [{ x:0, y:-2}]
export const secondOrder2 = [{ x:0, y:-2}]
export const fourthOrder = [{ x:0, y:-2}]

for (let i = 0; i < 50; i++) {
    let x = i / 30
    func.push({
        x: x,
        y: f(x)
    })
}

for (let i = 1; i <= 30; i++) {
    const x = i / 30
    fEuler.push({
        x: x,
        y: mEuler(i, x)
    })
    secondOrder1.push({
        x: x,
        y: fEuler[i - 1]['y'] + (f2(x,f(x)) + f2((i - 1) / 30, fEuler[i - 1]['y'])) / 60
    })

    const k1 = f2((i - 1) / 30, fEuler[i - 1]['y']) / 30
    const k2 = f2((i - 1) / 30 + 1 / 30, fEuler[i - 1]['y'] + k1) / 30

    secondOrder2.push({
        x: x,
        y: fEuler[i - 1]['y'] + (k1 + k2) / 2
    })
}

for (let i = 1; i <= 30; i++) {
    const x = i / 30

    const k1 = f2((i - 1) / 30, fEuler[i - 1]['y']) / 30
    const k2 = f2((i - 1) / 30 + 1 / 60, fEuler[i - 1]['y'] + k1 / 2) / 30
    const k3 = f2((i - 1) / 30 + 1 / 60, fEuler[i - 1]['y'] + k2 / 2) / 30
    const k4 = f2((i - 1) / 30 + 1 / 30, fEuler[i - 1]['y'] + k3) / 30

    fourthOrder.push({
        x: x,
        y: fEuler[i - 1]['y'] + (k1 + 2*k2 + 2 * k3 + k4) / 6
    })
}