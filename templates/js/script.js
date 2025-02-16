//variaveis
const btnMenu = document.getElementById('btnMenu')
const menuImg = document.getElementById('menuImg')
const nav = document.getElementById('nav')
const inpt = document.getElementById('inpt')
const label = document.querySelector('.campo label')

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
//fim de menu
//label daora

function checkInput() {
    if (inpt.value) {
        label.classList.add('focado');
    } else {
        label.classList.remove('focado');
    }
}

// Adiciona eventos para focar e desfocar
inpt.addEventListener('focus', () => {
    label.classList.add('focado');
});

inpt.addEventListener('blur', checkInput);
inpt.addEventListener('input', checkInput);