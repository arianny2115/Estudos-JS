function contar(){
    let ini = document.getElementById('tinicio')
    let fim = document.getElementById('tfim')
    let pass = document.getElementById('tpasso')
    let res = document.getElementById('res')
    if(ini.value.length == 0 || fim.value.length == 0 || fim.value == 0 || pass.value.length == 0 || pass.value == 0) {
        alert ('[ERROR] Verifique os dados')
    } else {
        res.innerHTML = 'Contando:'
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(pass.value)

        for (let c = i; c < f; c+=p) {
            res.innerHTML += ` ${c}`
        }
    }
}