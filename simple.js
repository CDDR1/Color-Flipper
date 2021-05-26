const body = document.querySelector("body")
const button = document.querySelector(".clickme")
const colorDisplay = document.querySelector(".current-color")
const nav = document.querySelector("nav")

colors = [
    "#f49907", 
    "#89cff0", 
    "#f2622a", 
    "green", 
    "#420a55", 
    "blue", 
    "#d1e3d1", 
    "#ff5c33", 
    "#00e600", 
    "#e600e6",
    "#ffff4d",
    "#66ffff",
    "#0066ff"
]

button.addEventListener("click", () => {

    const randomIndex = RandomNumber(colors.length)
    body.style.backgroundColor = colors[randomIndex]
    colorDisplay.innerText = colors[randomIndex]
    nav.style.boxShadow = "none"
})

const RandomNumber = (arraySize) => {

    return Math.floor(Math.random() * arraySize)
}