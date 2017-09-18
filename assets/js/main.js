var progress=20;
$(".btn-select").click(function(){
  $("#percent").css("width",progress+"%");
  progress+=20;
});

var questionNumber =0;
var totalScore=0;
var question;
var totalAnswers;
var correcAnswers;
var quizLength;
var quizItems=[
    {
        "qImg": "../image/plane.svg",
        "question":"Which is the oldest airline in the world?",
        "answer":["Avianca","KLM","Qantas"],
        "correct":"1"
    },{
       "qImg": "../image/bote.svg",
        "question":"Which is the largest port in the world?",
        "answer":["Port of Shanghai","Port of Singapore","Port of Rotterdam"],
        "correct":"0" 
    },{
       "qImg": "../image/bici.svg",
        "question":"What is the longest distance cycling backwards?",
        "answer":["89.30 km","675 km","337.60 km"],
        "correct":"3" 
    },{
        "qImg": "../image/bus.svg",
        "question":"What is the highest speed ever reached by a school bus?",
        "answer":["590 km/h","320 km/h","245 km/h"],
        "correct":"0"
    },{
       "qImg": "../image/car.svg",
        "question":"What is the longest car trip on one tank of gas?",
        "answer":["2617 km","3568 km","1732 km"],
        "correct":"0" 
    }
];

$(document).ready(function(){
    nextQuestion();
});

function nextQuestion(){
    quizLength = quizItems.length;
    
    if(questionNumber==quizLength){
        $('.deepQuestion').fadeOut(function(){
        setTimeout(function(){
            $('#score').html("Your total Score:" + totalScore).fadeIn();
        },500);
        });
    }else{
        $('#question, #answers').html(''),
        $('#qImg').attr('src','');
        question = quizItems[questionNumber]['question'];
        qImg = quizItems[questionNumber]['qImg'];
        totalAnswers = quizItems[questionNumber].answers.length;
         correctAnswer = quizItems[questionNumber]['correct'];
        if (qImg !== "") {
        $('#qImg').attr('src',qImg).show();
          } else {
            $('#qImg').hide();
      }
        
    }
}


