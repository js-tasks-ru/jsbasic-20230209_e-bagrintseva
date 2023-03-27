import createElement from '../../assets/lib/create-element.js';

export default class CartIcon {
	constructor() {
		this.render();

		this.addEventListeners();
	}

	render() {
		this.elem = createElement('<div class="cart-icon"></div>');
	}

	update(cart) {
		if (!cart.isEmpty()) {
			this.elem.classList.add('cart-icon_visible');

			this.elem.innerHTML = `
        <div class="cart-icon__inner">
          <span class="cart-icon__count">${cart.getTotalCount()}</span>
          <span class="cart-icon__price">€${cart.getTotalPrice().toFixed(2)}</span>
        </div>`;

			this.elem.classList.add('shake');
			this.elem.addEventListener(
				'transitionend',
				() => {
					this.elem.classList.remove('shake');
				},
				{once: true}
			);

			this.updatePosition();
		} else {
			this.elem.classList.remove('cart-icon_visible');
		}
	}

	addEventListeners() {
		document.addEventListener('scroll', () => this.updatePosition());
		window.addEventListener('resize', () => this.updatePosition());
	}

	updatePosition = () => {
		let container = document.querySelector('.container');
		let spaceLeft = container.getBoundingClientRect().right + 20;
		let spaceRight = document.documentElement.clientWidth - this.elem.offsetWidth - 10;

		if (this.elem.offsetWidth > 0 && this.elem.offsetHeight > 0 && document.documentElement.clientWidth > 767) {
			if (document.documentElement.scrollTop > this.elem.offsetTop) {
				let left = Math.min(spaceLeft, spaceRight);

				Object.assign(this.elem.style, {
					position: 'fixed',
					left: `${left}px`,
					zIndex: '100',
				});
			} else {
				Object.assign(this.elem.style, {
					position: '',
					left: ``,
					zIndex: '',
				});
			}
		}
	};
}
