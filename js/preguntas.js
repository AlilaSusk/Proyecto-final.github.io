(function(){
    const tituloPregunta = [...document.querySelectorAll('.pregunta_titulo')];
    console.log(tituloPregunta);

    tituloPregunta.forEach(pregunta=>{
        pregunta.addEventListener('click', ()=>{
            let height = 0;
            let respuesta = pregunta.nextElementSibling;
            let addPadding = pregunta.parentElement.parentElement;

            addPadding.classList.toogle('pregunta_padding--add')
            pregunta.children[0].classList.toggle('pregunta_arrow--rotate')
          
            if(respuesta.clientHeight === 0){
                height = respuesta.scrollHeight;
            }
            respuesta.style.height = `${height}px`;
        
        });
    });
    });