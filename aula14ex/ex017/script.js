function calcular() {
    var txtn = document.querySelector('input#txtn')
    var tab = document.getElementById('seltab')
    
    if(txtn.value.length == 0) {
        alert('Por favor, digite um número.')
        return
    }

    var n = Number(txtn.value)
    tab.innerHTML = ''
    for(var i = 1; i <= 10; i++) {
        let item = document.createElement('option')
        item.text = `${n} x ${i} = ${n*i}`
        item.value = `tab${c}`
        tab.appendChild(item)
    }
}