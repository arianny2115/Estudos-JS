var idade = 18
console.log (`Você tem ${idade} anos.`)
if (idade < 16) { //se idade é menor q 16
    console.log('Não vota')
} else if (idade < 18 || idade > 67) {//se idade é menor q 16 e 18 ou idade acima de 67
        console.log('Voto opcional') }
    else { //se é maior que 18
        console.log ('Voto Obrigatorio')
    
}