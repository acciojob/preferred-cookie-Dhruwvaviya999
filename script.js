let saveBtn = document.querySelector("#btn");
let userFontSize = document.querySelector("#fontsize");
let userFontColor = document.querySelector("#fontcolor");
let form = document.querySelector("form");

saveBtn.addEventListener("click", () => {
	document.cookie = `fontsize=${userFontSize.value}px`;
	document.cookie = `fontcolor=${userFontColor.value}`;
	form.style.fontSize = `${userFontSize.value}px`
	form.style.color = `${userFontSize.value}`
});