
var cards=['fa-diamond','fa-diamond',
            'fa-paper-plane-o','fa-paper-plane-o',
             ' fa-anchor',' fa-anchor',
             ' fa-bolt',' fa-bolt',
             ' fa-bomb',' fa-bomb',
             ' fa-bicycle',' fa-bicycle',
             ' fa-cube',' fa-cube',
             ' fa-leaf',' fa-leaf',

            ];

function generateCard(card)
{
    return `<li class="card" data-card="${card}"><i class="fa ${card}"></i></li>`
}

let move=0;

function initGame(){
    let cardHTMl=shuffle(cards).map(function(card){
        return generateCard(card);
    });
    let na=document.querySelector('.deck');
    
    
    na.innerHTML=cardHTMl.join('');
    
    
}
initGame();
const allCards=document.querySelectorAll(".card");
let openCards=[];
let moveCounter=document.querySelector('.moves');

// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}


function startAgain()
{
    initGame();
    
    move=0;
    moveCounter.innerText=move;

}
function moveCounter1()
{
    move++;
    document.querySelector('.moves');
    moveCounter.innerText=move;

}






let totalCount=0;

allCards.forEach(function(card){
    card.addEventListener("click",function(e){
        if(!card.classList.contains('open')&& !card.classList.contains("show")&& !card.classList.contains("match")){

            openCards.push(card);
            card.classList.add("open","show");
            var firstCard=openCards[0].dataset.card;
           



           if(openCards.length===2)
           {
               if(openCards[0].dataset.card==openCards[1].dataset.card)
               {
                   openCards[0].classList.add('match','show','open');
                   openCards[1].classList.add('match','show','open');
                   openCards=[]
                   totalCount++;

               }
               else{
                    setTimeout(function(){
                        openCards.forEach(function(card)
                        {
                            card.classList.remove("open","show");
        
                            

                        });
                        openCards=[];
                    },100);
                }
                    
                 
                moveCounter1();
                    
                    
                }
                
        }   
       
    });
    
    

    

});

// document.querySelector(".restart").onclick = startAgain;

