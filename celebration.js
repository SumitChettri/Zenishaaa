// ==============================
// FLOATING HEARTS
// ==============================

const hearts =
    document.getElementById("hearts");


function createHeart() {


    const heart =
        document.createElement("span");


    heart.innerHTML = "♥";


    heart.className =
        "floating-heart";


    heart.style.left =
        Math.random() * 100 + "%";


    heart.style.animationDuration =
        (6 + Math.random() * 5) + "s";


    heart.style.fontSize =
        (15 + Math.random() * 25) + "px";


    hearts.appendChild(heart);



    setTimeout(() => {

        heart.remove();

    }, 12000);


}


setInterval(createHeart, 700);





// ==============================
// SPARKLES
// ==============================


const sparkleBox =
    document.getElementById("sparkles");


for (let i = 0; i < 80; i++) {


    let sparkle =
        document.createElement("span");


    sparkle.className =
        "sparkle";


    sparkle.style.left =
        Math.random() * 100 + "%";


    sparkle.style.top =
        Math.random() * 100 + "%";


    sparkle.style.animationDelay =
        Math.random() * 5 + "s";


    sparkleBox.appendChild(
        sparkle
    );

}






// ==============================
// CONFETTI
// ==============================


const confettiBox =
    document.getElementById("confetti");


for (let i = 0; i < 60; i++) {


    let piece =
        document.createElement("span");


    piece.className =
        "confetti-piece";


    piece.style.left =
        Math.random() * 100 + "%";


    piece.style.animationDelay =
        Math.random() * 5 + "s";


    confettiBox.appendChild(
        piece
    );
}

// ==============================
// MEMORY POPUP
// ==============================


const memories =
    document.querySelectorAll(
        ".memory-card"
    );



memories.forEach(card => {


    card.addEventListener(
        "click",
        () => {


            card.classList.toggle(
                "active"
            );


        });


});
// MEMORY SCROLL REVEAL

const memoryCards =
    document.querySelectorAll(".memory-card");


const observer =
    new IntersectionObserver((entries) => {


        entries.forEach(entry => {


            if (entry.isIntersecting) {


                entry.target.classList.add(
                    "show"
                );


            }


        });


    }, {
        threshold: 0.3
    });



memoryCards.forEach(card => {

    observer.observe(card);

});

const blowButton =
    document.getElementById(
        "blowButton"
    );


blowButton.addEventListener(
    "click",
    () => {


        document.querySelectorAll(
            ".candle span"
        )
            .forEach(flame => {


                flame.style.display = "none";


            });



        document.getElementById(
            "wishText"
        ).innerHTML =
            "✨ Make a wish ❤️";



        createConfettiBurst();



    });

function createConfettiBurst(){

    const colors = [
        "#ff5fa2",
        "#ffd166",
        "#7ee8fa",
        "#ffffff",
        "#ff9ec7",
        "#c084fc"
    ];

    for(let i=0;i<220;i++){

        const piece=document.createElement("span");

        piece.className="burst";

        piece.style.background=
        colors[Math.floor(Math.random()*colors.length)];

        piece.style.left="50%";
        piece.style.top="50%";

        piece.style.setProperty(
            "--x",
            (Math.random()*1200-600)+"px"
        );

        piece.style.setProperty(
            "--y",
            (Math.random()*900-450)+"px"
        );

        piece.style.setProperty(
            "--r",
            (Math.random()*1080-540)+"deg"
        );

        document.body.appendChild(piece);

        setTimeout(()=>{
            piece.remove();
        },2500);

    }

}

const pages =
    document.querySelectorAll(
        ".scrapbook-pages img"
    );


const pageObserver =
    new IntersectionObserver((entries) => {


        entries.forEach(entry => {


            if (entry.isIntersecting) {


                entry.target.classList.add(
                    "show"
                );


            }


        });


    }, {
        threshold: .2
    });



pages.forEach(page => {

    pageObserver.observe(page);

});

const envelope =
    document.getElementById("envelope");

envelope.addEventListener("click", () => {

    envelope.classList.add("open");

    setTimeout(() => {

        document.querySelector(".letter-intro").style.display = "none";

        letterPaper.classList.add("show");

        typeLetter();

    }, 1500);

});


const letterPaper =
    document.querySelector(
        ".letter-paper"
    );


const letterText =
    document.getElementById(
        "letterText"
    );



const letterContent = `

Dear Zenisha ❤️


I don't know if words are enough
to explain how special you are.


But I wanted you to know that
your smile, your energy, and the way
you make people around you happy
is something truly beautiful.


Thank you for being a wonderful
part of my life.


Happy Birthday ❤️


`;

function typeLetter() {


    let i = 0;


    let typing =
        setInterval(() => {


            if (i < letterContent.length) {


                letterText.innerHTML +=
                    letterContent[i];


                i++;


            } else {


                clearInterval(typing);


                setTimeout(() => {


                    document.querySelector(
                        ".letter-ending"
                    ).style.display = "block";


                }, 1500);



                setTimeout(() => {


                    document.querySelector(
                        ".choice-buttons"
                    ).style.display = "flex";


                }, 3000);
            }


        }, 70);


}

const petalBox =
    document.getElementById(
        "letterPetals"
    );


for (let i = 0; i < 30; i++) {


    let petal =
        document.createElement("span");


    petal.innerHTML = "🌸";


    petal.style.left =
        Math.random() * 100 + "%";


    petal.style.animationDelay =
        Math.random() * 10 + "s";


    petal.style.animationDuration =
        (8 + Math.random() * 8) + "s";


    petalBox.appendChild(petal);


}

const letterHearts =
    document.getElementById("letterHearts");

function createLetterHeart() {

    const heart =
        document.createElement("div");

    heart.className = "heart-float";

    heart.innerHTML = "❤";

    heart.style.left =
        Math.random() * 100 + "%";

    heart.style.fontSize =
        (12 + Math.random() * 18) + "px";

    heart.style.animationDuration =
        (10 + Math.random() * 8) + "s";

    letterHearts.appendChild(heart);

    setTimeout(() => {

        heart.remove();

    }, 18000);

}

setInterval(createLetterHeart, 900);

const lettersparkleBox =
    document.getElementById("letterSparkles");

for (let i = 0; i < 45; i++) {

    const s =
        document.createElement("div");

    s.className = "sparkle";

    s.style.left =
        Math.random() * 100 + "%";

    s.style.top =
        Math.random() * 100 + "%";

    s.style.animationDelay =
        Math.random() * 4 + "s";

    lettersparkleBox.appendChild(s);

}

// ==============================
// FINAL CHOICE BUTTONS
// ==============================


function continueJourney() {

    // cinematic fade before moving

    document.body.style.transition =
        "opacity 2s ease";

    document.body.style.opacity = "0";


    setTimeout(() => {

        window.location.href =
            "index.html";

    }, 2000);

}



function stayHere() {

    document.body.style.transition =
        "opacity 2s ease";

    document.body.style.opacity = "0";


    setTimeout(() => {

        window.location.href =
            "landing.html";

    }, 2000);

}

const cakeParticles =
    document.getElementById("cakeParticles");


for (let i = 0; i < 50; i++) {

    let p =
        document.createElement("span");


    p.className = "cake-particle";


    p.style.left =
        Math.random() * 100 + "%";


    p.style.animationDelay =
        Math.random() * 8 + "s";


    cakeParticles.appendChild(p);

}

const flash=document.getElementById("flash");

flash.animate(

[
    {opacity:0},
    {opacity:.8},
    {opacity:0}
],

{
    duration:700
});
