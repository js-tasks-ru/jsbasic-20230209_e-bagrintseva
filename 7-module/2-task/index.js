import createElement from '../../assets/lib/create-element.js';

export default class Modal {
	constructor() {
		this.render();
		this.addEventListeners();
	}

	render() {
		this.elem = createElement(`
      <div class="modal">
        <div class="modal__overlay"></div>

        <div class="modal__inner">
          <div class="modal__header">
            <button type="button" class="modal__close">
              <img src="/assets/images/icons/cross-icon.svg" alt="close-icon" />
            </button>

            <h3 class="modal__title">
            </h3>
          </div>

          <div class="modal__body">
          </div>
        </div>

      </div>
    `);

		return this.elem;
	}

	open() {
		this.body = document.querySelector('body');

		this.body.append(this.elem);
		this.body.classList.add('is-modal-open');
	}

	setTitle(text) {
		let title = this.elem.querySelector('.modal__title');
		title.textContent = '';
		title.textContent = text;
	}

	setBody(html) {
		let body = this.elem.querySelector('.modal__body');
		body.innerHTML = '';
		body.append(html);
	}

	addEventListeners() {
		this.elem.addEventListener('click', this.clickListener);

		document.addEventListener('keydown', this.keyListener);
	}

	clickListener = () => {
		if (event.target.closest('.modal__close')) {
			this.close();
		}
	};

	keyListener = () => {
		if (event.code === 'Escape') {
			this.close();
		}
	};

	close() {
		this.body.classList.remove('is-modal-open');
		this.elem.remove();
		document.removeEventListener('keydown', this.keyListener);
	}
}
