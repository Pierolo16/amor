// =========================
// ELEMENTOS
// =========================

const startBtn = document.getElementById("start");
const hearts = document.querySelector(".hearts");


// =========================
// CORAZONES FLOTANTES
// =========================

function createHeart() {

    if (!hearts) return;

    const heart = document.createElement("div");

    heart.innerHTML = "❤️";

    heart.style.position = "absolute";

    heart.style.left =
        Math.random() * 100 + "vw";

    heart.style.top = "110vh";

    heart.style.fontSize =
        (18 + Math.random() * 25) + "px";

    heart.style.animation =
        "float 8s linear forwards";

    heart.style.pointerEvents = "none";

    hearts.appendChild(heart);

    setTimeout(() => {

        heart.remove();

    }, 8000);
}


// Crear corazones cada cierto tiempo
setInterval(createHeart, 400);


// =========================
// ANIMACIÓN DE CORAZONES
// =========================

const style = document.createElement("style");

style.innerHTML = `

@keyframes float {

    0% {
        transform: translateY(0);
        opacity: 1;
    }

    100% {
        transform: translateY(-120vh);
        opacity: 0;
    }

}

`;

document.head.appendChild(style);


// =========================
// BOTÓN HISTORIA
// =========================

if (startBtn) {

    startBtn.addEventListener("click", () => {

        startBtn.disabled = true;

        document.body.classList.add("fade");

        const heroCard =
            document.querySelector(".hero .glass");

        setTimeout(() => {

            heroCard.innerHTML = `

                <h2 class="typing"></h2>

            `;

            escribirHistoria();

        }, 1000);

    });

}


// =========================
// HISTORIA
// =========================

function escribirHistoria() {

    const texto = [

        "Todo comenzó un 13 de junio de 2023...",

        "",

        "Desde ese día...",

        "",

        "Cada sonrisa...",

        "Cada abrazo...",

        "Cada recuerdo...",

        "",

        "Se convirtió en parte de nuestra historia ❤️"

    ];

    const elemento =
        document.querySelector(".typing");

    if (!elemento) return;

    let linea = 0;

    let letra = 0;


    function escribirLetra() {

        if (linea >= texto.length) {

            setTimeout(() => {

                const contador =
                    document.getElementById("contador");

                if (contador) {

                    contador.scrollIntoView({

                        behavior: "smooth",

                        block: "center"

                    });

                }

                iniciarContador();

            }, 2000);

            return;

        }


        if (letra < texto[linea].length) {

            elemento.innerHTML +=
                texto[linea].charAt(letra);

            letra++;

            setTimeout(
                escribirLetra,
                60
            );

        } else {

            elemento.innerHTML +=
                "<br>";

            linea++;

            letra = 0;

            setTimeout(
                escribirLetra,
                500
            );

        }

    }


    escribirLetra();

}


// =========================
// CONTADOR
// =========================

let contadorIniciado = false;

let intervaloContador = null;


function iniciarContador() {

    if (contadorIniciado) {

        return;

    }

    contadorIniciado = true;


    const fechaInicio =
        new Date("2023-06-13T00:00:00");


    function actualizarContador() {

        const ahora =
            new Date();

        const diferencia =
            ahora - fechaInicio;


        const dias =
            Math.floor(
                diferencia /
                (1000 * 60 * 60 * 24)
            );


        const horas =
            Math.floor(
                (
                    diferencia /
                    (1000 * 60 * 60)
                ) % 24
            );


        const minutos =
            Math.floor(
                (
                    diferencia /
                    (1000 * 60)
                ) % 60
            );


        const segundos =
            Math.floor(
                (
                    diferencia /
                    1000
                ) % 60
            );


        const diasElemento =
            document.getElementById("dias");

        const horasElemento =
            document.getElementById("horas");

        const minutosElemento =
            document.getElementById("minutos");

        const segundosElemento =
            document.getElementById("segundos");


        if (diasElemento) {

            diasElemento.textContent =
                dias;

        }


        if (horasElemento) {

            horasElemento.textContent =
                horas;

        }


        if (minutosElemento) {

            minutosElemento.textContent =
                minutos;

        }


        if (segundosElemento) {

            segundosElemento.textContent =
                segundos;

        }

    }


    actualizarContador();


    intervaloContador =
        setInterval(
            actualizarContador,
            1000
        );

}


// =========================
// FOTOS
// =========================

const fotos = [

    "img/foto1.jpeg",

    "img/foto2.jpeg",

    "img/foto3.jpeg",

    "img/foto4.jpeg",

    "img/foto5.jpeg",

    "img/foto6.jpeg",

    "img/foto7.jpeg",

    "img/foto8.jpeg",

    "img/foto9.jpeg",

    "img/foto10.jpeg"

];


let fotoActual = 0;


// =========================
// ABRIR FOTO
// =========================

function abrirFoto(numero) {

    if (
        numero < 0 ||
        numero >= fotos.length
    ) {

        return;

    }


    fotoActual = numero;


    const visor =
        document.getElementById("visor");


    if (!visor) return;


    visor.classList.add("activo");


    mostrarFoto();


    document.body.style.overflow =
        "hidden";

}


// =========================
// CERRAR FOTO
// =========================

function cerrarFoto() {

    const visor =
        document.getElementById("visor");


    if (!visor) return;


    visor.classList.remove("activo");


    // Solo desbloqueamos si la carta
    // tampoco está abierta

    const carta =
        document.getElementById("cartaMensaje");


    if (
        !carta ||
        !carta.classList.contains("activa")
    ) {

        document.body.style.overflow =
            "auto";

    }

}


// =========================
// MOSTRAR FOTO
// =========================

function mostrarFoto() {

    const imagen =
        document.getElementById("fotoGrande");


    const numero =
        document.getElementById("numeroFoto");


    if (!imagen) return;


    imagen.src =
        fotos[fotoActual];


    if (numero) {

        numero.textContent =
            `${fotoActual + 1} / ${fotos.length}`;

    }

}


// =========================
// FOTO SIGUIENTE
// =========================

function fotoSiguiente() {

    fotoActual++;


    if (
        fotoActual >= fotos.length
    ) {

        fotoActual = 0;

    }


    mostrarFoto();

}


// =========================
// FOTO ANTERIOR
// =========================

function fotoAnterior() {

    fotoActual--;


    if (fotoActual < 0) {

        fotoActual =
            fotos.length - 1;

    }


    mostrarFoto();

}


// =========================
// CARTA
// =========================

function abrirCarta() {

    const carta =
        document.getElementById("cartaMensaje");


    if (!carta) return;


    carta.classList.add("activa");


    document.body.style.overflow =
        "hidden";

}


// =========================
// CERRAR CARTA
// =========================

function cerrarCarta() {

    const carta =
        document.getElementById("cartaMensaje");


    if (!carta) return;


    carta.classList.remove("activa");


    // Volvemos a permitir el scroll
    document.body.style.overflow =
        "auto";

}


// =========================
// VOLVER ARRIBA
// =========================

function volverArriba() {

    // Por si alguna ventana quedó abierta

    cerrarCarta();

    cerrarFoto();


    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

}


// =========================
// TECLADO
// =========================

document.addEventListener(
    "keydown",
    (event) => {


        // =====================
        // ESC
        // =====================

        if (
            event.key === "Escape"
        ) {

            const visor =
                document.getElementById("visor");

            const carta =
                document.getElementById("cartaMensaje");


            if (
                visor &&
                visor.classList.contains("activo")
            ) {

                cerrarFoto();

            }


            if (
                carta &&
                carta.classList.contains("activa")
            ) {

                cerrarCarta();

            }

        }


        // =====================
        // FLECHA DERECHA
        // =====================

        if (
            event.key === "ArrowRight"
        ) {

            const visor =
                document.getElementById("visor");


            if (
                visor &&
                visor.classList.contains("activo")
            ) {

                fotoSiguiente();

            }

        }


        // =====================
        // FLECHA IZQUIERDA
        // =====================

        if (
            event.key === "ArrowLeft"
        ) {

            const visor =
                document.getElementById("visor");


            if (
                visor &&
                visor.classList.contains("activo")
            ) {

                fotoAnterior();

            }

        }

    }
);


// =========================
// CLIC FUERA DE LA CARTA
// =========================

const cartaMensaje =
    document.getElementById("cartaMensaje");


if (cartaMensaje) {

    cartaMensaje.addEventListener(
        "click",
        (event) => {

            if (
                event.target === cartaMensaje
            ) {

                cerrarCarta();

            }

        }
    );

}


// =========================
// CLIC FUERA DEL VISOR
// =========================

const visor =
    document.getElementById("visor");


if (visor) {

    visor.addEventListener(
        "click",
        (event) => {

            if (
                event.target === visor
            ) {

                cerrarFoto();

            }

        }
    );

}
