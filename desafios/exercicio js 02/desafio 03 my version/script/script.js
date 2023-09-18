function contar(){
    tinicio = window.document.getElementById('tinicio')
    tfim = window.document.getElementById('tfim')
    tpasso = window.document.getElementById('tpasso')
    res = window.document.getElementById ('res')
    inicio = Number(tinicio.value)
    passo = Number(tpasso.value)
    fim = Number(tfim.value)
    for (var inicio;  inicio <= fim; inicio + passo) {
        res.innerHTML = `${inicio}`
    }

    // res.innerHTML = `Vamos começar com ${inicio} passando por ${passo} e no fim ${fim}`
}