"use strict";

const gulp = require("gulp");
const del = require("del");
const minify = require("gulp-minify");
const cleanCSS = require("gulp-clean-css");
const htmlmin = require("gulp-htmlmin");
const usemin = require("gulp-usemin");
const uglify = require("gulp-uglify");
const flatmap = require("gulp-flatmap");
const rev = require("gulp-rev");

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
						inlinecss: [cleanCSS({ compatibility: "ie9", advanced: false }), "concat"],
					})
				);
			})
		)
		.pipe(gulp.dest("build/"));
});

gulp.task("default", gulp.series(["clean", "usemin"]));
