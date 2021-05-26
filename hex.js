const body = document.querySelector("body")
const button = document.querySelector(".clickme")
const colorDisplay = document.querySelector(".current-color")
const nav = document.querySelector("nav")

button.addEventListener("click", () => {

    const pair1 = Process()
    const pair2 = Process()
    const pair3 = Process()
    
    body.style.backgroundColor = "#" + pair1[0] + pair1[1] + pair2[0] + pair2[1] + pair3[0] + pair3[1]
    colorDisplay.innerText = "#" + pair1[0] + pair1[1] + pair2[0] + pair2[1] + pair3[0] + pair3[1]
    nav.style.boxShadow = "none"
})

const Process = () => {

    let pair
    let firstDigit
    let secondDigit
    let firstValue
    let secondValue
    let valueSum

    do {
        pair = SelectPairOfDigits()
        firstDigit = pair[0]
        secondDigit = pair[1]       
        pair = AssignValueToDigits(firstDigit, secondDigit)
        firstValue = pair[0]
        secondValue = pair[1]
        valueSum = firstValue + secondValue
    } while (valueSum > 255)

    pair = [firstDigit, secondDigit]
    return pair
}

const SelectPairOfDigits = () => {

    const digit1 = hexDigits[Math.floor(Math.random() * 17)]
    const digit2 = hexDigits[Math.floor(Math.random() * 17)]
    return [digit1, digit2]
}

const AssignValueToDigits = (a, b) => {

    switch (a) {
        case 0:
            a = 0
            break
        case 1:
            a = 16
            break
        case 2:
            a = 32
            break
        case 3:
            a = 48
            break
        case 4:
            a = 64
            break
        case 5:
            a = 80
            break
        case 6:
            a = 96
            break
        case 7:
            a = 112
            break
        case 8:
            a = 128
            break
        case 9:
            a = 144
            break
        case "A":
            a = 160
            break
        case "B":
            a = 176
            break
        case "C":
            a = 192
            break
        case "D":
            a = 208
            break
        case "E":
            a = 224
            break
        case "F":
            a = 240
            break
        case "G":
            a = 256
            break
    }

    switch (b) {
        case 0:
            b = 0
            break
        case 1:
            b = 1
            break
        case 2:
            b = 2
            break
        case 3:
            b = 3
            break
        case 4:
            b = 4
            break
        case 5:
            b = 5
            break
        case 6:
            b = 6
            break
        case 7:
            b = 7
            break
        case 8:
            b = 8
            break
        case 9:
            b = 9
            break
        case "A":
            b = 10
            break
        case "B":
            b = 11
            break
        case "C":
            b = 12
            break
        case "D":
            b = 13
            break
        case "E":
            b = 14
            break
        case "F":
            b = 15
            break
        case "G":
            b = 16
            break
    }

    return [a, b]
}