$(document).ready(function(){
	
	// BURGER

	let burger = document.getElementById("burger");
	let menu = document.getElementById("menu");
	burger.onclick = function() {
		burger.classList.toggle("header__burger_active");
		menu.classList.toggle("header__menu_active");
	}


	// IBG

	function ibg(){
		let ibg=document.querySelectorAll(".ibg");
		for (var i = 0; i < ibg.length; i++) {
			if(ibg[i].querySelector('img')){
				ibg[i].style.backgroundImage = 'url('+ibg[i].querySelector('img').getAttribute('src')+')';
			}
		}
	}	
	ibg();

	// SLIDER

	$('.slider').slick({
		autoplay: true,
		draggable: false,
		infinite: true,
		slidesToShow: 4,
		autoplaySpeed: 4000,
		responsive: [
			{
				breakpoint: 1200,
				settings: {
					slidesToShow: 3
				}
			},
			{
				breakpoint: 900,
				settings: {
					slidesToShow: 2
				}
			},
			{
				breakpoint: 620,
				settings: {
					slidesToShow: 1
				}
			}
		]
	});

	$('.clients__slider').slick({
		autoplay: true,
		autoplaySpeed: 4000,
		draggable: false,
		dots: true,
		arrows: false
	})

	// CLEARING PLACEHOLDER AFTER FOCUS

	$('input,textarea').focus(function(){
		$(this).data('placeholder',$(this).attr('placeholder'))
		$(this).attr('placeholder','');
	});
	$('input,textarea').blur(function(){
		$(this).attr('placeholder',$(this).data('placeholder'));
	});

	// FILTER

	const work = document.querySelectorAll('.works__object');
	const filter = document.querySelector('.works__filters');
	const filterButtons = document.querySelectorAll('.works__item');

	filter.addEventListener('click', event => {

		if(event.target.tagName != 'LI') return false;

		filterButtons.forEach( color =>{
			if(color.classList.contains('works__item_active'))
				color.classList.remove('works__item_active'); 
		});

		event.target.classList.add('works__item_active');

		let filterClass = event.target.dataset['filter'];

		work.forEach ( object => {
			object.classList.remove('hidden'); 
			if(!object.classList.contains(filterClass) && filterClass != 'All')
				object.classList.add('hidden');
		});

	});
});