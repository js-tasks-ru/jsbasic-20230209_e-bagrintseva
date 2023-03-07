function initCarousel() {
	const carousel = document.querySelector('.carousel'),
		slides = document.querySelectorAll('.carousel__slide');

	slides[0].classList.add('active');
	carousel.addEventListener('click', slideChange);
}

function slideChange(event) {
	const wrapper = document.querySelector('.carousel__inner'),
		slides = document.querySelectorAll('.carousel__slide'),
		activeSlide = document.querySelector('.active'),
		rightButton = document.querySelectorAll('.carousel__arrow_right'),
		leftButton = document.querySelectorAll('.carousel__arrow_left');

	let width = slides[0].offsetWidth;

	console.log(width);
	if (event.target.closest('.carousel__arrow_right')) {
		if (slides[3].classList.contains('active')) {
		}
		slides.forEach((slide) => {
			slide.classList.remove('active');
		});
		activeSlide.nextElementSibling.classList.add('active');
		wrapper.style.transform = `translateX(-${width}px)`;
		// for (let i = 0; i < slides.length; i++) {
		// 	i++;
		// 	slides.forEach((slide) => {
		// 		slide.classList.remove('active');
		// 	});

		// 	slides[i].classList.add('active');
		// 	wrapper.style.transform = `translateX(-${width}px)`;
		// 	return;
		// }
		// console.log(`translateX(-${width})`);
		// wrapper.style.transform = `translateX(${(getComputedStyle(wrapper).transform || 0) - width})`;
		// console.log(getComputedStyle(wrapper).translate);
	} else if (event.target.closest('.carousel__arrow_left')) {
		console.log('left');
		slides.forEach((slide) => {
			slide.classList.remove('active');
		});
		activeSlide.previousElementSibling.classList.add('active');
	}

	function checkTransform() {
		if (getComputedStyle(wrapper).transform === 'none') {
			return `matrix(1, 0, 0, 1, ${0 - width}, 0)`;
		} else {
			getComputedStyle(wrapper).transform;
		}
	}
}
