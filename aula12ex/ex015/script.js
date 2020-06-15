const res = document.querySelector('div#res')
const fano = document.getElementById('txtano')
const fsex = document.getElementsByName('radsex')
const ano = new Date().getFullYear()

function verificar() {
    validarEntradas()
}

function validarEntradas() {
    if(fano.value.length == 0 || fano.value > ano) {
            window.alert('Verifique os dados e tente novamente!')
        } else {
            calcularIdade()
        }
}

function calcularIdade() {
    var idade = ano - Number(fano.value)
    var genero = gerarGenero()
    res.style.textAlign = 'center'
    res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
    criarImagem(idade, genero)
}

function gerarGenero() {
    var genero = ''
    if (fsex[0].checked) {
        genero = 'Homem'
    } else if (fsex[1].checked) {
        genero = 'Mulher'
    }
    return genero
}

function criarImagem(idade, genero) {
    var img = document.createElement('img')
    img.setAttribute('id', 'foto')

    var caminho = 'feminino//'
    if(genero == 'Homem') {
        caminho = 'masculino//'
    }

    if(idade >=0 && idade < 10) {
        // crianca
        caminho += 'foto-crianca.jpg'
    } else if(idade < 21) {
        // jovem
        caminho += 'foto-jovem.jpg'
    } else if(idade < 56) {
        // adulto
        caminho += 'foto-adulto.jpg'
    } else {
        // idoso
        caminho += 'foto-idoso.jpg'
    }
    
    img.setAttribute('src', caminho)
    img.style.padding = '10px'
    res.appendChild(img)
}