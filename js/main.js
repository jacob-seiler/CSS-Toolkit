// Search bar
function filter() {
	const filter = $("#search").val().toUpperCase();
	const dropdown = $("#search-dropdown");
	const items = dropdown.children("a");

	let hidden = 0;

	for (let i = 0; i < items.length; i++) {
		const text = items[i].textContent || items[i].innerText;

		if (filter !== "" && text.toUpperCase().indexOf(filter) > -1) {
			items[i].style.display = "";
		} else {
			items[i].style.display = "none";
			hidden++;
		}
	}

	$("#search-dropdown").dropdown("show");
	$("#no-results")[0].style.display = "none";

	if (hidden == items.length) {
		if (filter === "") {
			$("#search-dropdown").dropdown("hide");
		} else {
			$("#no-results")[0].style.display = "";
		}
	}
}

function travel(element) {
	window.location.href = element.href;
}

// Relative dates
function relativeDates() {
	const elements = $(".relative-date");
	const today = new Date();

	elements.each(function () {
		const date = new Date($(this).text());
		const days = Math.floor((today.getTime() - date.getTime()) / (1000 * 3600 * 24));

		if (days < 0) {
			$(this).addClass("disabled");

			if (days == -1) $(this).text("Coming tomorrow");
			else $(this).text("Coming in " + Math.abs(days) + " days");
		} else {
			if (days == 0) $(this).text("Added today");
			else if (days === 1) $(this).text("Added yesterday");
			else $(this).text("Added " + days + " days ago");
		}
	});
}

// Components & Examples
function setCode(self) {
	if (self.hasClass("component")) {
		$("#code-paste").text("box-shadow: " + $(".box").css("box-shadow") + ";");
	} else {
		const box = self.parent().parent().children(".demo-example").children(".box-example");
		const text = "box-shadow: " + box.css("box-shadow") + ";";
		const paste = $("#code-paste").text(text);
	}
}

function copyCode(self) {
	let text;

	if (self.hasClass("component")) {
		text = "box-shadow: " + $(".box").css("box-shadow") + ";";
	} else {
		if ($("#code-modal").is(":visible")) {
			text = self.parent().parent().children(".modal-body").children("#code-paste").text();
		} else {
			const box = self.parent().parent().children(".demo-example").children(".box-example");
			text = "box-shadow: " + box.css("box-shadow") + ";";
		}
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

// Box Shadow
function updateBoxShadow() {
	const type = $(".form-btn:checked").parent().text().trim();
	let style = "none";

	if (type !== "None") {
		const color = $("#form-color").val();
		const x = $("#position-h").val();
		const y = $("#position-v").val();
		const blur = $("#radius-blur").val();
		const spread = $("#radius-spread").val();

		style = x + "px " + y + "px " + blur + "px " + spread + "px " + color;

		if (type === "Inset") style += " inset";
	}

	$(".box").css("box-shadow", style);
}

$(document).ready(function () {
	// Setup color pickers
	$(".color").colorpicker({
		format: "rgba",
		autoInputFallback: false,
	});

	// Search bar
	$("#search-form").keypress(function (e) {
		if (e.keyCode == 13) {
			e.preventDefault();
			return false;
		}
	});

	document.addEventListener("focusin", function (e) {
		if ($("#search").is(":focus")) filter();
	});

	// Popover
	$(".popover-dismiss").popover({
		trigger: "focus",
	});
	$('[data-toggle="popover"]').popover();

	// Components & Examples
	$(".btn-view").click(function () {
		setCode($(this));
	});

	$(".btn-copy").on("shown.bs.popover", function () {
		copyCode($(this));
	});

	// Box Shadow
	$(".update-boxshadow").each(function () {
		if ($(this).hasClass("form-btn")) $(this).click(updateBoxShadow);
		else $(this).change(updateBoxShadow);
	});

	// Call functions to setup
	filter();
	relativeDates();
	updateBoxShadow();
});
