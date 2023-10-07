
function calcular(a,b,tipo){
    if(tipo == '+'){
        return somar(a,b)
    }

    if(tipo == '-'){
        return subtrair(a,b)
    }

    if(tipo == '*'){
        return multiplicar(a,b)
    }

    if(tipo == '/'){
        return dividir(a,b)
    }
}

function somar(a,b){
    return a+b
}

function subtrair(a,b){
    return a-b
}

function multiplicar(a,b){
    return a*b
}

function dividir(a,b){
    return a/b
}

console.log(calcular(2,5,'/'))