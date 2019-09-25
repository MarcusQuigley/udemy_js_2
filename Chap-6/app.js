/* eslint-disable func-names */


// budget controller
// eslint-disable-next-line func-names
const budgetController = (function () {

}());

// ui controller
const uiController = (function () {
	const DOMstrings = {
		inputType: '.add__type',
		inputDescription: '.add__description',
		inputValue: '.add__value',
		inputBtn: '.add__btn',
	};

	return {
		getInput() {
			return {
				type: document.querySelector(DOMstrings.inputType).value,
				description: document.querySelector(DOMstrings.inputDescription).value,
				value: document.querySelector(DOMstrings.inputValue).value,
			};
		},
		getDOMStrings() {
			return DOMstrings;
		},
	};
}());

// global controller
const controller = (function (budgetCtrl, uiCtrl) {
	const RETURN_CODE = 13;

	function addItem() {
		// get input data
		const input = uiCtrl.getInput();
		console.log(input);
		// add item to budget controller
		// add item to UI
		// calc budget
		// display button
	}
	document.querySelector(uiCtrl.getDOMStrings().inputBtn).addEventListener('click', addItem);
	document.addEventListener('keypress', (event) => {
		// 	event.preventDefault();
		if (event.keyCode === RETURN_CODE || event.which === RETURN_CODE) {
			addItem();
		}
	});
}(budgetController, uiController));