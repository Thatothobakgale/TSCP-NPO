const animatedText = document.getElementById('slogan');

window.addEventListener('load', () =>{
	setTimeout(() =>{
		animatedText.classList.add('show');
	}, 800); //adjust delay
});

let currentSlid = 1;
let currentSlide = 1;
let currentSlidee = 1;
let currentSlideee = 1;
let currentSlideeee = 1;

function next(){
	document.getElementById(`slid${currentSlid}`).style.display = 'none';
	currentSlid++;
	
	if(document.getElementById(`slid${currentSlid}`)){
		document.getElementById(`slid${currentSlid}`).style.display = 'block';
	}
	else{
		currentSlid = 1;
		document.getElementById(`slid${currentSlid}`).style.display = 'block';
	}
}

function next2(){
	document.getElementById(`slide${currentSlide}`).style.display = 'none';
	currentSlide++;
	
	if(document.getElementById(`slide${currentSlide}`)){
		document.getElementById(`slide${currentSlide}`).style.display = 'block';
	}
	else{
		currentSlide = 1;
		document.getElementById(`slide${currentSlide}`).style.display = 'block';
	}
}

function next3(){
	document.getElementById(`slidee${currentSlidee}`).style.display = 'none';
	currentSlidee++;
	
	if(document.getElementById(`slidee${currentSlidee}`)){
		document.getElementById(`slidee${currentSlidee}`).style.display = 'block';
	}
	else{
		currentSlidee = 1;
		document.getElementById(`slidee${currentSlidee}`).style.display = 'block';
	}
}

function next4(){
	document.getElementById(`slideee${currentSlideee}`).style.display = 'none';
	currentSlideee++;
	
	if(document.getElementById(`slideee${currentSlideee}`)){
		document.getElementById(`slideee${currentSlideee}`).style.display = 'block';
	}
	else{
		currentSlideee = 1;
		document.getElementById(`slideee${currentSlideee}`).style.display = 'block';
	}
}

function next5(){
	document.getElementById(`slideeee${currentSlideeee}`).style.display = 'none';
	currentSlideeee++;
	
	if(document.getElementById(`slideeee${currentSlideeee}`)){
		document.getElementById(`slideeee${currentSlideeee}`).style.display = 'block';
	}
	else{
		currentSlideeee = 1;
		document.getElementById(`slideeee${currentSlideeee}`).style.display = 'block';
	}
}

const paragraph = document.querySelector('.first-paragraph');

setTimeout(() => {
	paragraph.classList.add('visible');
}, 4000); //fade-in after 5s

const curtains = document.querySelector('.curtains');
const leftCurtain = document.querySelector('.left');
const rightCurtain = document.querySelector('.right');
const slides = document.querySelectorAll('.slide');
let currentSllide = 0;

function openCurtains(){
	leftCurtain.style.transform = 'translateX(-100%)';
	rightCurtain.style.transform = 'translateX(100%)';
}

function closeCurtains(){
	leftCurtain.style.transform = 'translateX(0)';
	rightCurtain.style.transform = 'translateX(0)';
}

function showNextSlide(){
	
	//Close curtains to cover the picture
	leftCurtain.style.transform = 'translateX(0)';
	rightCurtain.style.transform = 'translateX(0)';
	
	//wait for curtains to Close
	setTimeout(() => {
		//hide current slide
	slides[currentSllide].classList.remove('active');
	
	//show next slide
	currentSllide = (currentSllide + 1) % slides.length;
	slides[currentSllide].classList.add('active');
	
	//open curtains to reveal new picture
	openCurtains();
	 
	setTimeout(() => {
		closeCurtains();
		
		//wait for curtains to Close
		setTimeout(() => {
			showNextSlide();
		}, 2000);
	  }, 5000); 
	}, 2000);
}

showNextSlide();