/* eslint-disable func-names */


// budget controller

const budgetController = (function () {
	const Expense = function (id, description, value) {
		this.id = id;
		this.description = description;
		this.value = value;
	};

	const data = {
		allItems: {
			exp: [],
			inc: [],
		},
		totals: {
			exp: 0,
			inc: 0,
		},
	};

	// adds 1 to id of last entry in allitems array(based on type)
	function getId(type) {
		if (data.allItems[type].length > 0) {
			return data.allItems[type][data.allItems[type].length - 1].id + 1;
		}
		return 1;
	}

	const Income = function (id, description, value) {
		this.id = id;
		this.description = description;
		this.value = value;
	};

	return {
		addItem(type, description, value) {
			const ID = getId(type);
			const newItem = (type === 'inc') ? new Income(ID, description, value) : new Expense(ID, description, value);
			data.allItems[type].push(newItem);
			data.totals[type] += 1;
			return newItem;
		},
		testing() {
			console.log(data);
		},
	};
}());

// ui controller
const uiController = (function () {
	const DOMstrings = {
		inputType: '.add__type',
		inputDescription: '.add__description',
		inputValue: '.add__value',
		inputBtn: '.add__btn',
		incomeContainer: '.income__list',
		expensesContainer: '.expenses__list',
	};

	function clearFields() {
		const elements = document.querySelectorAll(`${DOMstrings.inputDescription}, ${DOMstrings.inputValue}`);
		const fields = Array.prototype.slice.call(elements);
		fields.forEach((field) => {
			field.value = '';
		});
		fields[0].focus();
	}

	return {
		getInput() {
			return {
				type: document.querySelector(DOMstrings.inputType).value,
				description: document.querySelector(DOMstrings.inputDescription).value,
				value: parseFloat(document.querySelector(DOMstrings.inputValue).value),
			};
		},
		addItem(item, itemType) {
			let html;
			let comboBoxElement;
			if (itemType === 'inc') {
				html = `<div class="item clearfix" id = "income-%id%"><div class="item__description">%description%</div><div class="right clearfix">
				<div class="item__value"> + %value%</div><div class="item__delete"><button class="item__delete--btn">
			<i class="ion-ios-close-outline"></i></button></div></div></div>`;
				comboBoxElement = DOMstrings.incomeContainer;
			} else {
				html = `<div class="item clearfix" id="%id%""><div class="item__description">%description%</div>
				<div class="right clearfix"><div class="item__value">- %value%</div><div class="item__percentage">21%</div>
				<div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>`;
				comboBoxElement = DOMstrings.expensesContainer;
			}

			let newHtml = html.replace('%id%', item.id);
			newHtml = newHtml.replace('%description%', item.description);
			newHtml = newHtml.replace('%value%', item.value);

			document.querySelector(comboBoxElement).insertAdjacentHTML('beforeend', newHtml);
			// clearFields();
		},
		clearFields() {
			const elements = document.querySelectorAll(`${DOMstrings.inputDescription}, ${DOMstrings.inputValue}`);
			const fields = Array.prototype.slice.call(elements);
			fields.forEach((field) => {
				field.value = '';
			});
			fields[0].focus();
		},

		getDOMStrings() {
			return DOMstrings;
		},
	};
}());

// global controller
const controller = (function (budgetCtrl, uiCtrl) {
	function updateBudget() {
		// calc budget
		// display budget
	}

	function addItem() {
		// get input data
		const input = uiCtrl.getInput();
		console.log(input);
		if (input.description !== '' && !Number.isNaN(input.value) && input.value > 0) {
			// add item to budget controller
			const newItem = budgetCtrl.addItem(input.type, input.description, input.value);
			// add item to UI
			uiCtrl.addItem(newItem, input.type);
			updateBudget();
		}
		uiCtrl.clearFields();
	}

	function setupEventListeners() {
		const RETURN_CODE = 13;
		document.querySelector(uiCtrl.getDOMStrings().inputBtn).addEventListener('click', addItem);
		document.addEventListener('keypress', (event) => {
			if (event.keyCode === RETURN_CODE || event.which === RETURN_CODE) {
				addItem();
			}
		});
	}

	return {
		init() {
			setupEventListeners();
		},
	};
}(budgetController, uiController));


controller.init();