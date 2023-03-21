import createElement from '../../assets/lib/create-element.js';

export default class StepSlider {
	constructor({steps, value = 0}) {
		this.steps = steps;
		this.value = value;

		this.render();
		this.addEventListeners();
	}

	render() {
		let sliderSteps = [];
		for (let i = 0; i < this.steps; i++) {
			sliderSteps.push('<span></span>');
		}

		this.elem = createElement(`
      <div class="slider">

        <!--Ползунок слайдера с активным значением-->
        <div class="slider__thumb">
          <span class="slider__value">${this.value}</span>
        </div>

        <!--Заполненная часть слайдера-->
        <div class="slider__progress"></div>

        <!--Шаги слайдера-->
        <div class="slider__steps">
        ${sliderSteps.join('')}

        </div>
      </div>
    `);

		return this.elem;
	}

	changeValue() {
		let sliderThumb = this.elem.querySelector('.slider__thumb');
		let sliderValue = this.elem.querySelector('.slider__value');
		let sliderProgress = this.elem.querySelector('.slider__progress');

		let segments = this.steps - 1;

		let left = event.clientX - this.elem.getBoundingClientRect().left;
		let leftRelative = left / this.elem.offsetWidth;

		if (leftRelative < 0) {
			leftRelative = 0;
		}
		if (leftRelative > 1) {
			leftRelative = 1;
		}

		let approximateValue = leftRelative * segments;

		this.value = Math.round(approximateValue);
		let valuePercents = (approximateValue / segments) * 100;

		if (this.up) {
			valuePercents = (this.value / segments) * 100;
		}

		sliderValue.textContent = this.value;
		sliderThumb.style.left = `${valuePercents}%`;
		sliderProgress.style.width = `${valuePercents}%`;
		this.sliderSteps.forEach((sliderStep) => {
			sliderStep.classList.remove('slider__step-active');
		});
		this.sliderSteps[this.value].classList.add('slider__step-active');
	}

	pointerMove = () => {
		if (event.type === 'pen' || event.type === 'touch') {
			event.preventDefault();
		}
		this.up = false;

		this.changeValue();
	};

	pointerUp = () => {
		this.elem.classList.remove('slider_dragging');
		if (event.target.closest('.slider__thumb')) {
			this.thumb.style.position = '';
		}
		this.up = true;
		this.changeValue();

		this.elem.dispatchEvent(
			new CustomEvent('slider-change', {
				detail: this.value,
				bubbles: true,
			})
		);

		document.removeEventListener('pointermove', this.pointerMove);
		document.removeEventListener('pointerup', this.pointerUp);
	};

	addEventListeners() {
		this.thumb = this.elem.querySelector('.slider__thumb');
		this.sliderSteps = this.elem.querySelectorAll('.slider__steps span');

		this.thumb.ondragstart = () => false;
		this.sliderSteps[0].classList.add('slider__step-active');

		this.elem.addEventListener('click', (event) => {
			this.up = true;

			this.changeValue();
			this.elem.dispatchEvent(
				new CustomEvent('slider-change', {
					detail: this.value,
					bubbles: true,
				})
			);
		});

		document.addEventListener('pointerdown', (evt) => {
			if (evt.type === 'pen' || evt.type === 'touch') {
				evt.preventDefault();
			}
			if (evt.target.closest('.slider__thumb')) {
				this.thumb.style.position = 'absolute';
				this.elem.classList.add('slider_dragging');
			}

			document.addEventListener('pointermove', this.pointerMove);

			document.addEventListener('pointerup', this.pointerUp);
		});
	}
}
