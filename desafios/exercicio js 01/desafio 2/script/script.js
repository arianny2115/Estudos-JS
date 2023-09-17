function verificar() {
    var data = new Date 
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || Number(fano.value) > ano || fano.value < ano - 130){
        window.alert ('[ERRO] Verifique os dados e tente novamente')  
    } else {
        var fsex = document.getElementsByName('radisex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id','foto')
        if (fsex[0].checked){
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src',('img/homem-crianca.png'))
            } else if ( idade < 21) {
                //jovem
                img.setAttribute('src', 'img/homem-jovem.png')
            } else if (idade < 67)  {
                //adulto
                img.setAttribute('src','img/homem-adulto.png')
            } else {
                //idoso
                img.setAttribute('src', 'img/homem-idoso.png')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src', 'img/mulher-crianca.png')
            } else if ( idade < 21) {
                //jovem
                img.setAttribute('src', 'img/mulher-jovem.png')
            } else if (idade < 67)  {
                //adulto
                img.setAttribute('src','img/mulher-adulta.png')
            } else {
                //idoso
                img.setAttribute('src', 'img/mulher-idosa.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
    }
}