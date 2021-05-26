const body = document.querySelector("body")
const button = document.querySelector(".clickme")
const colorDisplay = document.querySelector(".current-color")
const nav = document.querySelector("nav")

const hexDigits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F", "G"]

button.addEventListener("click", () => {

    let pair1 = SelectPairOfDigits()
    const [firstDigit, secondDigit] = pair1
    pair1 = AssignValueToDigits(firstDigit, secondDigit)
    // console.log(pair1)

    let pair2 = SelectPairOfDigits()
    const [thirdDigit, fourthDigit] = pair2
    pair2 = AssignValueToDigits(thirdDigit, fourthDigit)
    // console.log(pair2)

    let pair3 = SelectPairOfDigits()
    const [fifthDigit, sixthDigit] = pair3
    pair3 = AssignValueToDigits(fifthDigit, sixthDigit)
    // console.log(pair3)

    body.style.backgroundColor = "#" + pair1[0] + pair1[1] + pair2[0] + pair2[1] + pair3[0] + pair3[1]
    colorDisplay.innerText = "#" + pair1[0] + pair1[1] + pair2[0] + pair2[1] + pair3[0] + pair3[1]
    nav.style.boxShadow = "none"
})

const SelectPairOfDigits = () => {

    const digit1 = Math.floor(Math.random() * 16)
    const digit2 = Math.floor(Math.random() * 16)
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
            b = 0
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

    const notMoreThan255 = EvaluateValue(a, b)

    if (notMoreThan255) {

        if (a >= 16) {
            a = a / 16
        }

        switch (a) {
            case 1:
                a = 1
                break
            case 2:
                a = 2
                break
            case 3:
                a = 3
                break
            case 4:
                a = 4
                break
            case 5:
                a = 5
                break
            case 6: 
                a = 6
                break
            case 7:
                a = 7
                break
            case 8:
                a = 8
                break
            case 9:
                a = 9
                break
            case 10:
                a = "A"
                break
            case 11:
                a = "B"
                break
            case 12:
                a = "C"
                break
            case 13:
                a = "D"
                break
            case 14:
                a = "E"
                break
            case 15:
                a = "F"
                break
            case 16:
                a = "G"
                break
        }

        switch (b) {
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
            case 10:
                b = "A"
                break
            case 11:
                b = "B"
                break
            case 12:
                b = "C"
                break
            case 13:
                b = "D"
                break
            case 14:
                b = "E"
                break
            case 15:
                b = "F"
                break
            case 16:
                b = "G"
                break
        }

        return [a, b]
    }
}

const EvaluateValue = (a, b) => {

    const value = a + b

    if (value <= 255) {
        
        return true
    }

    SelectPairOfDigits()
}