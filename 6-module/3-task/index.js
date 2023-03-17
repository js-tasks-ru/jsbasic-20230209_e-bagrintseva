import createElement from '../../assets/lib/create-element.js';

export default class Carousel {
	constructor(slides) {
		this.slides = slides;
		this.clickCounter = 0;

		this.render();
		this.slideButtons();
		this.addCustomEvent();
	}

	render() {
		this.elem = createElement(`
			<div class="carousel">
				<div class="carousel__arrow carousel__arrow_right">
					<img src="/assets/images/icons/angle-icon.svg" alt="icon">
				</div>
				<div class="carousel__arrow carousel__arrow_left">
					<img src="/assets/images/icons/angle-left-icon.svg" alt="icon">
				</div>
			</div
		`);

		this.wrap = document.createElement('div');
		this.wrap.className = 'carousel__inner';

		this.slides.map((slide) => {
			this.name = slide.name;
			this.id = slide.id;
			this.price = slide.price;
			this.image = slide.image;

			let item = createElement(
				`<div class="carousel__slide" data-id="${this.id}">
					<img src="/assets/images/carousel/${this.image}" class="carousel__img" alt="slide">
					<div class="carousel__caption">
						<span class="carousel__price">€${this.price.toFixed(2)}</span>
						<div class="carousel__title">${this.name}</div>
						<button type="button" class="carousel__button">
							<img src="/assets/images/icons/plus-icon.svg" alt="icon">
						</button>
					</div>
				</div>`
			);

			this.wrap.append(item);
		});

		this.elem.append(this.wrap);
		return this.elem;
	}

	slideButtons = () => {
		this.update();
		this.elem.addEventListener('click', (evt) => {
			if (evt.target.closest('.carousel__arrow_right')) {
				this.next();
				this.update();
			} else if (evt.target.closest('.carousel__arrow_left')) {
				this.previous();
				this.update();
			}
		});
	};

	addCustomEvent = () => {
		this.elem.addEventListener('click', (evt) => {
			if (evt.target.closest('.carousel__button')) {
				let id = evt.target.closest('.carousel__slide').dataset.id;

				this.elem.dispatchEvent(
					new CustomEvent('product-add', {
						detail: id,
						bubbles: true,
					})
				);
			}
		});
	};

	next() {
		this.clickCounter++;
	}

	previous() {
		this.clickCounter--;
	}

	update() {
		let slideWidth = this.elem.offsetWidth;
		let slideInner = this.elem.querySelector('.carousel__inner');
		let slidesAmount = this.elem.querySelectorAll('.carousel__slide').length;
		let leftButton = this.elem.querySelector('.carousel__arrow_left');
		let rightButton = this.elem.querySelector('.carousel__arrow_right');

		slideInner.style.transform = `translateX(${-slideWidth * this.clickCounter}px)`;

		if (this.clickCounter == 0) {
			leftButton.style.display = 'none';
		} else {
			leftButton.style.display = '';
		}

		if (this.clickCounter == slidesAmount - 1) {
			rightButton.style.display = 'none';
		} else {
			rightButton.style.display = '';
		}
	}
}
