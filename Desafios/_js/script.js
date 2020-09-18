function carregar(){ 
    var dt = new Date()
    var hora = dt.getHours()
    var minuto = dt.getMinutes()
    var msg = document.querySelector('div#msgdia')
    var p = document.querySelector('div#periodo')
    
                
    if (hora>5 && hora <12) {
        msg.innerHTML += `Agora são exatamente <strong>${hora}hrs ${minuto}m</strong>.`
        msg.innerHTML += `BOM DIA!`
        img.src = "img/manha.jpg"
        document.body.style.background = '#FE9500'        
        
    }else if (hora >=12 && hora <19) {
        msg.innerHTML += `Agora são exatamente <strong>${hora}hrs ${minuto}m</strong>.`
        msg.innerHTML += `BOA TARDE!`
        img.src="img/tarde.jpg"
        document.body.style.background = '#C3DEEF'
        document.body.style.color = 'black'
    }else if (hora>= 19 && hora <23){
        msg.innerHTML += `Agora são exatamente <strong>${hora}hrs ${minuto}m</strong>.`
        msg.innerHTML += `BOA NOITE!`
        img.src="img/noite.jpg"
        document.body.style.background = '#2D5493'

    }else if(hora <=5){
        msg.innerHTML += `Agora são exatamente <strong>${hora}hrs ${minuto}m</strong>.`
        msg.innerHTML += `BOA MADRUGA!!!`
        img.src="img/madrugada.jpg"
        document.body.style.background = '#4C5A63'
    }
}