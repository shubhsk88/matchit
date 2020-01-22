/*
 * Create a list that holds all of your cards
 */
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
// var shake=document.createElement('link');
// shake.rel='stylesheet';
// shake.type='text/css';
// shake.href="shake_effect.css";
// document.getElementsByTagName('head')[0].appendChild()

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
/*
 * Display the cards on the page
 *   - shuffle the list of cards using the provided "shuffle" method below
 *   - loop through each card and create its HTML
 *   - add each card's HTML to the page
 */


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



/*
 * set up the event listener for a card. If a card is clicked:
 *  - display the card's symbol (put this functionality in another function that you call from this one)
 *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
 *  - if the list already has another card, check to see if the two cards match
 *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
 *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */




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

