let textIngresado = document.getElementById("texto_ingresado");
let btn_encriptar = document.getElementById("encriptar");
let btn_desencriptar = document.getElementById("desencriptar");
let texto;
let textoEncriptado;

let vista_inicial = document.getElementById("vista_inicial");
let vista_texto = document.getElementById("vista_texto");

let textoResultado = document.getElementById("texto_resultado");

let btn_copiarTexto = document.getElementById("copiar_texto");

let elemento = document.getElementsByClassName("rectangulo");

btn_encriptar.onclick = function () {
    if (textIngresado.value != '') {

        texto = textIngresado.value;
        textoEncriptado = texto.replaceAll('e','enter');
        textoEncriptado = textoEncriptado.replaceAll('i','imes');
        textoEncriptado = textoEncriptado.replaceAll('a','ai');
        textoEncriptado = textoEncriptado.replaceAll('o','ober');
        textoEncriptado = textoEncriptado.replaceAll('u','ufat');

        if ((screen.width <= 375) || (screen.width > 375 && screen.width <= 768) ) {
            for (var i = 0; i < elemento.length; i++) {
                elemento[i].classList.add("rectangulo-texto-resultado");
            }
        }

        vista_inicial.setAttribute("style","display: none;")
        vista_texto.setAttribute("style","display: block;")

        textoResultado.value = textoEncriptado;

        mostrarMensaje_Toast('success','Texto encriptado.',300);

    }else{
        if (screen.width <= 375 || (screen.width > 375 && screen.width <= 768) ) {
            elemento[0].classList.remove("rectangulo-texto-resultado");
        }

        vista_inicial.setAttribute("style","display: block;")
        vista_texto.setAttribute("style","display: none;")

        
    }
}

btn_desencriptar.onclick = function () {
    if (textIngresado.value != '') {

        texto = textIngresado.value;
        textoEncriptado = texto.replaceAll('enter','e');
        textoEncriptado = textoEncriptado.replaceAll('imes','i');
        textoEncriptado = textoEncriptado.replaceAll('ai','a');
        textoEncriptado = textoEncriptado.replaceAll('ober','o');
        textoEncriptado = textoEncriptado.replaceAll('ufat','u');

        if ((screen.width <= 375) || (screen.width > 375 && screen.width <= 768) ) {
            for (var i = 0; i < elemento.length; i++) {
                elemento[i].classList.add("rectangulo-texto-resultado");
            }
        }

        vista_inicial.setAttribute("style","display: none;")
        vista_texto.setAttribute("style","display: block;")

        textoResultado.value = textoEncriptado;

        mostrarMensaje_Toast('success','Texto desencriptado.',300);
    }else{
        if (screen.width <= 375 || (screen.width > 375 && screen.width <= 768) ) {
            elemento[0].classList.remove("rectangulo-texto-resultado");
        }
        
        vista_inicial.setAttribute("style","display: block;")
        vista_texto.setAttribute("style","display: none;")
    }
}

btn_copiarTexto.onclick = function () {
    textoResultado.select();
    document.execCommand('copy')

    mostrarMensaje_Toast('success','Texto copiado.',300);
}

function mostrarMensaje_Toast(icon,mensaje, time) {
    //toastr.options.closeButton = true;
    toastr.options.closeDuration = time != undefined? time : 300;
    toastr.options.showEasing = 'swing';
    toastr.options.progressBar = true;
    toastr.options.newestOnTop = true;
    toastr.options.showMethod = 'slideDown';
    toastr.options.hideMethod = 'slideUp';
    //toastr.success(mensaje, title);
    switch (icon) {
        case 'success':
            toastr.success(mensaje);
        break;
        case 'warning':
            toastr.warning(mensaje)
        break;
        case 'error':
            toastr.error(mensaje)
        break;
        case 'info':
            toastr.info(mensaje)
        break;
    }
    
    // var Toast = Swal.mixin({
    //   toast: true,
    //   position: 'top-end',
    //   showConfirmButton: false,
    //   timer: 3000,
    //   timerProgressBar: true,
    //   didOpen: (toast) => {
    //     toast.addEventListener('mouseenter', Swal.stopTimer)
    //     toast.addEventListener('mouseleave', Swal.resumeTimer)
    //   }
    // });

    // Toast.fire({
    //     icon: icon,
    //     title: mensaje,
    //     content: 'sfsdfsdfsdf'
    // });

    // Toast.fire({
    //     icon: 'error',
    //     title: mensaje
    // });

    // Toast.fire({
    //     icon: 'warning',
    //     title: mensaje
    // });

    // Toast.fire({
    //     icon: 'info',
    //     title: mensaje
    // });
};