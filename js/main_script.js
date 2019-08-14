jQuery(document).ready(function(){

	var 
		degress = 135,
		degress_2 = -45,
		degress_3 = -134,
		degress_4 = 45
		timer = setInterval(function() {
			degress++;
			degress_2++;
			degress_3++;
			degress_4++;
			var object = document.getElementById('imageOfSite_1');
			var object_2 = document.getElementById('imageOfSite_2');
			var object_3 = document.getElementById('imageOfSite_3');
			var object_4 = document.getElementById('imageOfSite_4');
			var object_5 = document.getElementById('imageOfSite_5');
			object.style.background = 'linear-gradient('+ degress + 'deg, rgb(222, 73, 109) 0%, rgb(171, 73, 222) 100%)';
			object_2.style.background = 'linear-gradient('+ degress_2 +'deg, rgb(73, 221, 216) 0%, rgb(25, 226, 115) 100%)';
			object_3.style.background = 'linear-gradient('+ degress + 'deg, rgb(255, 174, 39) 0%, rgb(222, 73, 109) 100%)';
			object_4.style.background = 'linear-gradient('+ degress_3 + 'deg, rgb(0, 131, 255) 0px, rgb(213, 130, 255) 100%)';
			object_5.style.background = 'linear-gradient('+ degress_4 + 'deg, rgb(120, 107, 175), rgb(232, 91, 111))';
			if(degress == 360){
			degress = 0;
			}
			if(degress_2 == 360){
			degress_2 = 0;
			}
			if(degress_3 == 360){
				degress_3 = 0;
			}
			if(degress_4 == 360){
				degress_4 = 0;
			}
		}, 3000 / 360)

			window.onload = function load(event) {

			let object = document.getElementById('projects');
			let position = object.getBoundingClientRect();
			let y = Math.floor(position.y);
				if (y <= -100){
				let anchor = document.getElementById("Anchor");
				anchor.style.transform = 'scale(1)';
			} else {
				let anchor = document.getElementById("Anchor");
				anchor.style.transform = 'scale(0)';
			}
		
			setInterval(load, 2000);
		}
		
		const progress = document.querySelector('.Progress');
		
		window.addEventListener('scroll', progressBar);

		function progressBar(e){
			let windowScroll = document.body.scrollTop || document.documentElement.scrollTop;
			let windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
			let per = windowScroll / windowHeight * 100;
			progress.style.width = per + '%';
			}
		

});

function Event(){
	event.preventDefault();
}


function scrollSlow(id){
	var offset = 0;
	$('html, body').animate({
		scrollTop: $(id).offset().top - offset
	}, 500);
	return false;
}	 

	function ChangePadding(){
		$('.textInFirst').toggleClass('textInFirst_menu');
	}


//

let send = document.getElementById('contactbtn');
send.addEventListener('click', function(){
	swal({
  	title: "GitHub Pages != PHP",
 	text: "Сервис GitHub Pages, где и размещён этот сайт, не поддерживает PHP, поэтому работа с формой обратной связи невозможна. ",
  	icon: "error",
 	
 	 
})
.then((willDelete) => {
  if (willDelete) {
    swal({
    title: "Вы можете связаться c нами:",
    text: "Группа VK: vk.com/onlycoders\n\n Наша почта: onlycoders@mail.ru",
    icon: "success",
    button: "Закрыть"
    });
  } else {
    swal({
    title: "Вы можете связаться c нами:",
    text: "Группа VK: vk.com/onlycoders\n\n Наша почта: onlycoders@mail.ru",
    icon: "success",
    button: "Закрыть"
    });
  }
});
});

//

let sendSecond = document.getElementById('contancttop');
sendSecond.addEventListener('click', function(){
	swal({
  	title: "GitHub Pages != PHP",
 	text: "Сервис GitHub Pages, где и размещён этот сайт, не поддерживает PHP, поэтому работа с формой обратной связи невозможна. ",
  	icon: "error",
 	
 	 
})
.then((willDelete) => {
  if (willDelete) {
    swal({
    title: "Вы можете связаться c нами:",
    text: "Группа VK: vk.com/onlycoders\n\n Наша почта: onlycoders@mail.ru",
    icon: "success",
    button: "Закрыть"
    });
  } else {
    swal({
    title: "Вы можете связаться c нами:",
    text: "Группа VK: vk.com/onlycoders\n\n Наша почта: onlycoders@mail.ru",
    icon: "success",
    button: "Закрыть"
    });
  }
});
});
