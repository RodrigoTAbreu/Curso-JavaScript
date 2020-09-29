function mostra(){


    let msg = document.getElementById('resposta')
    let msg2 = document.getElementById('respfor')
    let dado1 = document.getElementById('tnumber')
    let dado = Number(dado1.value)
    let valor = ['8', 1, 2, 30,3]
    /*msg.innerHTML = `O valor da Array é original é :<strong> ${a}</strong>`
    console.log(a)
    a[3] = 'Carro4' 
    a.push('Carro5')
    msg.innerHTML = `O tamanho do Array agora é ${a.length} <br>`
    msg.innerHTML +=`Seu componentes são: ${a}<br>`
    msg.innerHTML += `Colocando o ARRAY em ordem: ${a.sort()}<br>`
    msg.innerHTML += `Adicionando Carro 45:${a.push('Carro45')}<br>`
    msg.innerHTML += `Conteudo agora é : ${a}<br>`
    a.push('Carro150')
    msg.innerHTML += `Mais um carro adicionado ${a}<br>`
    msg.innerHTML += `Agora em ordem ${a.sort()}<br>`
    msg.innerHTML +=`Lista agora depois de SPLICE ${a}<br> `
    msg.innerHTML += `O primeiro valor é ${a[0]}<p>`
    msg.innerHTML += `O ultimo valor é ${a[-1]}<p>`
*/
                /*Percurso em vetores com FOR*/
   /* for (let pos = 0 ; pos <a.length; pos ++){ /*variavel POS iniciando em ZERO; enquanto pos for menor que o tamanho do array A (a.length); acrescenta mais um ao valor POS */
     /*   msg.innerHTML += `<p>posição ${pos} tem o valor ${a[pos]}</p>`
    }*/
            /*Percurso de Array com FOR IN */
    for (let pos in valor ){ /* para cada posição POS mostra IN a*/
        msg2.innerHTML = `O Valor está na posição  ${valor.indexOf(dado.value)}`

    }
}
