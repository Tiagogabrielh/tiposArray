var livros = []

getBuscarLivrosDaAPI()

async function getBuscarLivrosDaAPI() {
    const carrega = await fetch("http://localhost:3000/lista");
    livros = await carrega.json();
    
    
    livros = aplicarDesconto(livros);
    listarLivros(livrosComDesconto);
    console.log(livrosComDesconto)
}