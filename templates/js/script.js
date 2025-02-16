//variaveis
const btnMenu = document.getElementById('btnMenu')
const menuImg = document.getElementById('menuImg')
const nav = document.getElementById('nav')
let isMenuOpen = false

function abrir() {
    isMenuOpen = !isMenuOpen
    if (isMenuOpen) {
        menuImg.src = "assets/fechar_menu.svg"
        nav.classList = 'aberto'
        nav.style.display = 'flex'
        btnMenu.classList = 'girarFrente'
    } else {
        menuImg.src = "assets/menu.svg"
        nav.classList = 'fechar'
        btnMenu.classList = 'girarTras'
        nav.style.display = 'none'
    }
}

