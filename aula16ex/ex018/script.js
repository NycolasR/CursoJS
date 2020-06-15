const valores = []
const tabela = document.querySelector('select#valores')
const txtNum = document.querySelector('input#txtnumber')
const res = document.getElementById('res')

function adicionar() {
    res.innerHTML = ''
    var num = Number(txtNum.value)

    if(txtNum.value.length == 0) {
        alert('Informe um valor para ser adicionado!')
    } else if(num > 100 || num < 1) {
        alert('Valor fora do intervalo permitido!')
    } else if(!valorInLista(num)) {
        addNumInLista(num)
    } else {
        alert('O valor informado já está na lista!')
    }
    txtNum.value = ''
    txtNum.focus()
}

function valorInLista(n) {
    return valores.indexOf(n) != -1
}

function addNumInLista(n) {
    valores.push(n)
    var item = document.createElement('option')
    item.text = `Valor ${n} adicionado`
    item.value = `valor${n}`
    tabela.appendChild(item)
}

function finalizar() {
    if(tabela.innerHTML.length == 0 ) {
        alert('Adicione valores para poder finalizar!')
    } else {
        res.innerHTML = ''
        res.innerHTML = formarStatus()
    }
}

function formarStatus() {
    var status = `<p>Ao todo, temos ${valores.length} número cadastrados.</p>`
    
    var maior = valores[0]
    var menor = valores[0]
    var somatoria = 0
    for(var i = 0; i < valores.length; i++) {
        if(valores[i] > maior) {
            maior = valores[i]
        }
        if(valores[i] < menor) {
            menor = valores[i]
        }
        somatoria += valores[i]
    }
    
    status += `<p>O maior valor informado foi ${maior}.</p>` +
              `<p>O menor valor informado foi ${menor}.</p>` +
              `<p>Somando todos os valores, temos ${somatoria}.</p>` +
              `<p>A média dos valores digitados é ${somatoria/valores.length}.</p>`
    
    return status
}