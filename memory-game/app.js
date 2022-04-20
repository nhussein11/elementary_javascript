//Grab a couple of things

const section=document.querySelector("section");
let playerLivesCount=document.querySelector("span");
let playerLives = 6;

//Link text
playerLivesCount.textContent=playerLives;
 
//Generate the data


const getData=() =>[
    {imgSrc: './images/beatles.jpeg', name:"beatles"},
    {imgSrc: './images/blink182.jpeg', name:"blink182"},
    {imgSrc: './images/card.jpeg', name:"card"},
    {imgSrc: './images/fkatwigs.jpeg', name:"fkatwigs"},
    {imgSrc: './images/fleetwood.jpeg', name:"fleetwood"},
    {imgSrc: './images/joy-division.jpeg', name:"joy-division"},
    {imgSrc: './images/ledzep.jpeg', name:"ledzep"},
    {imgSrc: './images/metallica.jpeg', name:"metallica"},
    {imgSrc: './images/pinkfloyd.jpeg', name:"pinkfloyd"},
    {imgSrc: './images/beatles.jpeg', name:"beatles"},
    {imgSrc: './images/blink182.jpeg', name:"blink182"},
    {imgSrc: './images/card.jpeg', name:"card"},
    {imgSrc: './images/fkatwigs.jpeg', name:"fkatwigs"},
    {imgSrc: './images/fleetwood.jpeg', name:"fleetwood"},
    {imgSrc: './images/joy-division.jpeg', name:"joy-division"},
    {imgSrc: './images/ledzep.jpeg', name:"ledzep"},
    {imgSrc: './images/metallica.jpeg', name:"metallica"},
    {imgSrc: './images/pinkfloyd.jpeg', name:"pinkfloyd"}
];

//Randomize
const  randomize =()=>{
    const cardData = getData();
    console.log(cardData);
    cardData.sort(()=>Math.random()-0.5);
    return cardData;
}



//Card Generator Function
const cardGenerator=()=>{
    const cardData = randomize();
    //HTML
   
    
    cardData.forEach((item) =>{
        const card = document.createElement('div');
        const face =document.createElement('img');
        const back =document.createElement('div');
        card.classList="card";
        face.classList="face";
        back.classList="back";
        //Attach the info to the cards
        face.src=item.imgSrc;
        card.setAttribute('name',item.name);

        //Attach the cards to the section
        section.appendChild(card);
        card.appendChild(face);
        card.appendChild(back);
        
        card.addEventListener('click',(e)=>{
            card.classList.toggle("toggleCard");
            checkCards(e);
        });
    });
};

//Check Cards
const checkCards =(e)=>{
    const clickedCard = e.target;
    clickedCard.classList.add("flipped");
    const flippedCards = document.querySelectorAll(".flipped");
    const toggleCard = document.querySelectorAll('.toggleCard');
    
    if (flippedCards.length===2){
        if(
            flippedCards[0].getAttribute('name') ===
            flippedCards[1].getAttribute('name')
        ) {
            console.log("match");
            flippedCards.forEach(card=>{
                card.classList.remove('flipped');
                card.style.pointerEvents = 'none'; 
            });
        }else{
            console.log("wrong");
            flippedCards.forEach(card=>{
                card.classList.remove('flipped');
                setTimeout(()=> card.classList.remove('toggleCard'),1000);
            });
            playerLives--;
            if (playerLives===0){
                restart('Try again :(');
                playerLives=6;
            }
            playerLivesCount.textContent=playerLives;
        }
    }
    //Winner
    if(toggleCard.length ===16){restart('You won :)');}
};

//restart
const restart =(text)=>{
    let cardData = randomize();
    let faces =document.querySelectorAll('.face');
    let cards =document.querySelectorAll('.card');
    section.style.pointerEvents="none";
    cardData.forEach((item,index)=>{
        cards[index].classList.remove('toggleCard');
        //Randomize again
        setTimeout(()=>{
            cards[index].style.pointerEvents='all';
            faces[index].src = item.imgSrc;
            cards[index].setAttribute('name',item.name);
            section.style.pointerEvents="all";
        },1000);
    });
    
    setTimeout(()=>{
        window.alert((text),100);
    });
}

cardGenerator();