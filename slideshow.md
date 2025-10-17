---
marp: true
theme: default
class:
  - lead
---

<style>
    p{
        font-size:22px
    }
    ol{
        font-size:22px
    }
    ul{
        font-size:22px
    }
    h1{
        font-size:50px
    }
    pre code{
        font-size:22px
    }
</style>

# **Projeto Aplicado: Validador de CPF**

**Análise e Explicação do Código JavaScript**

---

### **Parte 1: Coletando os Dados do Usuário**

A primeira parte do código é responsável por:

1.  Ativar o "modo estrito" do JavaScript para evitar erros.
2.  Pedir o CPF ao usuário através de uma caixa de diálogo (`prompt`).
3.  Converter o texto digitado em uma lista de caracteres (`split`).
4.  Criar as variáveis que usaremos depois.

```javascript
"use strict";
let CPFPrompt = prompt("Digite um CPF...");
let CPF = CPFPrompt.split("");
let firstDigit;
let secondDigit;
let missingNumber = CPF.slice(0, 9).indexOf("?");
let MissingNumberChecker = CPF.slice(9, 11).indexOf("?") + 9;
let PresentVerifierNumber;
let region;
```

---

### **Parte 2: Identificando a Referência**

O objetivo é descobrir qual dos dois dígitos verificadores já foi informado pelo usuário. Esse dígito servirá como nossa "prova real" para validar o número que estamos tentando descobrir.

```javascript
// Identifica a posição do dígito verificador presente
if (MissingNumberChecker == 9) {
  PresentVerifierNumber = 10;
} else {
  PresentVerifierNumber = 9;
}

// Guarda o valor do dígito conhecido
let fixedNumber = CPF[PresentVerifierNumber];
```

---

### **Parte 3: As Fórmulas de Cálculo do CPF**

- Multiplicar os dígitos por pesos decrescentes.
- Somar os resultados.
- Calcular o resto da divisão dessa soma por 11.

<!-- end list -->

```javascript
function firstDigitCheck() {
  // Multiplica os 9 primeiros dígitos por pesos de 10 a 2
  let sum =
    CPF[0] * 10 +
    CPF[1] * 9 +
    CPF[2] * 8 +
    ...
  let rest = sum % 11;

  if (rest < 2) {
    CPF[9] = 0;
  } else {
    CPF[9] = 11 - rest;
  }
}
```

_(A função `secondDigitCheck` segue uma lógica parecida, mas usando 11 pesos e incluindo o primeiro dígito verificador no cálculo)_

---

### **Parte 4: A Descoberta - Encontrando o Número Perdido**

Este é o "motor" do nosso programa. Ele testa todas as possibilidades (0 a 9) para o dígito que falta.

1.  Um laço `for` testa cada número de 0 a 9.
2.  Em cada teste, ele coloca o número no lugar do `?`.
3.  Recalcula os dígitos verificadores.
4.  Compara o resultado com o dígito que já conhecemos (`fixedNumber`).
5.  Se bater, o laço para (`break`) pois encontramos a resposta\!

<!-- end list -->

```javascript
for (let i = 0; i <= 9; i++) {
  CPF[missingNumber] = i;
  firstDigitCheck();
  secondDigitCheck();
  if (CPF[PresentVerifierNumber] == fixedNumber) {
    break;
  }
}
```

---

### **Parte 5: De Onde é esse CPF?**

Como curiosidade, o nono dígito do CPF indica a região fiscal onde ele foi emitido. Usamos uma estrutura `switch` para verificar esse dígito e determinar o estado ou região correspondente.

```javascript
switch (parseInt(CPF[8])) {
  case 0:
    region = "Rio Grande do Sul";
    break;
  case 1:
    region = "DF, GO, MT, MS e TO";
    break;
  case 2:
    region = "AM, PA, RR, AP, AC e RO";
    break;
    ...
}
```

---

### **Parte 6: Mostrando o Resultado Final\!**

Por último, usamos JavaScript para encontrar um elemento na página HTML (com `id="result"`) e injetar a nossa resposta final, formatando o CPF com pontos e traço para melhor visualização.

```javascript
let result = document.getElementById("result");

result.innerHTML = `O CPF completo é ${CPF.slice(0, 3).join("")}.${CPF.slice(
  3,
  6
).join("")}.${CPF.slice(6, 9).join("")}-${CPF.slice(9, 11).join(
  ""
)}, localizado na região de ${region}.`;
```

---

## **Obrigado\!**

**Perguntas?**
