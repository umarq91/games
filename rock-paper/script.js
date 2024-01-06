
const possibleChoices = document.querySelectorAll('button')
const myChoice = document.getElementById('user-choice')
const pcChoice = document.getElementById('pc-choice')
const finalResult = document.getElementById('result')

const parent = document.createElement('div')
parent.className = 'Parenttt'
parent.setAttribute('targt','umer')
console.log(parent.parentElement);

        possibleChoices.forEach((choice)=>{
                  choice.addEventListener('click',(e)=>{

              makeChoices(e.target.id)
        })
        })

//make choices function
function makeChoices(userChoice){
    const options = ['rock','paper','scissor']
    const computerChoice = options[Math.floor(Math.random()*3)]
    result = determineWiner(userChoice,computerChoice)
    myChoice.innerHTML = userChoice
    pcChoice.innerHTML = computerChoice
    finalResult.innerHTML=result
   
}


// determine winner function 
function determineWiner(userChoice,computerChoice){

    if(userChoice === computerChoice ) return 'Draw'

    if((userChoice === 'rock' && computerChoice === 'scissors') ||  (userChoice === 'paper' && computerChoice === 'rock') || (userChoice === 'scissors' && computerChoice === 'paper')){
        return 'User Won'
    }else{
        return 'Computer Won'
    }
}