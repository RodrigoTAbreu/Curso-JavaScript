function tabuada(){
    let num = document.getElementById("txtnumber")
    let tab = document.getElementById("seltab")

    if (num.value.length == 0){ /*se o NUM tiver o tamanho ZERO */
        window.alert("[ERRO] Informe um numero.")
    }else{
        tab.innerHTML = '' /* Limpa a conta feita anteriormente*/
        let n = Number(num.value) /*N recebe em Numero o valor de NUM*/
        let c = 1 /*C recebe o valor 1 que será o contador*/
        while(c <= 10){ /*Enquanto o C for menor ou igual a 10*/
            let item = document.createElement("option") /*a variavel ITEM cria (createElement) um elemento de nome OPTION  */
            item.text = `${n} x ${c} = ${n*c}` /*a variavel ITEM tem seu texto alterado */
            item.value = `tab${c}`
            tab.appendChild(item) /*a variavel TAB adiciona um elemento filho (APPENDCHILD) que tem como seu conteudo a variavel ITEM */
            c++ /*soma o valor de C mais ele mesmo. */
    }   
        
    }
}