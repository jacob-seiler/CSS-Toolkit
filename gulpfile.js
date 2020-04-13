"use strict";

const gulp = require("gulp");
const del = require("del");
const minify = require("gulp-minify");
const concat = require("gulp-concat");
const cleanCSS = require("gulp-clean-css");

var uglify = require("gulp-uglify"),
	usemin = require("gulp-usemin"),
	rev = require("gulp-rev"),
	cleanCss = require("gulp-clean-css"),
	flatmap = require("gulp-flatmap"),
	htmlmin = require("gulp-htmlmin");

gulp.task("clean", function () {
	return del("build", { force: true });
});

gulp.task("usemin", function () {
	return gulp
		.src(["./boxshadow.html", "./exampleboxshadow.html", "./examples.html", "./components.html", "./index.html"])
		.pipe(
			flatmap(function (stream, file) {
				return stream.pipe(
					usemin({
						css: [rev(), cleanCSS({ compatibility: "ie9", advanced: false })],
						html: [
							function () {
								return htmlmin({ collapseWhitespace: true });
							},
						],
						js: [
							minify({
								ext: {
									min: ".js",
								},
								noSource: true,
							}),
							rev(),
						],
						inlinejs: [uglify()],
						inlinecss: [cleanCss(), "concat"],
					})
				);
			})
		)
		.pipe(gulp.dest("build/"));
});

gulp.task("default", gulp.series(["clean", "usemin"]));
