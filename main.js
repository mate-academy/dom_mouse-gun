function startFunc() {
	document.addEventListener("click", (event) => {
		let element = document.elementFromPoint(event.x, event.y);
		element.parentNode.removeChild(element);
	});
}