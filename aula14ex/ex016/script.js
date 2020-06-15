const contador = document.getElementById('contador')
const start = document.querySelector('input#txtstart')
const stop = document.querySelector('input#txtstop')
const step = document.querySelector('input#txtstep')

function contar() {
    var numStep = Number(step.value)

    if(start.value.length == 0 || stop.value.length == 0 || step.value.length == 0) {
            contador.innerHTML = 'Impossível contar!'
            return
    } else if(numStep == 0) {
        alert('Passo inválido! Considerando PASSO 1')
        numStep = 1
    }

    var numStart = Number(start.value)
    var numStop = Number(stop.value)
    
    contador.innerHTML = 'Contando: <br>'
    if(numStart < numStop) {
        for(; numStart <= numStop; numStart += numStep){
            contador.innerHTML += ` ${numStart} \u{1F449}`
        }
    } else {
        for(; numStart >= numStop; numStart -= numStep) {
            contador.innerHTML += ` ${numStart} \u{1F449}`
        }
    }
    contador.innerHTML += ` \u{1F3C1}`
}