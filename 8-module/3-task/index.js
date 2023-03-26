export default class Cart {
	cartItems = []; // [product: {...}, count: N]

	constructor(cartIcon) {
		this.cartIcon = cartIcon;
	}

	addProduct(product) {
		if (product) {
			let cartItem;
			let find = this.cartItems.find((item) => {
				if (item.product == product) {
					return item.product;
				}
			});
			if (find) {
				find.count++;
			} else {
				cartItem = {
					product,
					count: 1,
				};
				this.cartItems.push(cartItem);
			}
			this.onProductUpdate(cartItem);
		}
	}

	updateProductCount(productId, amount) {
		let cartItem;

		this.cartItems.find((cartItem) => {
			if (cartItem) {
				if (cartItem.product.id == productId) {
					cartItem.count += amount;
					if (cartItem.count === 0) {
						let index = this.cartItems.indexOf(cartItem);
						this.cartItems.splice(index, 1);
						return;
					}
				}
			}
			return;
		});

		this.onProductUpdate(cartItem);
		this.getTotalPrice();
	}

	isEmpty() {
		if (this.cartItems.length > 0) {
			return false;
		} else {
			return true;
		}
	}

	getTotalCount() {
		let count = 0;
		this.cartItems.find((item) => {
			count += item.count;
		});
		return count;
	}

	getTotalPrice() {
		let price = 0;

		this.cartItems.find((item) => {
			price += item.product.price * item.count;
		});
		return price;
	}

	onProductUpdate(cartItem) {
		// реализуем в следующей задаче

		this.cartIcon.update(this);
	}
}
