//функция, которая перемешивает массив
function mix(mixArray) {
  var index, valueIndex;
  for (var i = 0; i <= mixArray.length - 1; i++) {
    index = Math.floor(Math.random() * i);
    valueIndex = mixArray[index];
    mixArray[index] = mixArray[i];
    mixArray[i] = valueIndex;
  }
  return mixArray;
}


//Массив вопросов и ответа
import { data_array } from './array.js'


var wrong = 0;
var cur_answer = 0;
var count_answer = 20;
var numQuestion = 1
var progressPersent = 0;
var wrongQuestion = [];
console.log(wrongQuestion);

var elements = document.getElementsByClassName('answer-choice');
mix(data_array); //перемешиваем массив

var buttons = document.querySelectorAll('.answer-choice');



function check(val) {
  //facts for quest
      
  if (val == 0) {
    document.querySelector('.block-quiz').classList.remove('block-display');
    document.getElementById('option1').style.display = 'block';
    document.getElementById('option2').style.display = 'block';
    document.getElementById('option3').style.display = 'block';
    document.getElementById('question').style.display = 'block';
    document.querySelector('.wronger').classList.add('block-display');
    document.querySelector('.progress-bar').classList.remove('block-display');
    document.querySelector('.block-info').style.display = 'flex';
    document.getElementById('option1').innerHTML = data_array[cur_answer][1];
    document.getElementById('option2').innerHTML = data_array[cur_answer][2];
    document.getElementById('option3').innerHTML = data_array[cur_answer][3];
    document.getElementById('question').innerHTML = data_array[cur_answer][0];
    document.getElementById('start').style.display = 'none';
    document.getElementById('main-page').style.display = 'block';
    var fact = facts[Math.floor(Math.random()*facts.length)];
    document.getElementById('facts').innerHTML = fact;
    


  } else {

    if (val == data_array[cur_answer][4]) {

      numQuestion++
      progressPersent += 5;
      ProgressBar()
      document.getElementById('result').innerHTML = 'Wspaniałe!';
      document.getElementById('result').style.color = '#75b800';

      for (var i = 0; i < elements.length; i++) {
        elements[data_array[cur_answer][4]].classList.add('green');

      };
    }
    else {

      wrong++;
      numQuestion++
      document.getElementById('result').style.color = '#ff2400';
      document.getElementById('result').innerHTML = "Zle!";
      document.getElementById('num-error').innerHTML = wrong;
      elements[val].classList.add('red');
      elements[data_array[cur_answer][4]].classList.add('green');
      progressPersent += 5;
      wrongQuestion.push(data_array[cur_answer][0]);
      ProgressBar()
    }

    setTimeout(func, 1500);
    cur_answer++;
    function func() {
      

      if (cur_answer < count_answer) {
        document.getElementById('option1').innerHTML = data_array[cur_answer][1];
        document.getElementById('result').innerHTML = 'Kontynuuj...';
        document.getElementById('result').style.color = 'black';
        document.getElementById('option2').innerHTML = data_array[cur_answer][2];
        document.getElementById('option3').innerHTML = data_array[cur_answer][3];
        document.getElementById('question').innerHTML = data_array[cur_answer][0];
        document.getElementById('num-answer').innerHTML = numQuestion;
        for (var i = 0; i < elements.length; i++) {
          elements[i].classList.remove('green', 'red');

        };
      }

      else if (cur_answer === count_answer && wrong == 2 || wrong == 1 || wrong == 0) {

        document.getElementById('option1').style.display = 'none';
        document.getElementById('option2').style.display = 'none';
        document.getElementById('option3').style.display = 'none';
        document.getElementById('question').style.display = 'none';
        document.querySelector('.block-info').style.display = 'none';
        document.querySelector('.progress-bar').classList.add('block-display');
        document.querySelector('.congrat').classList.remove('block-display');
        document.querySelector('.second').style.display = 'none'

        function gratFun (){
          var grats = grat[Math.floor(Math.random()*grat.length)];
          document.getElementById('grat-block').innerHTML = grats;
          }
        gratFun()
          
      }
      if (wrong === 3) {

        document.getElementById('option1').style.display = 'none';
        document.getElementById('option2').style.display = 'none';
        document.getElementById('option3').style.display = 'none';
        document.getElementById('question').style.display = 'none';
        document.querySelector('.wronger').classList.remove('block-display');
        document.querySelector('.progress-bar').classList.add('block-display');
        document.querySelector('.block-info').style.display = 'none';
        document.querySelector('.second').style.display = 'none'
        funWrong();


      }
    }
  }
  
}
function ProgressBar() {
  document.getElementById('progress').style.width = progressPersent + '%';
  ;
  
  if(progressPersent == 20 || progressPersent == 70){
    var fact = facts[Math.floor(Math.random()*facts.length)];
    document.getElementById('facts').innerHTML = fact;
    }
}

document.onload = check(0);



for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', funValue);
}

function funValue(event) {
  var button = event.target;
  var val = (button.dataset && button.dataset.answer) || null;
  buttons[1].style.pointerEvents = 'none';
  buttons[2].style.pointerEvents = 'none';
  buttons[3].style.pointerEvents = 'none';
  

  setTimeout(function () {
    buttons[1].style.pointerEvents = 'auto';
    buttons[2].style.pointerEvents = 'auto';
    buttons[3].style.pointerEvents = 'auto';
  }, 1500);

  check(val)
}

//выводим факты для теста
import { facts, grat } from './facts.js'

function funWrong (){
  if(wrongQuestion == 0){}
  else{
  for(var i = 0; i < wrongQuestion.length; i++){
    console.log(wrongQuestion[i])
  }
  }
}

