let txtn = document.getElementById('txtn')
let sele = document.getElementById('seltab')
let res = document.querySelector("div#res")
let nums = [ ]

function isNumero (n){
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    } else {
        return false
    }

}
function inLista(n, l){
    if (l.indexOf(Number(n)) != -1){
        return true
    }
}
function adicionar(){

    
   if(isNumero(txtn.value) && !inLista(txtn.value, nums)) {
        nums.push(Number(txtn.value))
        let item = document.createElement('option')
        item.text = `Valor ${txtn.value} adicionado`
        sele.appendChild(item)
        res.innerHTML = ""
        
   } else  {
    alert('Valor invalido ou já encontrado na lista ')
   }
   txtn.value = ""
   nums.focus()

}
function finalizar(){
    if (nums.length == 0){
        alert('Adicione valores antes de finalizar')
    } else {
        let tot = nums.length

        let maior = nums[0]
        let menor = nums[0]
        let soma = 0
        let media = 0
        for (let pos in nums) {
            soma += nums[pos]

            if (nums[pos] > maior){
                maior = nums[pos]
            } 
            if (nums[pos] < menor){
                menor = nums[pos]
            }
        }
        media = soma / tot
        res.innerHTML = ''
        res.innerHTML += `<p> Ao todo, temos ${tot} numeros cadastrados </p>`
        res.innerHTML += `<p>O maior valor informado foi ${maior}</p>`
        res.innerHTML += `<p>O menos valor informado foi ${menor}</p>`
        res.innerHTML += `<p> A soma de todos os numeros é ${soma}</p>`
        res.innerHTML += `<p> A média de todos os elemento é ${media}</p>`

    }
}