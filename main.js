function tocaSom(idElementoAudio){
    
    document.querySelector(idElementoAudio).play()
}

const  listaDeTeclas = document.querySelectorAll('.tecla')
let contador = 0



//enquanto
while(contador < listaDeTeclas.length) {
    const tecla = listaDeTeclas[contador]
    const instrumento = tecla.classList[1]
    const idAudio = `#som_${instrumento}`
    console.log(idAudio)

    tecla.onclick = function(){
        tocaSom(idAudio)
    }
    contador++

    console.log(contador)
}
