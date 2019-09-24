/* eslint-disable func-names */
const RETURN_CODE = 13;

// budget controller
// eslint-disable-next-line func-names
const budgetController = (function () {

}());

// ui controller
const uiController = (function () {
	function addItem() {
		// get input data
		// const itemType = document.querySelector('.add__type');
		// const itemDescription = document.querySelector('.add__description');
		// const itemValue = document.querySelector('.add__value');
		// console.log(itemDescription);
		// console.log(itemValue);
		// add item to budget controller
		// add item to UI
		// calc budget
		// display button
	}
	document.querySelector('.add__btn').addEventListener('click', addItem);
	document.addEventListener('keypress', function (event) {
		event.preventDefault();
		if (event.keyCode === RETURN_CODE || event.which === RETURN_CODE) {
			addItem();
		}
	});
}());

// global controller
const controller = (function (budgetCtrl, uiCtrl) {

})(budgetController, uiController);