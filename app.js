// se crean clases
    let cerrar = document.querySelectorAll(".close") [0]; 
    let abrir  = document.querySelectorAll(".btn-modal") [0]; 
    let modal  = document.querySelectorAll(".modal") [0]; 
    let modalC = document.querySelectorAll(".modal-container") [0];

    // cada vez que le den click abrir se ejecute la funcion (e) = parametro
    abrir.addEventListener("click",function(e){
    
         // para ocultar el numeral en la URL
        // e.preventDefault();
        // ------------------no hace falta------------------------
        // cuando pase a la siguiente pantalla da un efecto de opacidad
        modalC.style.opacity ="1";
        modalC.style.visibility = "visible";
        // cuando se de click se va poner la clase modal-close
        modal.classList.toggle("modal-close")
        
    });
    
    cerrar.addEventListener("click",function(){
        // cuando se de click se va a quitar la clase modal-close
        modal.classList.toggle("modal-close");
        // a los 1 segundos ejecuta una funcion
        setTimeout(function(){
            // cuando pase a la siguiente pantalla se quita el efecto de opacidad
            modalC.style.opacity = "0";
            modalC.style.visibility = "hidden";
        },1000);

    }); 