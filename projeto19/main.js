let randomNumber = Math.floor(Math.random() * 100); // floor arredonda para o menor número inteiro. random vai escolher um número qualquer e *100 para que seja um número inteiro até 100

let tries = 0;

function checkNumber() {
    let number = document.getElementById('guess').value;
    let message = document.getElementById('message');
    tries++;

    if( number == randomNumber) {
        message.innerHTML = "Congratulations, you guessed the number in " + tries + " tries!"
    } else if(number < randomNumber) {
        message.innerHTML = "Too low. Try again!"
    } else {
        message.innerHTML = "Too high. Try again!"
    }
}