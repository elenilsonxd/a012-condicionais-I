// # Exercício 3

// Crie um código que receba um **prompt** que diga: "Escreva aqui sua nacionalidade" e guarde o valor da resposta em uma const `nacionalidade`.

// Vamos considerar que nosso programa aceita as seguintes 5 nacionalidades:
// - brasileira;
// - argentina;
// - uruguaia;
// - chilena;
// - colombiana;



// > 💡 Lembre-se de prestar atenção às letras maiúsculas e minúsculas. 


//  Crie um código que receba um **prompt** que diga: "Escreva aqui sua nacionalidade" e guarde o valor da resposta em uma const `nacionalidade`.
let nacionalidade = prompt('Escreva sua nacionalidade aqui!').toLowerCase()
const nacionalidade1 = nacionalidade

// Crie uma estrutura de `if/else if/else` que verifique se a nacionalidade guardada na const `nacionalidade` é igual a cada uma das nacionalidades acima, e caso seja, imprima a nacionalidade no console. O último `else` deve imprimir "nacionalidade não encontrada" caso o valor de `nacionalidade` não corresponda a nenhum dos valores.
if(nacionalidade1 === 'brasileira' ){
    alert('nacionalidade: brasileira(o), nascido no brasil!')
    console.log('nacionalidade: brasileira(o)')
    
}else if(nacionalidade1 === 'argentino'|| nacionalidade1 === 'argentina'){
    alert('nacionalidade: argentino(a), nascido na argentina!')
    console.log('nacionalidade: argentino(a)')
   
}else if(nacionalidade1 === 'uruguaia'|| nacionalidade1 === 'uruguaio'){
    alert('nacionalidade: urugiaia(o), nascido no uruguai!')
    console.log('nacionalidade: urugiaia(o)')

}else if(nacionalidade1 === 'chilena'|| nacionalidade1 === 'chileno'){
    alert('nacionalidade: chilena(o), nascido no chile!')
    console.log('nacionalidade: chilena(o)')

}else if(nacionalidade1 === 'colombiano'|| nacionalidade1 === 'colombiana'){
   alert('nacionalidade: colombiano(a), nascido na colômbia!')
    console.log('nacionalidade: colombiano(a)')

}else{
   alert('nacionalidade não encontrada.')
    console.log('nacionalidade não encontrada')
}
