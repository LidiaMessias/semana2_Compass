
function changeBackgroundColor() {
    let color = ['violet', 'orange', 'lightgreen', 'lightBlue', 'lightgrey', 'darkviolet'];
    let randomColor = color[Math.floor(Math.random() * color.length)]

    document.body.style.backgroundColor = randomColor; 
}