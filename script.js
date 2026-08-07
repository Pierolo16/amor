// Crear corazones flotando

const hearts = document.querySelector(".hearts");

function createHeart(){

    const heart=document.createElement("div");

    heart.innerHTML="❤️";

    heart.style.position="absolute";

    heart.style.left=Math.random()*100+"vw";

    heart.style.top="100vh";

    heart.style.fontSize=(20+Math.random()*30)+"px";

    heart.style.animation="float 8s linear forwards";

    hearts.appendChild(heart);

    setTimeout(()=>heart.remove(),8000);

}

setInterval(createHeart,400);

// Botón

document.getElementById("start").onclick=()=>{

    alert("Bienvenida a nuestra historia ❤️");

}

// Animación

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
