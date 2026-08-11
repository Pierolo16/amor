// =========================
// ELEMENTOS
// =========================

const startBtn = document.getElementById("start");

const hearts = document.querySelector(".hearts");


// =========================
// CORAZONES FLOTANTES
// =========================

function createHeart() {

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

    hearts.appendChild(heart);

    setTimeout(() => {

        heart.remove();

    }, 8000);
}

setInterval(createHeart, 400);


// =========================
// ANIMACIÓN CORAZONES
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

    let linea = 0;

    let letra = 0;


    function escribirLetra() {

        if (linea >= texto.length) {

            setTimeout(() => {

                document
                    .getElementById("contador")
                    .scrollIntoView({
                        behavior: "smooth"
                    });

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

function iniciarContador() {

    if (contadorIniciado) {
        return;
    }

    contadorIniciado = true;


    const fechaInicio =
        new Date(
            "2023-06-13T00:00:00"
        );


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
                (diferencia /
                    (1000 * 60 * 60)
                ) % 24
            );


        const minutos =
            Math.floor(
                (diferencia /
                    (1000 * 60)
                ) % 60
            );


        const segundos =
            Math.floor(
                (diferencia /
                    1000
                ) % 60
            );


        document.getElementById("dias")
            .textContent = dias;

        document.getElementById("horas")
            .textContent = horas;

        document.getElementById("minutos")
            .textContent = minutos;

        document.getElementById("segundos")
            .textContent = segundos;
    }


    actualizarContador();

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

    fotoActual = numero;

    const visor =
        document.getElementById("visor");

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

    visor.classList.remove("activo");

    document.body.style.overflow =
        "auto";
}


// =========================
// MOSTRAR FOTO
// =========================

function mostrarFoto() {

    const imagen =
        document.getElementById("fotoGrande");

    imagen.src =
        fotos[fotoActual];


    document.getElementById("numeroFoto")
        .textContent =
        `${fotoActual + 1} / ${fotos.length}`;
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
        document.getElementById(
            "cartaMensaje"
        );

    carta.classList.add("activa");

    document.body.style.overflow =
        "hidden";
}


function cerrarCarta() {

    const carta =
        document.getElementById(
            "cartaMensaje"
        );

    carta.classList.remove("activa");

    document.body.style.overflow =
        "auto";
}


// =========================
// TECLADO
// =========================

document.addEventListener(
    "keydown",
    (event) => {

        // ESC

        if (
            event.key === "Escape"
        ) {

            cerrarFoto();

            cerrarCarta();
        }


        // Flecha derecha

        if (
            event.key === "ArrowRight"
        ) {

            const visor =
                document.getElementById(
                    "visor"
                );

            if (
                visor.classList.contains(
                    "activo"
                )
            ) {

                fotoSiguiente();
            }
        }


        // Flecha izquierda

        if (
            event.key === "ArrowLeft"
        ) {

            const visor =
                document.getElementById(
                    "visor"
                );

            if (
                visor.classList.contains(
                    "activo"
                )
            ) {

                fotoAnterior();
            }
        }

    }
);
// =========================
// VOLVER AL PRINCIPIO
// =========================

function volverArriba() {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

}
