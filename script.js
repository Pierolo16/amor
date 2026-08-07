const startBtn = document.getElementById("start");

// Crear corazones
const hearts = document.querySelector(".hearts");

function createHeart(){

    const heart=document.createElement("div");

    heart.innerHTML="❤️";

    heart.style.position="absolute";
    heart.style.left=Math.random()*100+"vw";
    heart.style.top="110vh";
    heart.style.fontSize=(18+Math.random()*25)+"px";

    heart.style.animation="float 8s linear forwards";

    hearts.appendChild(heart);

    setTimeout(()=>{
        heart.remove();
    },8000);

}

setInterval(createHeart,350);


// Animación de corazones
const style=document.createElement("style");

style.innerHTML=`

@keyframes float{

0%{
transform:translateY(0);
opacity:1;
}

100%{
transform:translateY(-120vh);
opacity:0;
}

}

`;

document.head.appendChild(style);


// Al presionar el botón
startBtn.addEventListener("click",()=>{

    document.body.classList.add("fade");

    setTimeout(()=>{

        document.querySelector(".glass").innerHTML=`

<h2 class="typing"></h2>

`;

        escribir();

    },1200);

});



function escribir(){

const texto=[
"Todo comenzó un 13 de junio de 2023...",
"",
"Desde ese día...",
"",
"cada sonrisa...",
"cada abrazo...",
"cada recuerdo...",
"",
"se convirtió en parte de nuestra historia ❤️"
];

const elemento=document.querySelector(".typing");

let linea=0;
let letra=0;

function escribirLetra(){

    if(linea>=texto.length){

        setTimeout(()=>{
            document.getElementById("contador").scrollIntoView({
    behavior: "smooth"
});

iniciarContador();
        },2500);

        return;
    }

    if(letra<texto[linea].length){

        elemento.innerHTML+=texto[linea].charAt(letra);

        letra++;

        setTimeout(escribirLetra,60);

    }else{

        elemento.innerHTML+="<br>";

        linea++;

        letra=0;

        setTimeout(escribirLetra,600);

    }

}

escribirLetra();

}
function iniciarContador(){

    const fechaInicio = new Date("2023-06-13T00:00:00");

    function actualizar(){

        const ahora = new Date();

        const diferencia = ahora - fechaInicio;

        const dias = Math.floor(diferencia / (1000*60*60*24));
        const horas = Math.floor((diferencia/(1000*60*60))%24);
        const minutos = Math.floor((diferencia/(1000*60))%60);
        const segundos = Math.floor((diferencia/1000)%60);

        document.getElementById("dias").textContent = dias;
        document.getElementById("horas").textContent = horas;
        document.getElementById("minutos").textContent = minutos;
        document.getElementById("segundos").textContent = segundos;

    }

    actualizar();

    setInterval(actualizar,1000);

}
