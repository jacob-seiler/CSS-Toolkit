import React from "react";
import Button from "react-bootstrap/esm/Button";
import Container from "react-bootstrap/esm/Container";
import Nav from "react-bootstrap/esm/Nav";
import { Link, useLocation } from "react-router-dom";

interface Tab {
	link: string;
	label: string;
	disabled?: boolean;
}

const tabs: Tab[] = [
	{
		link: "/",
		label: "Design",
	},
	{
		link: "/about",
		label: "About",
	},
];

const Header: React.FC = () => {
	const location = useLocation();

	return (
		<Nav className="navbar navbar-expand-lg navbar-light bg-light">
			<Container>
				<Link className="navbar-brand" to="/">
					CSS Toolkit
				</Link>
				<Button
					className="navbar-toggler"
					type="button"
					data-toggle="collapse"
					data-target="#navbarTogglerDemo02"
					aria-controls="navbarTogglerDemo02"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon"></span>
				</Button>

				<div className="collapse navbar-collapse">
					<ul className="navbar-nav mr-auto mt-2 mt-lg-0">
						{tabs.map((tab: Tab) => {
							const current: boolean = tab.link === location.pathname;

							return (
								<li className={"nav-item" + (current ? " active" : "")}>
									<Link
										className={"nav-link" + (tab.disabled ? " disabled" : "")}
										to={tab.link}
									>
										{tab.label}
										{current && <span className="sr-only">(current)</span>}
									</Link>
								</li>
							);
						})}
					</ul>
				</div>
			</Container>
		</Nav>
	);
};

export default Header;
