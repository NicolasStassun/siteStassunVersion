const tamanhos = document.querySelectorAll('.tamanho');

function escolherTamanho(event) {
    const botao = event.target;

    for (let i = 0; i < tamanhos.length; i++) {
        const element = tamanhos[i];
        element.style.border = 'solid black 0.1vw';
        element.style.color = 'black';
    }

    botao.style.border = 'solid darkred';
    botao.style.color = 'darkred';
}


function abrirCaixaDialogo() {
    
    if(verificar){
        var caixaDialogo = document.getElementById('caixaDialogo');
        caixaDialogo.classList.remove('escondido');
    
        setTimeout(function() {
            fecharCaixaDialogo();
        }, 2000);   
    } else {
        const sucesso = document.getElementById('sucesso');
        const desc = document.getElementById('descPop');

        sucesso.innerText = 'Erro!'
        desc.innerText = 'Escolha um tamanho.'
    }


  }
  
  function fecharCaixaDialogo() {
    var caixaDialogo = document.getElementById('caixaDialogo');
    caixaDialogo.classList.add('escondido');
  }

  function verificar(event) {
    let cont=0;
    for (let i = 0; i < tamanhos.length; i++) {
        const element = tamanhos[i];
        if(element.style.backgroundColor == 'transparent'){
            cont++;        
        }
    }
        if(cont >    3) {
            return true;
        }
        return false;

}
  
