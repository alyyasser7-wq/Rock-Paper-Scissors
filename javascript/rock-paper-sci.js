let computer_options=["rock", "paper","scissors"];
const roundsCount=5
let computer=[];
let player="";
let computerScore=0;
let YourScore=0;
let tieScore=0;

const rbtn=document.querySelector("#rock");
const pbtn=document.querySelector('#paper');
const sbtn=document.querySelector('#scissors');
const pres=document.querySelector('#p_result');
const cres=document.querySelector('#c_result');
const fwinner=document.querySelector('#fwinner');
// const playagain=document.querySelector("#restart");


//Rock button listener
rbtn.addEventListener('click',function(){
    oneround(this.id);
});
//Paper button listener
pbtn.addEventListener('click',function(){
    oneround(this.id);
});
//Scissors button listener
sbtn.addEventListener('click',function(){
    oneround(this.id);
});
// playagain.addEventListener('click',function(){
//     newgame();
// });


//Computer Random Choose 
function computerPlay(computer_options)
{
    let computerSelection=computer_options[Math.floor(Math.random()*computer_options.length)];   
    return computerSelection;
}

function checkwinner(computer,player)
{
    if (computer == "paper" && player=="rock" || 
    computer == "rock" && player=="scissors"||
    computer == "scissors" && player=="paper")
    {   
        pres.innerText=`You Lose!! ${computer} beats ${player}`
        computerScore+=1;
    }
    else if (computer==player)
    {   
        pres.innerText=`TIE`
        tieScore+=1;
    }
    else
    {   
        pres.innerText=`You Win!! ${player} beats ${computer}`
        YourScore+=1;
    }
    if(YourScore < 5 && computerScore < 5 ){
        cres.innerText=`Player Score: ${YourScore}  ||  Computer Score: ${computerScore}  ||  Ties: ${tieScore}`;
        fwinner.innerText="Choose Paper, Rock or scissors"
    }
    else if(YourScore==5){
        cres.innerText=`Player Score: ${YourScore}  ||  Computer Score: ${computerScore} || Ties: ${tieScore}`;
        fwinner.innerText="YOU WIN!!!";
        disable_button();
        createbutton();
    }
    else if(computerScore==5){
        cres.innerText=`Player Score: ${YourScore}  ||  Computer Score: ${computerScore}  ||  Ties: ${tieScore}`;
        fwinner.innerText="YOU LOSE!!!";
        disable_button();
        createbutton();
    }
    else{
        return;
    }
}


function oneround(player){
        computer=computerPlay(computer_options);
        checkwinner(computer,player);
}

function newgame(){
    YourScore=0;
    computerScore=0;
    tieScore=0;
    cres.innerText='';
    pres.innerText='';
    fwinner.innerText='';
    rbtn.disabled = false;
    pbtn.disabled = false;
    sbtn.disabled = false;
}

function createbutton(){
        const restart = document.createElement("button");
        const rbtn_txt = document.createTextNode("PLAY AGAIN");
        restart.appendChild(rbtn_txt);
        const restartdiv = document.querySelector("#restartdiv");
        restart.setAttribute(
            'style','width: 250px; height: 75px; background-color: rgb(9, 0,183); color: rgb(255, 212, 147); font-size: 24px; font-weight: 700; margin-top:10px',
        );
        restartdiv.appendChild(restart);
        restart.addEventListener('click',function(){
            newgame();
            restartdiv.removeChild(restart)
        });
}

function disable_button(){
    rbtn.disabled = true;
    pbtn.disabled = true;
    sbtn.disabled = true;
}