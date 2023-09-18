function contar(){
    tinicio = window.document.getElementById('tinicio')
    tfim = window.document.getElementById('tfim')
    tpasso = window.document.getElementById('tpasso')
    res = window.document.getElementById ('res')
    inicio = Number(tinicio.value)
    passo = Number(tpasso.value)
    fim = Number(tfim.value)
    for (; inicio <= fim; inicio = inicio + passo) {
    res.innerHTML = `Contando: <p>${inicio} </p>`
}
}