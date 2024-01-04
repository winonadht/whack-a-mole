//les éléments
const holes = document.querySelectorAll('.hole');
const points = document.getElementById('score');
const timer = document.getElementById('timer');
const startBtn = document.getElementById('startButton');

// les variables
let score = 0;
let time = 10;
let currentPos; 

// quand on clique sur le cercle, il verifie si la taupe est la et si elle y est , il augmente le score
let position = document.querySelector('taupe');
    window.addEventListener('click', (e) => { 
        console.log(e);
        if (e.target.classList[0] === 'taupe') {
            score++;
        points.innerHTML = score;
         }
     })


// ajouter un event sur le bouton start 

startBtn.addEventListener('click', start);

function start() {
    let startGame = setInterval(() => {
        holes.forEach(hole => {
            hole.innerHTML = '';
        });

        currentPos = Math.floor(Math.random() * 9);
        holes[currentPos].innerHTML = '<div class="taupe"></div>';


        }, 1000);
    }





