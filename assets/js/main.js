'use strict'

const deepdive = {

	questions:{
		0:{
			answer: 'Which is the oldest airline in the world?',
			choise: {A:'Avianca', B:'KLM', C:'Qantas'},
			result: 'KLM',
			image: 'assets/image/plane.svg'
		},
		1:{
			answer: 'Which is the largest port in the world?',
			choise: {A:'Port of Shanghai', B:'Port of Singapore', C:'Port of Rotterdam'},
			result: 'Port of Shanghai',
			image: 'assets/image/bote.svg'
		},
		2:{
			answer: 'What is the longest distance cycling backwards?',
			choise: {A:'89.30 km', B:'675.10 km', C:'337.60 km'},
			result: '337.60 km',
			image: 'assets/image/bici.svg'
		},
		3:{
			answer: 'What is the highest speed ever reached by a school bus?',
			choise: {A:'590 km/h', B:'320 km/h', C:'245 km/h'},
			result: '590 km/h',
			image: 'assets/image/bus.svg'
		},
		4:{
			answer: 'What is the longest car trip on one tank of gas?',
			choise: {A:'2617 km', B:'3568 km', C:'1732 km'},
			result: '2617 km',
			image: 'assets/image/car.svg'
		}
  },
  
	arrow: {
		next: null,
		previous: null
  },
  
	answersCont: {
		all:null,
		answer: 0,
		allPoints: 0
  },
  
  group: [],
  
  check: true,
  
  progressBar: ()=>{
		$('.progress-label').html(`${deepdive.group.length} of ${deepdive.answersCont.all} answered`);
		let avance = 20*deepdive.group.length;
		$(".progress-bar").width(`${avance}%`);
  },
  
 	crearanswer : ()=>{
    deepdive.progressBar();

    $("#quiz").empty();
        let answerActual = deepdive.questions[deepdive.answersCont.answer];
    
		$("header").html(`<image src="${answerActual.image}">`);
		$("#quiz").append(
			`<h1 class="text-center"> ${answerActual.answer} </h1>
			 <div class="choise row"></div>`
		)
		$.each(answerActual.choise, (key,value)=>{
			let clase = '';
			if (deepdive.group[deepdive.answersCont.answer] == value) {
				clase = 'seleccionado';
			} 
			$('<div>').addClass(`col-md-4 ${clase}`).html(
				`<button class="btn"><span class='alternativa'>${key}</span>${value}</button>`
			).appendTo(".choise").click((e)=>{
				deepdive.saveResult(e.currentTarget, value);
			})
		})
  },
  
	saveResult: (e, value)=>{
		if(deepdive.check){
			$(e).addClass('seleccionado');
			deepdive.check=false;
			deepdive.group[deepdive.answersCont.answer]=value;
			let t = setTimeout(()=>{
				deepdive.check=true;
				deepdive.next();
			}, 100);
		}
  },
  
	next : ()=>{
		deepdive.answersCont.answer++;
		if(deepdive.answersCont.answer < deepdive.answersCont.all){
			deepdive.crearanswer();
		}else {
			deepdive.mostrargroup();
		}
  },
  
	previous: ()=>{
		deepdive.answersCont.answer--;
		deepdive.crearanswer();
	},
  
  mostrargroup: ()=>{
		$("header").html(`<image src="assets/image/track.svg">`);
    deepdive.progressBar();
    
		deepdive.listgroup(false, 'Submit', deepdive.evaluate);
		deepdive.arrow.next.addClass('disabled').off('click');
		$('#group').prepend(`<h1 class="text-center">Here are your answer:</h1>`);
	},

	listgroup:(evaluate, button, proceso)=>{
    $('#quiz').empty().append
    ('<div id="group"></div>');

		$.each(deepdive.group, (e,f)=>{
			let success = '';
			let info=f;
			if(evaluate && f==deepdive.questions[e].result){
				deepdive.answersCont.allPoints++;
				success='class="text-success"';
			}else if(evaluate){
				success=`class='text-danger'`;
				info = `<strike>${f}</strike> ${deepdive.questions[e].result}`;
			}
			$("#group").append(`<p ${success}>${e+1}. ${deepdive.questions[e].answer} <strong>${info}</strong></p>`)
    })
    
		$('<div>').addClass('text-center').append(
			$('<button>').addClass('btn-lg btn-dark').html(button).click(proceso)
		).appendTo("#group");
	},
	
	evaluate:()=>{
		$('#progreso').hide();
		$('#arrows').hide();
		deepdive.listgroup(true, 'regresar al inicio', deepdive.inicio);
    let expretion='';
    
		if(deepdive.answersCont.allPoints === 0){
			expretion='Ooooops, ';
		} else if(deepdive.answersCont.allPoints === deepdive.answersCont.all) {
			expretion='Woooow, ';
		} 
		let title=`${expretion}${deepdive.answersCont.allPoints} out of ${deepdive.answersCont.all} correct!`;
		$('#group').prepend(`<h1 class="text-center">${title}</h1>`);
	},
	
	inicio:()=>{
		$('#progreso').show();
		$('#arrows').show();
		deepdive.group=[];
		deepdive.answersCont.answer=0;
		deepdive.answersCont.allPoints=0;
		deepdive.crearanswer();
  },
  
	iniciar : ()=>{
		deepdive.answersCont.all= Object.keys(deepdive.questions).length;
		deepdive.crearanswer();
	}
}

$(document).ready(deepdive.iniciar)