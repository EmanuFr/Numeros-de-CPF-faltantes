'use strict'

let CPF = [1, 9, 2, 1, 1, 5, 2, 3, null, null, 9]
let firstDigit;
let secondDigit;
let numeroQueSatisfaz = 0;
let numeroFaltante = CPF.indexOf(null)




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


console.log(`O número faltante está na posição ${numeroFaltante + 1} do CPF.`);

for(numeroQueSatisfaz = 0; numeroQueSatisfaz <= 9; numeroQueSatisfaz = numeroQueSatisfaz + 1){
    CPF[numeroFaltante] = numeroQueSatisfaz
    firstDigitCheck()
    secondDigitCheck()
    if(CPF[10] == 9){
        console.log(`O número que satisfaz o CPF é ${numeroQueSatisfaz}`);
        break
    } 
    
}

console.log(`O primeiro digito verificador é ${CPF[9]} e o segundo dígito verificador é ${CPF[10]}. O CPF completo é ${CPF.slice(0, 3).join('')}.${CPF.slice(3,6).join('')}.${CPF.slice(6,9).join('')}-${CPF.slice(9,11).join('')}.`);



