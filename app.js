


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

let $flipCard = document.querySelectorAll('.flip-card-inner');

console.log($flipCard);

function flipCard(){
}

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

