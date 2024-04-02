let colorList = [];

for (let i = 1; i <= 3; i++) {
    let userColor = prompt('Digite uma cor preferida ' + i + ' :');
    colorList.push(userColor)
}

//alert('Sua lista de cores ficou assim: ' + colorList);

document.getElementById('cor').innerHTML = colorList;
