let age = prompt("Qual é sua idade: ");
let titulo = prompt("Você tem título de eleitor? (sim/não): ");

if (age >= 18 && titulo == 'sim') {
    alert("Você pode votar!")
} else if ( age >= 18 && titulo == 'não') {
    alert("Você precisa de título para votar!")
} else {
    alert("Você não tem a idade mínima para votar!")
}


/*else if( age < 18 && titulo == 'sim' || titulo == 'não'){
    alert("Você não tem a idade mínima para votar!")
}*/