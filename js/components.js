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

function addTab() {
	const header = $(".tabs").children(".nav-tabs");

	const newTab = document.createElement("LI");
	newTab.classList.add("nav-item");

	const newTabContent = document.createElement("A");
	newTabContent.classList.add("nav-link");
	newTabContent.setAttribute("id", "tab-0");
	newTabContent.setAttribute("data-toggle", "tab");
	newTabContent.setAttribute("href", "#tab-content-0");
	newTabContent.setAttribute("role", "tab");
	newTabContent.setAttribute("aria-controls", "tab-content-0");
	newTabContent.setAttribute("aria-selected", "false");
	newTabContent.innerHTML = "0";

	newTab.appendChild(newTabContent);
	header.append(newTab);

	const body = $(".tabs").children(".tab-content");
	const text = body.children().last().text();

	const newBody = document.createElement("DIV");
	newBody.classList.add("tab-pane");
	newBody.classList.add("fade");
	newBody.setAttribute("id", "tab-content-0");
	newBody.setAttribute("role", "tabpanel");
	newBody.setAttribute("aria-labelledby", "tab-0");
	newBody.innerHTML = text;
	body.append(newBody);

	setActiveTab(-1);
	cleanTabs();

	// Unhide tab bar
	header.removeClass("d-none");
}

function removeTab(tabnum) {
	$(".tabs .nav-tabs .nav-item #tab-" + tabnum)
		.parent()
		.remove();

	$(".tabs .tab-content #tab-content-" + tabnum).remove();

	cleanTabs();
	setActiveTab(tabnum);

	// If only one tab, hide
	if ($(".tabs .nav-tabs").children().length < 2) $(".tabs .nav-tabs").addClass("d-none");
}

function renameTab(tabnumOld, tabnumNew) {
	if (tabnumOld === tabnumNew) return;

	const header = $(".tabs .nav-tabs .nav-item #tab-" + tabnumOld);
	header.attr("id", "tab-" + tabnumNew);
	header.attr("href", "#tab-content-" + tabnumNew);
	header.attr("aria-controls", "tab-content-" + tabnumNew);
	header.text(tabnumNew);

	const body = $(".tabs .tab-content #tab-content-" + tabnumOld);
	body.attr("id", "tab-content-" + tabnumNew);
	body.attr("aria-labelledby", "tab-" + tabnumNew);
}

function setActiveTab(tabnum) {
	if (tabnum < 1 || tabnum > $(".tabs .nav-tabs").children().length) $(".tabs .nav-tabs li:last-child a").tab("show");
	else $(".tabs .nav-tabs li:nth-child(" + tabnum + ") a").tab("show");
}

function cleanTabs() {
	const header = $(".tabs .nav-tabs").children(".nav-item");

	for (var i = 0; i < header.length; i++) {
		const tabnum = parseInt(header[i].children[0].id.split("-")[1]);

		if (tabnum !== i + 1) renameTab(tabnum, i + 1);
	}

	if (!header.children().hasClass("active")) setActiveTab(header.length);

	// Disable delete button when only 1 tab
	if (header.length < 2) $(".btn-del").addClass("disabled");
	else $(".btn-del").removeClass("disabled");
}

function getFormData(raw) {
	let data = [];

	$("input[update-value]").each(function () {
		let content = $(this).attr("update-value");
		const type = $(this).attr("type");
		let val = "";

		// Format
		if (type === "text" || type === "number") {
			// Text or number
			val = $(this).val();
		} else if (type === "radio") {
			// Radio
			if (!$(this).parent().hasClass("active")) return;

			val = $(this).parent().text().trim();
		} else {
			// Other
			console.log("TODO: Type is: " + $(this).attr("type"));
		}

		if (raw) content = val;
		else content = content.split("%v").join(val);

		data.push(content);
	});

	return data;
}

function setFormData(element) {
	const id = element.children("a").attr("href");
	const content = $(".tabs .tab-content " + id);
	const vals = content.text().split("|");

	let index = 0;
	let prevId = undefined;

	$("input[update-value]").each(function () {
		if (prevId !== undefined && prevId == $(this).parent().parent().attr("id")) index--;

		prevId = undefined;
		const type = $(this).attr("type");
		const currVal = vals[index];

		if (type === "text" || type === "number") {
			$(this).val(currVal);

			if ($(this).parent().hasClass("color")) $(this).parent().colorpicker("setValue", currVal);
		} else if (type === "radio") {
			const val = $(this).parent().text().trim();

			if (val === currVal) {
				$(this).parent().addClass("active");
				$(this)[0].checked = true;
			} else {
				$(this).parent().removeClass("active");
				$(this)[0].checked = false;
			}

			prevId = $(this).parent().parent().attr("id");
		} else {
			console.log("TODO: Type is: " + type);
		}

		index++;
	});
}

function addTabListener(element) {
	element.on("shown.bs.tab", function (e) {
		setFormData(element);
	});
}

function update() {
	// Get form data
	const formData = getFormData(true);

	// Update current tab text
	const data = formData.join("|");
	$(".tabs .tab-content .active").text(data);

	// Update CSS
	funcCSS();
}

let funcCSS = undefined;

function setCSSUpdateFunction(func) {
	funcCSS = func;
	update();
}

$(document).ready(function () {
	$(".btn-view").click(function () {
		setCode("box-shadow");
	});

	$(".btn-copy").on("shown.bs.popover", function () {
		copyCode("box-shadow");
	});

	$(".btn-add").click(function () {
		addTab();
		addTabListener($(".tabs .nav-tabs li:last-child"));
		update();
	});

	$(".btn-del").click(function () {
		const current = $(".tabs .nav-tabs .active");

		if (current !== undefined) removeTab(parseInt(current.attr("id").split("-")[1]));

		update();
	});

	$("input[update-value]").each(function () {
		if ($(this).hasClass("form-btn")) $(this).click(update);
		else $(this).change(update);
	});

	addTabListener($(".tabs .nav-tabs li:last-child"));
});
