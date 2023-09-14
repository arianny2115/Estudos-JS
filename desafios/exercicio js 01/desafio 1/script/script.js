function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('image')
    var data = new Date()
    var hora = data.getHours()

    msg.innerHTML = ` Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        //BOM DIA!
        img.src = 'imagens/manha.png'
        document.body.style.background = '#e6de97'
    } else if (hora > 12 && hora <18) {
        //BOA TARDE!
        document.body.style.background = '#ef994c'
        img.src = 'imagens/tarde.png'
            } else {
        // BOA NOITE!
        img.src = "imagens/noite.png"
        document.body.style.background = '#436e79'
    }
}

