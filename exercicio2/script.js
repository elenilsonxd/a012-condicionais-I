// # Exercício 2

// Escreva um código que receba três valores. Uma idade, um booleano que responda se a pessoa terminou ou não o ensino médio, e um booleano que responda se a pessoa está cursando alguma faculdade.

let idade = 27
let terminouEnsinoMedio = true
let cursandoAlgumaFaculdade = false

// - Se a pessoa tem 18 anos ou mais;
if(idade >=18){
console.log('voce é maior de idade')
}else if(idade> 0 && idade <=17){
	console.log('voce é menor de idade')
}else{
    alert('dados inválidos: digite um valor válido.')
}
// - Se a pessoa terminou o ensino médio;
if(terminouEnsinoMedio === true){
console.log('você concluiu o ensino médio. Parabéns!!')
}else if(terminouEnsinoMedio === false){
console.log('você não concluiu o ensino médio.tente novamente, você consegue!!')
}
// - Se a pessoa NÃO está cursando alguma faculdade;
if(cursandoAlgumaFaculdade === false){
    console.log('voce cursa uma faculdade')
}else if(cursandoAlgumaFaculdade === true){
console.log('voce não cursa uma faculdade')
}