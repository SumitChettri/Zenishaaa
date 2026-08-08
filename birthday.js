// ================================
// TARGET DATE
// Change this date/time
// ================================

const birthdayDate = new Date(2026, 7, 8, 0, 0, 0).getTime();

// ================================
// ELEMENTS
// ================================
const days = document.getElementById("days");
const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");
// ================================
// COUNTDOWN FUNCTION
// ================================
function updateCountdown(){
    const now = new Date().getTime();
    const distance = birthdayDate - now;
    if(distance <= 0){

        startCinematic();
        document.getElementById(
"cinematicText"
).style.opacity="1";
document.getElementById(
"birthdayTitle"
).style.animationPlayState="running";

        return;

    }
    const d = Math.floor(
        distance /
        (1000 * 60 * 60 * 24)
    );

    const h = Math.floor(
        (distance %
        (1000 * 60 * 60 * 24))
        /
        (1000 * 60 * 60)
    );

    const m = Math.floor(
        (distance %
        (1000 * 60 * 60))
        /
        (1000 * 60)
    );

    const s = Math.floor(
        (distance %
        (1000 * 60))
        /
        1000
    );

    days.innerHTML =
    String(d).padStart(2,"0");

    hours.innerHTML =
    String(h).padStart(2,"0");

    minutes.innerHTML =
    String(m).padStart(2,"0");

    seconds.innerHTML =
    String(s).padStart(2,"0");
}

setInterval(updateCountdown,1000);
updateCountdown();

// ================================
// CREATE STARS
// ================================

const starsContainer =
document.getElementById("stars");

for(let i=0;i<180;i++){

    let star =
    document.createElement("span");

    star.style.left =
    Math.random()*100+"%";

    star.style.top =
    Math.random()*100+"%";

    star.style.animationDelay =
    Math.random()*5+"s";

    star.style.width =
    Math.random()*3+1+"px";

    star.style.height =
    star.style.width;

    starsContainer.appendChild(star);
}

// ================================
// SHOOTING STARS
// ================================

const shooting =
document.getElementById("shootingStars");

setInterval(()=>{

    let star =
    document.createElement("div");

    star.className="shooting";

    star.style.top =
    Math.random()*50+"%";

    shooting.appendChild(star);
    setTimeout(()=>{

        star.remove();

    },4000);
},5000);

// ================================
// FLOATING HEARTS
// ================================

const hearts =
document.getElementById("heartsContainer");

function createHeart(){


    let heart =
    document.createElement("div");

    heart.className="heart";

    heart.innerHTML="♥";

    heart.style.left =
    Math.random()*100+"%";

    heart.style.animationDuration =
    (5+Math.random()*5)+"s";

    heart.style.fontSize =
    (12+Math.random()*20)+"px";

    hearts.appendChild(heart);

    setTimeout(()=>{

        heart.remove();

    },10000);
}

setInterval(createHeart,900);

// ================================
// FLOWER PETALS
// ================================
const petals =
document.getElementById("petalsContainer");

function createPetal(){

    let petal =
    document.createElement("div");

    petal.className="petal";

    petal.style.left =
    Math.random()*100+"%";

    petal.style.animationDuration =
    (6+Math.random()*6)+"s";

    petals.appendChild(petal);
    setTimeout(()=>{

        petal.remove();

    },12000);
}

setInterval(createPetal,1200);
// ================================
// CINEMATIC ENDING
// ================================
function startCinematic(){


    const card =
    document.querySelector(".glassCard");


    const background =
    document.querySelector(".background");


    // instantly hide countdown

    card.style.transition =
    "1s ease";


    card.style.opacity="0";


    card.style.transform =
    "scale(1.2)";



    setTimeout(()=>{


        card.style.display="none";


        background.classList.add(
        "birthdayMode"
        );


        const cinematic =
        document.getElementById(
        "cinematicText"
        );


        cinematic.style.opacity="1";


        document.getElementById(
        "birthdayTitle"
        ).classList.add("show");



        showLines();



    },2000);



}
// Text sequence
function showLines(){


    const lines =
    document.querySelectorAll(
    ".messageLine"
    );


    lines.forEach((line,index)=>{


        setTimeout(()=>{


            line.classList.add(
            "show"
            );


        },4000 + (index*2500));


    });



    setTimeout(()=>{


        document.getElementById(
        "whiteFlash"
        ).style.transition =
        "3s";


        document.getElementById(
        "whiteFlash"
        ).style.opacity =
        "1";


    },15000);

    setTimeout(()=>{


        window.location.href =
        "celebration.html";


    },20000);

}


const particleBox =
document.getElementById("particles");

for(let i=0;i<80;i++){

let p =
document.createElement("div");

p.className="particle";

p.style.left =
Math.random()*100+"%";

p.style.animationDelay =
Math.random()*8+"s";

p.style.animationDuration =
(5+Math.random()*8)+"s";

particleBox.appendChild(p);

}

const sparkleBox =
document.querySelector(".zSparkles");


for(let i=0;i<30;i++){


    let sparkle =
    document.createElement("span");


    sparkle.style.left =
    (35 + Math.random()*30)+"%";


    sparkle.style.top =
    (35 + Math.random()*25)+"%";


    sparkle.style.animationDelay =
    Math.random()*3+"s";


    sparkleBox.appendChild(
    sparkle
    );


}
