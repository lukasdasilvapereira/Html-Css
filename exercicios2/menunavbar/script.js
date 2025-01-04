
function clicar() {
    let menu = document.getElementById('menu')
    let itens = document.getElementById('itens')
    
    if(menu.style.display == 'none') {
        itens.style.display = 'block'
    } else {
        itens.style.display = 'none'
    }
}