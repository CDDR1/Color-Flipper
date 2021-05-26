const body = document.querySelector("body")
const button = document.querySelector(".clickme")
const colorDisplay = document.querySelector(".current-color")

colors = ["#f49907", "#89cff0", "#f2622a", "green", "#420a55", "blue", "#d1e3d1"]

button.addEventListener("click", () => {

    let randomIndex = RandomNumber(colors.length)
    body.style.backgroundColor = colors[randomIndex]
    colorDisplay.innerText = colors[randomIndex]
})

const RandomNumber = (arraySize) => {

    return Math.floor(Math.random() * arraySize)
}