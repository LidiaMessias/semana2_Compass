const images = [
    "images/20180909_154709.jpg",
    "images/20190803_110030.jpg",
    "images/cavalopreto.jpg"
]

let currentIndex = 0

let imageElement = document.getElementById('image')
let buttonElement = document.getElementById('button')

buttonElement,addEventListener('click', function() {
    currentIndex++
    if (currentIndex >= images.length) {
        currentIndex = 0
    }
    imageElement.src = images[currentIndex]
})