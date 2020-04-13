function setCode(property) {
	$("#code-paste").text(property + ": " + $(".box").css(property) + ";");
}

function copyCode(property) {
	let text = property + ": " + $(".box").css(property) + ";";

	const temp = document.createElement("textarea");
	temp.value = text;

	document.body.appendChild(temp);
	temp.select();
	temp.setSelectionRange(0, 99999);
	temp.focus();
	document.execCommand("copy");
	document.body.removeChild(temp);
}
