let numberOne= Number(prompt('Digite o primeiro numero'))
let numberTwo = Number(prompt('Digite o segundo numero'))

let sum = numberOne + numberTwo
let sub = numberOne - numberTwo
let mult = numberOne * numberTwo
let div = numberOne / numberTwo
let rest = numberOne % numberTwo

alert(`A soma é ${sum}`)
alert(`A subtração é ${sub}`)
alert(`A multiplicação é ${mult}`)
alert(`A divisão é ${div}`)
alert(`O resto da divisão é ${rest}`)

if( sum % 2 == 0){
    alert('A soma dos numeros é par')
} else{
    alert('A soma dos numeros é Impar')
}

if(sub == 0){
    alert('Os numeros são iguais')
} else{
    alert('os numeros são diferentes')
}
