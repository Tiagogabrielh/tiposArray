const botao = document.getElementById('ordenar__preco');


botao.addEventListener('click', ordenaPorPreco);

function ordenaPorPreco(){
    
    let livrosOrdenados = livros.sort((a,b) => a.preco - b.preco)
    console.log(livrosOrdenados)
    listarLivros(livrosOrdenados)
}