import React, { Component } from "react";
import "./Footer.scss";

class Footer extends Component {
	render() {
		return (
			<footer>
				<div class="container">
					<div class="row align-items-center">
						<div class="col-12 col-sm-8">
							<nav aria-label="breadcrumb justify-content-center">
								<ol class="breadcrumb margin-fix">
									<li class="breadcrumb-item active">Home</li>
								</ol>
							</nav>
						</div>
						<div class="col-12 col-sm-4">
							<p class="margin-fix text-center text-sm-right">&copy; Jacob Seiler 2020</p>
						</div>
					</div>
				</div>
			</footer>
		);
	}
}

export default Footer;
