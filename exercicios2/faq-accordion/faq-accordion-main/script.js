const paragrafo1 = document.getElementById("paragrafo1");
const paragrafo2 = document.getElementById("paragrafo2");
const paragrafo3 = document.getElementById("paragrafo3");

    // Alterna entre mostrar e esconder o texto
    function clicar(paragrafo) {
        if (paragrafo.style.display === 'none' || paragrafo.style.display === '') {
            paragrafo.style.display = 'block'; // Mostra o parágrafo
        } else {
            paragrafo.style.display = 'none'; // Esconde o parágrafo
        }
    }
  
