function initCarousel() {
	const carousel = document.querySelector('.carousel'),
		wrapper = carousel.querySelector('.carousel__inner'),
		slides = carousel.querySelectorAll('.carousel__slide'),
		rightButton = carousel.querySelector('.carousel__arrow_right'),
		leftButton = carousel.querySelector('.carousel__arrow_left');

	slides[0].classList.add('active');
	hideElem(leftButton);

	carousel.addEventListener('click', slideChange);

	function slideChange(event) {
		const activeSlide = carousel.querySelector('.active');

		let width = slides[0].offsetWidth;
		let k;

		for (let i = 0; i < slides.length; i++) {
			if (slides[i].classList.contains('active')) {
				k = i;
			}
		}

		if (event.target.closest('.carousel__arrow_right')) {
			if (slides[slides.length - 2].classList.contains('active')) {
				hideElem(rightButton);
			} else {
				showElem(rightButton);
			}
			showElem(leftButton);

			removeActiveForAllSlides();

			activeSlide.nextElementSibling.classList.add('active');
			wrapper.style.transform = `translateX(-${width * (k + 1)}px)`;
		} else if (event.target.closest('.carousel__arrow_left')) {
			if (slides[1].classList.contains('active')) {
				hideElem(leftButton);
			} else {
				showElem(leftButton);
			}
			showElem(rightButton);

			removeActiveForAllSlides();

			activeSlide.previousElementSibling.classList.add('active');
			wrapper.style.transform = `translateX(-${width * (k - 1)}px)`;
		}
	}

	function removeActiveForAllSlides() {
		slides.forEach((slide) => {
			slide.classList.remove('active');
		});
	}

	function showElem(elem) {
		elem.style.display = '';
	}

	function hideElem(elem) {
		elem.style.display = 'none';
	}
}
