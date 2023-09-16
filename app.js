
let $ms = document.querySelector('#milliseconds');
let $seconds = document.querySelector('#seconds');
let $minutes = document.querySelector('#minutes');

let ms = 0;
let seconds = 0;
let minutes = 0;
let interval;


let $btnPlay = document.querySelector('#btn-play');
let $btnRestart = document.querySelector('#btn-restart');

$btnPlay.addEventListener("click", timer);
$btnRestart.addEventListener("click", restart);


const $cards = document.querySelectorAll('.flip-card-inner');

toFlipOrNotToFlip($cards);
shuffleCards($cards);

//-----------CARDS STYLE AND ROTATION-----------

function toFlipOrNotToFlip(cards){
	
	cards.forEach(function(card) {
		card.addEventListener("click", () => {

			const doTheyHaveStyles = card.style.transform !== "";
			onlyTwoCardsFlippedOver(card)
			if(!doTheyHaveStyles){
				addStyle(card);
			}
			else{
				removeStyle(card);
			}
		});
	
	});
}
function addStyle(card) {
	
	const rotateYOrX = randomFlip();

	rotationCorrection(rotateYOrX,card);

	card.style.transform = rotateYOrX;
	
}
function removeStyle(card){

	card.style.transform = '';
}

function randomFlip(){

	let number = Math.ceil(Math.random()*2);

	rotateYOrX = number === 1 ? 'rotateY(180deg)' : 'rotateX(180deg)'; 


	return rotateYOrX;
}

function rotationCorrection(rotate, card){
		
	if(rotate === 'rotateX(180deg)'){
		card.querySelector('.flip-card-back > h3').style.transform = 'rotate(180deg)';
	}
	if(rotate === 'rotateY(180deg)'){
		card.querySelector('.flip-card-back > h3').style.transform = '';

	}

}

//-----------STOPWATCH-----------

function timer(){

	clearInterval(interval);	
	interval = setInterval(startTimer, 10);
}

function startTimer(){
	
	ms++;

	if(ms <= 9){
		$ms.innerHTML = "0" + ms;
	}
	if(ms > 9){
		$ms.innerHTML = ms;
	} 
	
	if(ms > 99){
		
		seconds++;
		
		$seconds.innerHTML = "0" + seconds;
		ms = 0;
		$ms.innerHTML = "0" + ms;
	}
	
	if(seconds > 9){
		$seconds.innerHTML = seconds;
	}

	if(seconds > 59){
		
		minutes++;

		$minutes.innerHTML = "0" + minutes;
		seconds = 0;
		$seconds.innerHTML = "0" + seconds;
	}

	if(minutes > 9){
		$minutes.innerHTML = minutes;
	}

	if(minutes == 59){
		alert("El juego se va a reiniciar.");
		restart()
	}
}

function restart(){
	
	clearInterval(interval);

	ms = "00";
	seconds = "00";
	minutes = "00";

	$ms.innerHTML = ms;
	$seconds.innerHTML =  	seconds;
	$minutes.innerHTML = minutes;

}

//-----------CARDS-----------

function shuffleCards(cards){

	const messyCardsIcons = messyIcons();

	cards.forEach((card, cardIndex)=>{
		
		card.querySelector('.flip-card-back > h3').innerHTML = messyCardsIcons[cardIndex];
	});

}

function messyIcons(){
	const cardsIcons = [
		'<i class="fa-brands fa-git fa-2xl"></i>',
		'<i <i class="fa-brands fa-css3 fa-2xl"></i>',
		'<i class="fa-brands fa-html5 fa-2xl"></i>',
		'<i class="fa-brands fa-github fa-2xl"></i>',
		'<i class="fa-brands fa-react fa-2xl"></i>',
		'<i class="fa-brands fa-square-js fa-2xl"></i>',
		'<i class="fa-brands fa-git fa-2xl"></i>',
		'<i <i class="fa-brands fa-css3 fa-2xl"></i>',
		'<i class="fa-brands fa-html5 fa-2xl"></i>',
		'<i class="fa-brands fa-github fa-2xl"></i>',
		'<i class="fa-brands fa-react fa-2xl"></i>',
		'<i class="fa-brands fa-square-js fa-2xl"></i>'
	];


	const cloneCardsIncons = cardsIcons.slice();
	const messyCardsIcons = [];

	while(cloneCardsIncons.length){

		const randomIndex = Math.floor(Math.random() * cloneCardsIncons.length);

		messyCardsIcons.push(cloneCardsIncons.splice(randomIndex, 1)[0])

	}

	return messyCardsIcons
}

const onlyTwoCard = [];
onlyTwoCard.length = 3;

function onlyTwoCardsFlippedOver(card){
  
  onlyTwoCard.push(card)
  console.log(onlyTwoCard)
}