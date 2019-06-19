// Adding and removing border-top class for 'Item 4' in the list
let toggleBorderTop = document.getElementById("border-top");
toggleBorderTop.classList.remove("border-top");

// Adding and removing "border-top" when user clicks first level 
function nestedList() {
	let listElems = document.getElementById("list-items-hover");
	listElems.classList.toggle("display-none");
	let toggleBorderTop = document.getElementById("border-top");
	toggleBorderTop.classList.toggle("border-top");
}

// Adding and removing Item 4 "border-bottom-0" class when second level clicked for style purposes
function nestedList2() {
	let listElems2 = document.getElementById("list-items-hover-2");
	listElems2.classList.toggle("display-none");
	let toggleBorderBottom = document.getElementById("list-item-2");
	toggleBorderBottom.classList.toggle("border-bottom-0");
}
