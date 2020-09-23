function contar(){
    var n1 = document.getElementById('txtinicio') /*N1 recebe o conteudo do id TXTINICIO */
    var n2 = document.getElementById('txtfim') /*N2 recebe o conteudo do id TXTFIM */
    var p = document.getElementById('txtpasso') /*P recebe o conteudo do id PASSO*/
    var ini = Number(n1.value) /*INI recebe em NUMBER o valor de N1 */
    var fim = Number(n2.value) /* FIM recebe em NUMBER o valor de N2*/
    var pass = Number(p.value) /*PASS recebe em NUMBER o valor de P */
    var resposta= document.getElementById('res') /*RESPOSTA recebe o valor da ID RES */
  
    if (pass == 0){
            alert('[ERRO]: Considerando passo [1].')
            pass = 1
        }else if (ini == 0 || ini == ''){
                alert('[ERRO]: Informe um valor para inicio')
        }else if(ini>fim){
            alert('[ERRO]: Inicio deve ser maior que o FIM')
        }else{
            resposta.innerHTML = `${ini}` /*É impresso na variavel RESPOSTA o valor de INI e o SPAN com emogi da mão*/
            while (ini <fim){      /*Enquando INI for menor que FIM */
                resposta.innerHTML += `<span style="font-size: 20px">&#128073</span>`
                ini += pass  /*INI recebe INI mais o valor de PASS */
                resposta.innerHTML += `${ini} ` /* Acada passagem do LOOP é feito a impressão do valor de INI mais o emoji mão*/
            }resposta.innerHTML += `Fim: <span style= "font-size: 20px">&#128102;&#127995;</span>` /*Ao sair do LOOP é impresso outro emoji */
        }
}
