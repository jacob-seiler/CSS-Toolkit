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

	// Call functions to setup
	filter();
	relativeDates();
});
