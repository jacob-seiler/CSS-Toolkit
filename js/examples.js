function setCode(self, property) {
	const box = self.parent().parent().children(".demo-example").children(".box-example");
	const text = property + ": " + box.css(property) + ";";
	$("#code-paste").text(text);
}

function copyCode(self, property) {
	let text;

	if ($("#code-modal").is(":visible")) {
		text = self.parent().parent().children(".modal-body").children("#code-paste").text();
	} else {
		const box = self.parent().parent().children(".demo-example").children(".box-example");
		text = property + ": " + box.css(property) + ";";
	}

	const temp = document.createElement("textarea");
	temp.value = text;

	document.body.appendChild(temp);
	temp.select();
	temp.setSelectionRange(0, 99999);
	temp.focus();
	document.execCommand("copy");
	document.body.removeChild(temp);
}
