/**
 * Компонент, который реализует таблицу
 * с возможностью удаления строк
 *
 * Пример одного элемента, описывающего строку таблицы
 *
 *      {
 *          name: 'Ilia',
 *          age: 25,
 *          salary: '1000',
 *          city: 'Petrozavodsk'
 *      }
 *
 */
export default class UserTable {
	constructor(rows) {
		this.rows = rows;

		this.render();
	}

	render() {
		this.tbody = document.createElement('tbody');

		for (let i = 0; i < this.rows.length; i++) {
			this.name = this.rows[i].name;
			this.age = this.rows[i].age;
			this.salary = this.rows[i].salary;
			this.city = this.rows[i].city;

			this.tr = document.createElement('tr');
			this.tdButton = document.createElement('td');
			this.button = document.createElement('button');
			this.button.textContent = 'X';
			this.tdButton.append(this.button);

			this.button.addEventListener('click', (evt) => {
				evt.target.closest('tr').remove();
			});

			this.tr.innerHTML = `
        <td>${this.name}</td>
        <td>${this.age}</td>
        <td>${this.salary}</td>
        <td>${this.city}</td>`;
			this.tr.append(this.tdButton);

			this.tbody.append(this.tr);
		}

		this.elem = document.createElement('table');
		this.elem.innerHTML = `<thead>
      <tr>
        <th>Имя</th>
        <th>Возраст</th>
        <th>Зарплата</th>
        <th>Город</th>
        <th></th>
      </tr>
    </thead>`;

		this.elem.append(this.tbody);
	}
}
