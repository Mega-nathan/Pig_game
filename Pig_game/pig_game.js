const player1=document.querySelector('.player-1');
const player2=document.querySelector('.player-2');
let activePlayer=1;
let gameOver=true;
let myinterval;
const text = function(){
    document.querySelector('.dice').src=`dice-${1}.png`;
    document.querySelector(`.current-player-${activePlayer}`).textContent=0;
};

const changePlayer=function(){
    player1.classList.toggle('active-player');
    player2.classList.toggle('active-player');
    activePlayer=activePlayer===1?2:1;
}

const checkPlayer=function(){
    current=Number(document.querySelector(`.current-player-${activePlayer}`).textContent);
    currentPlayer=Number(document.querySelector(`.player-score-${activePlayer}`).textContent);
    if(current+currentPlayer>=50){
        console.log('Final Reached');
        
        myinterval=setInterval(text,500);
        
        document.querySelector(`.player-score-${activePlayer}`).textContent=current+currentPlayer;
        document.querySelector(`.player-${activePlayer}`).classList.add('player--winner');
        gameOver=false;
    }
    
    
}


document.querySelector('.btn-roll').addEventListener('click',function(){
    if(gameOver==true){
        const randoms=Math.trunc(Math.random()*6)+1;
        let current=Number(document.querySelector(`.current-player-${activePlayer}`).textContent);
        let currentPlayer=Number(document.querySelector(`.player-score-${activePlayer}`).textContent);
        document.querySelector('.dice').src=`dice-${randoms}.png`;
        
        if(randoms==1){
            document.querySelector(`.current-player-${activePlayer}`).textContent=0;
            changePlayer();
        }
        else{
            console.log(document.querySelector(`.current-player-${activePlayer}`).textContent);
            document.querySelector(`.current-player-${activePlayer}`).textContent=current+randoms;
            checkPlayer();
        }

        

        
    }
});

document.querySelector('.btn-hold').addEventListener('click',function(){
    if(gameOver==true){
        let current=Number(document.querySelector(`.current-player-${activePlayer}`).textContent);
        let currentPlayer=Number(document.querySelector(`.player-score-${activePlayer}`).textContent);
        if(current+currentPlayer>=100){
            console.log('Final Reached');
                document.querySelector('.dice').src=`dice-${1}.png`;
                document.querySelector(`.current-player-${activePlayer}`).textContent=current+randoms;
                document.querySelector(`.player-score-${activePlayer}`).textContent=current+currentPlayer;
                document.querySelector(`.player-${activePlayer}`).classList.add('player--winner');
                gameOver=false;
        }
        else{
        document.querySelector(`.player-score-${activePlayer}`).textContent=current+currentPlayer;
        document.querySelector(`.current-player-${activePlayer}`).textContent=0;
        changePlayer();
        }
        document.querySelector('.dice').src=`dice-${1}.png`;

    }
});

document.querySelector('.btn-new').addEventListener('click',function(){
    clearInterval(myinterval);
    document.querySelector('.current-player-1').textContent=0;
    document.querySelector('.current-player-2').textContent=0;
    document.querySelector('.player-score-1').textContent=0;
    document.querySelector('.player-score-2').textContent=0;
    gameOver=true;
    document.querySelector(`.player-1`).classList.remove('player--winner');
    document.querySelector(`.player-2`).classList.remove('player--winner');
    if(!(player1.classList.contains('active-player'))){
        player1.classList.add('active-player');
    }
    if(player2.classList.contains('active-player')){
        player2.classList.remove('active-player');
    }
    clearInterval(text);
    document.querySelector('.dice').src=`dice-${1}.png`;

    
});

/* 

if(document.querySelector(`.player-${activePlayer}`).classList.contains('player--winner')){
            document.querySelector(`.current-player-${activePlayer}`).textContent=0;
        }
        checkPlayer();

*/
