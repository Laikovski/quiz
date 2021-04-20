function positionMenu()
{
var screen = window.innerHeight;
var positionBlock1 = document.getElementById('politiki');
var positionBlock2 = document.getElementById('kroli');
var positionBlock3 = document.getElementById('pizarze');

var position1 = positionBlock1.getBoundingClientRect().top;
var position2 = positionBlock2.getBoundingClientRect().top;
var position3 = positionBlock3.getBoundingClientRect().top;

if(position1 < screen){
    positionBlock1.classList.add('active');
    positionBlock2.classList.remove('active');
    positionBlock3.classList.remove('active');
}

}

window.addEventListener('scroll', positionMenu);