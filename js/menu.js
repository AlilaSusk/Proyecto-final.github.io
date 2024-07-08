(function(){
    const openButton = document.querySelector('.nav_menu');
    const menu = document.querySelector('.nav_link');
    const cerrarmenu = document.querySelector('.nav_cerrar');

    openButton.addEventListener('click', ()=>{
        menu.classList.add('nav_link--show');
    });
})