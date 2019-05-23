function function8() {
	document.addEventListener("click", (event) => {
		let element = document.elementFromPoint(event.x, event.y);
		element.parentNode.removeChild(element);
	});
}

function function9() {
	let element = null;
	document.addEventListener("mousedown", (event) => {
		element = document.elementFromPoint(event.x, event.y);
	});
	
	document.addEventListener("mouseup", (event) => {
		element = null;
	})
	
	document.addEventListener("mousemove", (event) => {
		if(!element) return;
		element.style.position = "absolute";
		element.style.display = "block";
		element.style.left = event.x + "px";
		element.style.top = event.y + "px";
	})
}
