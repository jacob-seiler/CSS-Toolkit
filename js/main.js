$(document).ready(function () {
	$(".color").colorpicker({
		format: "rgba",
		autoInputFallback: false,
	});

	$("#search-form").keypress(function (e) {
		if (e.keyCode == 13) {
			e.preventDefault();
			return false;
		}
	});

	document.addEventListener("focusin", function (e) {
		if ($("#search").is(":focus")) filter();
	});

	filter();
});

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
