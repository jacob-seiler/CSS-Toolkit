import React, { Component } from "react";
import "./header.scss";

class Header extends Component {
	render() {
		return (
			<nav class="navbar navbar-expand-lg navbar-light bg-light">
				<div class="container">
					<a class="navbar-brand" href="#">
						CSS Toolkit
					</a>
					<button
						class="navbar-toggler"
						type="button"
						data-toggle="collapse"
						data-target="#navbarSupportedContent"
						aria-controls="navbarSupportedContent"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span class="navbar-toggler-icon"></span>
					</button>

					<div class="collapse navbar-collapse" id="navbarSupportedContent">
						<ul class="navbar-nav mr-auto">
							<li class="nav-item active">
								<a class="nav-link" href="#">
									Home <span class="sr-only">(current)</span>
								</a>
							</li>
							<li class="nav-item">
								<a class="nav-link" href="components.html">
									Components
								</a>
							</li>
							<li class="nav-item">
								<a class="nav-link" href="examples.html">
									Examples
								</a>
							</li>
						</ul>
						<form id="search-form" class="form-inline my-2 my-lg-0 dropdown">
							<input class="form-control mr-sm-2 dropdown-toggle" id="search" type="text" aria-label="Search" placeholder="Search" autocomplete="off" onkeyup="filter()" />
							<div class="dropdown-menu" data-toggle="dropdown" role="menu" aria-labelledby="dropdownMenuButton" id="search-dropdown">
								<a class="dropdown-item" href="components/borderradius.html" onclick="travel(this)">
									Border Radius <span class="badge badge-secondary">Component</span>
								</a>
								<a class="dropdown-item" href="examples/borderradius.html" onclick="travel(this)">
									Border Radius <span class="badge badge-secondary">Example</span>
								</a>
								<a class="dropdown-item" href="components/boxshadow.html" onclick="travel(this)">
									Box Shadow <span class="badge badge-secondary">Component</span>
								</a>
								<a class="dropdown-item" href="examples/boxshadow.html" onclick="travel(this)">
									Box Shadow <span class="badge badge-secondary">Example</span>
								</a>
								<p id="no-results" class="dropdown-item mb-0">
									No Results
								</p>
							</div>
						</form>
					</div>
				</div>
			</nav>
		);
	}
}

export default Header;
