let userScore=0;
let CompScore=0;

const choice=document.querySelectorAll(".option");
const msg=document.querySelector("#message");
const userS=document.querySelector("#userscore");
const compS=document.querySelector("#compscore");

function CompPlay(){
    const arr=["rock" , "paper" , "scissors"];
    const arrIdx=Math.floor(Math.random()*3);
    console.log(`computer choice: ${arr[arrIdx]}`);
    return (arr[arrIdx]);
};

function drawgame(){
        console.log("Game Draw.");
        msg.innerText="Game was Draw. Play Again.";
        msg.style.backgroundColor="black";
    }



function playgame(userChoice){
    console.log(`user choice: ${userChoice}`);
    const CompChoice=CompPlay();
    
    if(userChoice   === CompChoice){
        drawgame();
    }else{
        let userwin=true;
        if(userChoice==="rock"){
            userwin=CompChoice==="scissors"?true:false;
        }else if(userChoice==="paper"){
            userwin=CompChoice==="rock"?true:false;
        }else if(userChoice==="scissors"){
            userwin=CompChoice==="rock"?false:true;
        }
        showWinner(userwin,userChoice,CompChoice);
    }

}

function showWinner(userwin,userChoice,CompChoice){
    if(userwin==true){
        userScore++;
        userS.innerText=userScore;
        console.log("You Won!!");
        msg.innerText=`You Won!! Your ${userChoice} beats ${CompChoice}`;
        msg.style.backgroundColor="green";

    }else{
        CompScore++;
        compS.innerText=CompScore;
        console.log("You Lost.");
        msg.innerText=`You Lost. Your ${userChoice} lost to ${CompChoice}`;
        msg.style.backgroundColor="red";
    }
}


choice.forEach((option)=>{
    option.addEventListener("click" , ()=>{
        const userChoice=option.getAttribute("id");
        playgame(userChoice);
        
    })
});

