const all_question = [{
	qImg:'assets/image/plane.svg',
	question:'Which is the oldest airline in the world?',
 	choise:{
 	correct:"KLM",
 	wrong:["Avianca","Qantas"]
  }

},{
	qImg:'assets/image/bote.svg',
	question:'Which is the largest port in the world?',
 	choise:{
 	correct:"Port of Shanghai",
 	wrong:["Port of Singapore","Port of Rotterdam"]
	}
},{
	qImg:'assets/image/bici.svg',
	question:'What is the longest distance cycling backwards?',
 	choise:{
 	correct:"337.60 km",
 	wrong:["89.30 km","675 km","337.60 km"]
	}
},{
	qImg:'assets/image/bus.svg',
	question:'What is the highest speed ever reached by a school bus?',
 	choise:{
 	correct:"590 km/h",
 	wrong:["320 km/h","245 km/h"]
	}
},{
	qImg:'assets/image/track.svg',
	question:'What is the longest car trip on one tank of gas?',
 	choise:{
 	correct:"2617 km",
 	wrong:["3568 km","1732 km"]
	}
}];

var progress=20;
$(".btn-select").click(function(){
  $("#percent").css("width",progress+"%");
  progress+=20;
});

var quizLength;
var quizItems;

function nextQuestion(){
    var quizLength = quizItems.length;
    
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

$(document).ready(function(){
    nextQuestion();
});

