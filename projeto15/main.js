let numberList = document.getElementById('numberList');
let frutas = ['Uva', 'Morango', 'Manga', 'Banana', 'Abacate'];

for (let i = 0; i < 5; i++) {
    let listItem = document.createElement('li');
    listItem.appendChild(document.createTextNode(frutas[i])) ;
    numberList.appendChild(listItem);
}