function verificar(){ // função ONCLICK do botão
    var data = new Date() //variavel recebe conteúdo DATA do computador
    var ano = data.getFullYear() // variavel ANO recebe apenas o ano completo FULLYEAR
    var fano = document.getElementById('txtano') //variavel recebe o valor do ID txtano do input  
    var res = document.querySelector('div#resultado') //variavel recebe o conteudo da DIV Resultado
    
    if (fano.value.length == 0 || Number(fano.value)> ano){ //se o tamanho(length) em seu valor (value) da variavel fano for igual (==) a 0 ou (||) o valor (value) de fano em numero (Number) for maior que ano
        window.alert(`[ERRO] Dados incorretos.`) //gera um alerta
        
    }else{ //se nao gera outro alerta.
        var fsex = document.getElementsByName ('radsex') // pegando o valor do input radio
        var idade = ano - Number(fano.value) // subtraindo o valor de ano por fano
        var genero = '' // criando a variavel em branco
        var img = document.createElement("img")// ---->>> criando uma TAG IMG
        img.setAttribute('id','foto')
        //img.setAttribute('id','foto') // atribuindo uma ID com nome FOTO para a tag IMG 

            if (fsex[0].checked){ //se a variavel FSEX na sua posição [0](desmarcada)checked
                genero = 'HOMEM' //variavel genero assume o valor HOMEM
                if (idade >= 0 && idade < 10) { 
                    img.setAttribute('src','img/cboy.jpg')
                }else if(idade <21){
                    img.setAttribute('src','img/jovem_menino.jpg')
                }else if (idade< 50){
                    img.setAttribute('src','img/homen_adulto.jpg')
                }else{
                    img.setAttribute('src','img/idoso_homen.jpg')
                }
            } else if(fsex[1].checked){ //se a variavel FSEX na sua posição [1] estiver marcada (checked )
                genero ='MULHER' //variavel genero assume MULHER
                if (idade >= 0 && idade < 10) {
                    img.setAttribute('src','img/cmenina.jpg')
                }else if (idade <21 ){
                    img.setAttribute('src','img/jovem_menina.jpg')
                }else if(idade < 50 ){
                    img.setAttribute('src', 'img/mulher_adulta.jpg')
                }else {
                    img.setAttribute('src','img/idosa_mulher.jpg')
                }
            }
        res.style.textAlign = 'center' //alinhando o texto de RES com java
        res.innerHTML = `Detectamos <strong>${genero}</strong> com <strong>${idade}</strong> anos.<p> ` //imprimindo o resultado na tela.
        res.appendChild(img)
       
    }
}