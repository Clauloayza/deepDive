const questionNumber = 0;
const question;
const totalAnswers;
const correctAnswer;
const quizLength;

const constructor= [
  {
      "image":'../image/plane.svg',
      "question": 'Which is the oldest airline in the world?',
      "answers": ['Avianca','KLM','Qantas'],
      "correct": "1"
  },
  {
      "image":'https://assets1.ignimgs.com/2015/03/12/redoutscreenshot00229jpg-57ab43_320w.jpg',
      "question": 'Which is the oldest airline in the world?',
      "answers": ['Port of Shanghai','Port of Singapore','Port of Rotterdam'],
      "correct": "0"
  },
  {
      "image":'../image/bici.svg',
      "question": 'What is the longest distance cycling backwards?',
      "answers": ['89.30 km','675.10 km','337.60 km'],
      "correct": "2"
  },
  {
      "image":'../image/bus.svg',
      "question": 'What is the highest speed ever reached by a school bus?',
      "answers": ['590 km/h','320 km/h','245 km/h'],
      "correct": "0"
  },
  {
      "image":'../image/car.svg',
      "question": 'What is the longest car trip on one tank of gas?',
      "answers": ['2617 km','3568 km','1732 km'],
      "correct": "0"  
  }
];  

function nuevaPregunta(){
  quizLength = constructor.length;
  if(questionNumber === quizLength){ 
    $('.quiz-abc').fadeOut(function(){
      setTimeout(function(){
        html("Your total score: " + totalScore).fadeIn();
      },500);
    });
  } else {
    $('#question, #choise').html('');
    $('#img-next').attr('src','');
    question = constructor[questionNumber]['question'];
    image = constructor[questionNumber]['image'];
    totalAnswers = constructor[questionNumber].answers.length;
    correctAnswer = constructor[questionNumber]['correct'];
    if (image !== "") {
      $('#img-next').attr('src',image).show();
    } else {
      $('#img-next').hide();
    }
    $('#question').text(question);
    for(i=0;i<totalAnswers;i++){
      $('#answers').append('<div id="'+ i +'" class="answer-button">'+constructor[questionNumber].answers[i]+'</div>');
    }
    $('.quiz-abc').fadeTo(500,1);
    $(".answer-button").on('click',answerQuestion);
    pulseClick(0);
  }
}

function answerQuestion(){
  $(".answer-button").off('click',answerQuestion);
  var a = this.id;
  console.log("Your answer: "+ a +"; The correct answer: " + correctAnswer);
  checkScore(a); 
  questionNumber++;
  $('.quiz-abc').fadeTo(500,0, function(){
    nextQuestion();
  });
}


function pulseClick(i){
  var btnCount = $('#answers').find('.answer-button').length-1;
  console.log(btnCount);
  $('#answers').find('.answer-button').eq(i).addClass('pulse').one('webkitAnimationEnd oanimationend msAnimationEnd animationend',function(e) {
    $(this).removeClass('pulse');
    if(i === btnCount){
      i=0;
    } else {
      i++;
    }
    pulseClick(i);
  });
}

$(document).ready(function(){
  nextQuestion();
});