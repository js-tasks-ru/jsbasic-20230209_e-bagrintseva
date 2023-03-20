import createElement from '../../assets/lib/create-element.js';

export default class RibbonMenu {
	constructor(categories) {
		this.categories = categories;

		this.render();
		this.scroll();
		this.chooseItem();
	}

	render() {
		let list = this.categories.map((category) => {
			return `<a href='#' class='ribbon__item' data-id='${category.id}'>${category.name}</a>`;
		});

		this.elem = createElement(`
    <div class="ribbon">
      <button class="ribbon__arrow ribbon__arrow_left">
        <img src="/assets/images/icons/angle-icon.svg" alt="icon">
      </button>

      <nav class="ribbon__inner">
        ${list.join('')}
      </nav>

      <button class="ribbon__arrow ribbon__arrow_right ribbon__arrow_visible">
        <img src="/assets/images/icons/angle-icon.svg" alt="icon">
      </button>
    </div>
    `);

		this.ribbonInner = this.elem.querySelector('.ribbon__inner');

		return this.elem;
	}

	scroll = () => {
		this.elem.addEventListener('click', (evt) => {
			if (evt.target.closest('.ribbon__arrow_right')) {
				this.next();
				this.ribbonInner.addEventListener('scroll', () => {
					this.update();
				});
			}
			if (evt.target.closest('.ribbon__arrow_left')) {
				this.prev();
				this.ribbonInner.addEventListener('scroll', () => {
					this.update();
				});
			}
		});
	};

	chooseItem = () => {
		let links = this.elem.querySelectorAll('.ribbon__item');

		this.elem.addEventListener('click', (evt) => {
			if (evt.target.closest('.ribbon__item')) {
				evt.preventDefault();
				let item = evt.target.closest('.ribbon__item');
				links.forEach((link) => {
					link.classList.remove('ribbon__item_active');
				});
				item.classList.add('ribbon__item_active');
				let id = item.dataset.id;

				this.elem.dispatchEvent(
					new CustomEvent('ribbon-select', {
						detail: id,
						bubbles: true,
					})
				);
			}
		});
	};

	next() {
		this.ribbonInner.scrollBy(350, 0);
	}

	prev() {
		this.ribbonInner.scrollBy(-350, 0);
	}

	update() {
		let arrowLeft = this.elem.querySelector('.ribbon__arrow_left');
		let arrowRight = this.elem.querySelector('.ribbon__arrow_right');

		let scrollWidth = this.ribbonInner.scrollWidth;
		let scrollLeft = this.ribbonInner.scrollLeft;
		let clientWidth = this.ribbonInner.clientWidth;

		let scrollRight = scrollWidth - scrollLeft - clientWidth;

		arrowLeft.classList.add('ribbon__arrow_visible');
		arrowRight.classList.add('ribbon__arrow_visible');

		if (scrollLeft === 0) {
			arrowLeft.classList.remove('ribbon__arrow_visible');
		} else {
			arrowLeft.classList.add('ribbon__arrow_visible');
		}
		if (scrollRight < 1) {
			arrowRight.classList.remove('ribbon__arrow_visible');
		} else {
			arrowRight.classList.add('ribbon__arrow_visible');
		}
	}
}
