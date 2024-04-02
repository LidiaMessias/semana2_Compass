let valorConta = 0
let gorjeta = 0
let valorTotal = 0

valorConta = parseFloat(prompt("Digite o valor da conta: ")) ;
gorjeta = parseFloat(prompt("Digite a porcentagem da gorjeta: ")) ;

//gorjeta = (valorConta * gorjeta) / 100;
//valorTotal = valorConta + gorjeta;

valorTotal += valorConta;
valorTotal += (valorConta * gorjeta) / 100;


alert("Valor total da conta com gorjeta = U$ " + valorTotal);
