// Interacting
var trigger = document.querySelector('.trigger')
var body = document.querySelector('body')

trigger.addEventListener('click', zoom)

function zoom() {
	console.log('it works')

	if (body.id != 'zoom') {
		body.id = 'zoom'
	} else {
		body.id = ''
	}

}



var deathStar = document.querySelector('.deathStar')

deathStar.addEventListener('mouseenter', showShadow)
deathStar.addEventListener('mouseleave', hideShadow)

function showShadow() {
	deathStar.classList.add('eclipse')
}

function hideShadow() {
	deathStar.classList.remove('eclipse')
}

function mDown(obj) {
  obj.style.backgroundColor = "black";
  obj.innerHTML = "That's no moon";
}

function mUp(obj) {
  obj.style.backgroundColor="black";
  obj.innerHTML="It's the Death Star!";
}