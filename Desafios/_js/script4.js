function calcular(){
    var c = 1
    var n = document.getElementById("numero")
    var resultado = document.getElementById("res")
    var numero = Number(n.value)
    
    while (c <10){
        var res = numero * c
        resultado.innerHTML += `${numero} x ${c} = ${res}-->>`
        c ++

    }
}