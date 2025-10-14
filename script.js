'use strict'
let CPFPrompt = prompt('Digite um CPF com 9 dígitos, seguido de dois pontos e os dois dígitos verificadores. Use um ponto de interrogação (?) para o dígito faltante. Exemplo: 12345678912 ou 12345678?12 ou 123456789?2 ou 1234567891?')
let CPF = CPFPrompt.split('')
let firstDigit;
let secondDigit;
let missingNumber = CPF.slice(0,9).indexOf('?')
let MissingNumberChecker = CPF.slice(9,11).indexOf('?') + 9
let PresentVerifierNumber;
let region;
console.log(CPF)
// Identifica a posição do número faltante e a posição do dígito verificador presente
if (MissingNumberChecker == 9){
    PresentVerifierNumber = 10
} else {
    PresentVerifierNumber = 9
}

let fixedNumber = CPF[PresentVerifierNumber]

// Funções para calcular os dígitos verificadores
function firstDigitCheck(){
    firstDigit = (CPF[0] * 10 + CPF[1] * 9 + CPF[2] * 8 + CPF[3] * 7 + CPF[4] * 6 + CPF[5] * 5 + CPF[6] * 4 + CPF[7] * 3 + CPF[8] * 2) % 11
    if (firstDigit == 0 || firstDigit == 1){
        return CPF[9] = firstDigit
    } else {
        return CPF[9] = 11 - firstDigit
    }
};

function secondDigitCheck(){
    secondDigit = (CPF[0] * 11 + CPF[1] * 10 + CPF[2] * 9 + CPF[3] * 8 + CPF[4] * 7 + CPF[5] * 6 + CPF[6] * 5 + CPF[7] * 4 + CPF[8] * 3 + CPF[9] * 2) % 11
    if (secondDigit == 0 || secondDigit == 1){
        return CPF[10] = secondDigit
    } else {
        return CPF[10] = 11 - secondDigit
    }
}

// Informa a posição do número faltante e calcula o número que satisfaz o CPF
console.log(`O número faltante está na posição ${missingNumber + 1} do CPF.`);

// Loop para encontrar o número que satisfaz o CPF
for(let numeroQueSatisfaz = 0; numeroQueSatisfaz <= 9; numeroQueSatisfaz = numeroQueSatisfaz + 1){
    CPF[missingNumber] = numeroQueSatisfaz
    firstDigitCheck()
    secondDigitCheck()
    if(CPF[PresentVerifierNumber] == fixedNumber){
        console.log(`O número que satisfaz o CPF é ${numeroQueSatisfaz}`);
        break
    } 
    
}

// Identifica a região do CPF
switch(parseInt(CPF[8])){
    case 0 : region = 'Rio Grande do Sul'; break;
    case 1 : region = 'Distrito Federal, Goiás, Mato Grosso, Mato Grosso do Sul e Tocantins'; break;
    case 2 : region = 'Amazonas, Pará, Roraima, Amapá, Acre e Rondônia'; break;
    case 3 : region = 'Ceará, Maranhão e Piauí'; break;
    case 4 : region = 'Paraíba, Pernambuco, Alagoas e Rio Grande do Norte'; break;
    case 5 : region = 'Bahia e Sergipe'; break;
    case 6 : region = 'Minas Gerais'; break;
    case 7 : region = 'Rio de Janeiro e Espírito Santo'; break;
    case 8 : region = 'São Paulo'; break;
    case 9 : region = 'Paraná e Santa Catarina'; break;
    default: region = 'Número inválido'; 
}

document.write(`O primeiro digito verificador é ${CPF[9]} e o segundo dígito verificador é ${CPF[10]}. O CPF completo é ${CPF.slice(0, 3).join('')}.${CPF.slice(3,6).join('')}.${CPF.slice(6,9).join('')}-${CPF.slice(9,11).join('')} localizado na regiao de ${region}.`);




