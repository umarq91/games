let score = document.getElementById("score");
const squares = document.querySelectorAll(".square");
const container = document.getElementById('squares')
let complexitybtns = document.querySelectorAll("button");



let currentPosition = null;
let result = 0;
let start = null;

score.textContent = result;

            function startGame() {
            squares.forEach((square) => {
                square.classList.remove("mole");
            });

            const randomSquare = squares[Math.floor(Math.random() * 9)];
            randomSquare.classList.add("mole");
            currentPosition = randomSquare.id;
            }

        squares.forEach((square) => {
        square.addEventListener("mousedown", () => {
           
            if (currentPosition == square.id) {
            result++;
            score.textContent = result;
            square.classList.remove("mole");
            }
            // else{
            //     result=0;
            // score.textContent = result;
            // } 
            //un comment this part if you don't want to reset the score on miss
        });
        });


complexitybtns.forEach((btn)=>{
   
            btn.addEventListener('click',()=>{
                result=0
                score.textContent=result
                if(btn.innerText=='Easy') {
                    start = setInterval(startGame, 4000);
                }else if(btn.innerText=='Medium'){
                    start = setInterval(startGame, 2000);
                }else if(btn.innerText=='Hard'){
                    start = setInterval(startGame, 500);
                }else if(btn.innerText=='Expert'){
                    start = setInterval(startGame, 300);
                }
            })
}
)