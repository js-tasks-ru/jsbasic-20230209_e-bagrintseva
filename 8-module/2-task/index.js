import createElement from '../../assets/lib/create-element.js';
import ProductCard from '../../6-module/2-task/index.js';

export default class ProductGrid {
	constructor(products) {
		this.products = products;
		this.filters = {};
		this.filteredProducts;

		this.render();
		this.updateFilter();
	}

	render() {
		this.elem = createElement(`
			<div class="products-grid">
				<div class="products-grid__inner">
				</div>
			</div>
    `);
	}

	updateFilter(filters) {
		// console.log(this.filters);

		Object.assign(this.filters, filters);

		this.filteredProducts = [];

		let showProducts = () => {
			for (let product of this.filteredProducts) {
				let item = new ProductCard(product);

				this.elem.append(item.elem);
			}
		};

		// showProducts();

		function isEmpty(obj) {
			for (let key in obj) {
				// если тело цикла начнет выполняться - значит в объекте есть свойства
				return false;
			}
			return true;
		}

		this.products
			// .map((product) => {
			// this.filteredProducts = [];
			// return product;

			// if (isEmpty(this.filters)) {
			// 	this.filteredProducts.push(product);

			// 	console.log(this.filteredProducts);
			// }
			// })
			// .filter((product) => {
			// 	if (isEmpty(this.filters)) {
			// 		this.filteredProducts.push(product);

			// 		console.log(this.filteredProducts);
			// 	}
			// })
			.filter((product) => {
				if (this.filters.noNuts) {
					if (!product.nuts) {
						// this.filteredProducts.push(product);
						this.filteredProducts.push(product);
					}

					// console.log(this.filteredProducts);
				}
				if (this.filters.vegeterianOnly) {
					if (product.vegeterian) {
						// this.filteredProducts.push(product);
						console.log(product);
						return product;
					}

					// console.log(this.filteredProducts);
				}
				// if (this.filters.maxSpiciness) {
				// 	if (product.spiciness <= this.filters.maxSpiciness) {
				// 		this.filteredProducts.push(product);
				// 	}

				// 	// console.log(this.filteredProducts);
				// }
				// if (this.filters.category) {
				// 	if (product.category === this.filters.category) {
				// 		this.filteredProducts.push(product);
				// 	}
				// 	// console.log(this.filteredProducts);
				// }
				console.log(this.filteredProducts);

				// return this.filteredProducts;
			});
		Object.assign(this.filters, {});

		showProducts();

		// if (this.filters.noNuts) {
		// 	this.products
		// 		.map((product) => {
		// 			return product;
		// 		})
		// 		.filter((product) => {
		// 			if (!product.nuts) {
		// 				filteredProducts.push(product);
		// 			}

		// 			console.log(filteredProducts);
		// 		});
		// 	showProducts();
		// }

		// if (this.filters.vegeterianOnly) {
		// 	this.products.filter((product) => {
		// 		if (product.vegeterian) {
		// 			filteredProducts.push(product);
		// 		}

		// 		console.log(filteredProducts);
		// 	});
		// 	showProducts();
		// }

		// if (this.filters.maxSpiciness) {
		// 	this.products.filter((product) => {
		// 		if (product.spiciness <= this.filters.maxSpiciness) {
		// 			filteredProducts.push(product);
		// 		}

		// 		console.log(filteredProducts);
		// 	});
		// 	showProducts();
		// }

		// if (this.filters.category) {
		// 	this.products.filter((product) => {
		// 		if (product.category === this.filters.category) {
		// 			filteredProducts.push(product);
		// 		}
		// 	});
		// 	showProducts();
		// }
		// console.log(this.filters);
	}
}
