function analizar(){

    var txtn = document.getElementById('txtn')
    var sele = document.getElementById('seltab')
    var numero = Number(txtn.value)
    if (txtn.value == 0 || txtn.value > 100|| txtn.value.length == 0) {
        alert('Valor é invalido ou ja encontrado na lista')
    } else {                                                      
        let nums = [ ]
        
        var c = numero
        let item = document.createElement('option')
        sele.appendChild(item)
        item.text= c
        
    }


}