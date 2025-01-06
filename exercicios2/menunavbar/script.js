function clicar() {
    const itens = document.querySelectorAll('nav > a'); // Seleciona todos os links dentro de 'nav'

    // Verifica se o primeiro item está oculto ou visível
    const isHidden = itens[0].style.display === 'none' || itens[0].style.display === '';

    if (isHidden) {
        // Exibe os itens de menu abaixo do ícone
        itens.forEach(item => {
            item.style.display = 'block'; // Torna os itens visíveis
        });
    } else {
        // Esconde os itens novamente
        itens.forEach(item => {
            item.style.display = 'none'; // Torna os itens invisíveis
        });
    }
}
