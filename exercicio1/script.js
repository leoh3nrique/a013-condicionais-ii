// 1. Utilizando ifs aninhados
let num = Number(prompt("Digite um número para saber se e divisivel por 2 e 3"))

if (num%2 == 0){
    if(num%3 == 0){
        console.log("Ifs aninhados - Divisivel por 2 por 3")
    }
}else{
    console.log("Ifs aninhados - Não divisivel")
}

// 2. Utilizando um operador lógico para unir duas operações relacionais
if (num % 2 == 0 && num % 3 == 0){
    console.log("Operadores lógicos - Divisivel")
}else{
    console.log("Operadores lógicos - Não divisivel")
}
