
	const slides = [
		{
			"image": "slide1.jpg",
			"tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
		},
		{
			"image": "slide2.jpg",
			"tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
		},
		{
			"image": "slide3.jpg",
			"tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
		},
		{
			"image": "slide4.png",
			"tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
		}
	]

	let slideIndex = 0

	const banner = document.getElementById('banner')
	const arrowLeft = document.querySelector('.arrow_left');
	const arrowRight = document.querySelector('.arrow_right');
	const dots = document.querySelector('.dots')
	const tagLine = document.querySelector('#banner p')


	arrowLeft.addEventListener('click', () =>{
		// for (let i = slideIndex; i >= 0; i--) {
			if (slideIndex === 0) {
				slideIndex = slides.length - 1;
			} else {
				slideIndex--;
			}
			
		// }
		console.log(slideIndex);
		showSlide();

	})

	arrowRight.addEventListener('click', () => {
		// for (let i = slideIndex; i < slides.length; i++) {
			if (slideIndex === slides.length - 1) {
				slideIndex = 0;
			} else {
				slideIndex++;
			}
			
		// }
		console.log(slideIndex);
		showSlide();
	});
	for (let i = 0; i < dots.length; i++) {
		dots[i].addEventListener('click', () => {
			slideIndex = i;
			showSlide();
		});
	}

	  function showSlide() {
		banner.style.backgroundImage = `url('./assets/images/slideshow/${slides[slideIndex].image}')`;
		tagLine.innerHTML = slides[slideIndex].tagLine;
		for (let i = 0; i < dots.length; i++) {
			dots[i].classList.toggle('dot_selected', i === slideIndex);
		}
	  }






