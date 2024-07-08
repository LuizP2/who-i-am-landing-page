

function mostrarmenu() {
    let meumobile = document.querySelector('.mobile-menu')
    if (meumobile.classList.contains('aberto')) {
        meumobile.classList.remove('aberto')
        document.querySelector('menu-icon').src="imagensportifólio/mobilemenu.png";
    }else {
        meumobile.classList.add('aberto');
        document.querySelector('menu-icon').src="imagensportifólio/fecharmenu.png";
    }
}