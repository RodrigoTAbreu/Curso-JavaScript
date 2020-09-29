function tabuada(){
    let n = document.getElementById('txtnumber')
    let resp = document.getElementById('seltab')
    
    if (n.value.length == 0 ){
        alert('[Informe um Número]')
    }else{
        resp.innerHTML = '' /*limpa o select da ultima conta*/
        let numero = Number(n.value) /*variavel numero recebem em NUMBER o valor da variavel N em N.value*/
        for (c = 1 ;c <=10 ;c++){ /*para C iniciando em 1; sendo menor ou igual a 10 (c<=10)soma C mais 1 (c++)*/
            let item = document.createElement('option') /*variavel item cria um elemento OPTION */
            item.text = `${numero} x ${c} = ${numero * c} ` /*texto da variavel ITEM é alterado */
            item.value = `tab${c}` /*o valor da variavel ITEM é alterado para o contador */
            resp.appendChild(item) /*variavel ITEM é adicionada (apppend)seu elemento FILHO (child) o valor contido em ITEM */

        }
            
    }

    

}