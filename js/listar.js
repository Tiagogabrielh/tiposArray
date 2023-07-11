const listaId = document.getElementById('lista__id');

const elementoComValorTotalDeLivrosDisponiveis = document.getElementById('valor_total_livros_disponiveis')
console.log(elementoComValorTotalDeLivrosDisponiveis)

function listarLivros(livros){
    
    elementoComValorTotalDeLivrosDisponiveis.innerHTML = ''
    listaId.innerHTML = ''

    livros.forEach( (e) => { listaId.innerHTML += `<li class="li__ultimo" ><h2 class="titulo.class">${e.titulo}</h2><img src="${e.imagem}" alt="${e.alt}" class="imagem__class"><p class="preco__class">R$${e.preco.toFixed(2)}</p></li>` }) 
}

