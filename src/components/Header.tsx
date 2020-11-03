import React from "react";
import Container from "react-bootstrap/esm/Container";
import Nav from "react-bootstrap/esm/Nav";
import Navbar from "react-bootstrap/esm/Navbar";
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
		<Navbar collapseOnSelect expand="lg" bg="light" variant="light">
			<Container>
				<Link className="navbar-brand" to="/">
					CSS Toolkit
				</Link>
				<Navbar.Toggle aria-controls="responsive-navbar-nav" />
				<Navbar.Collapse>
					<Nav className="ml-auto">
						{tabs.map((tab: Tab, i: number) => {
							const current: boolean = tab.link === location.pathname;

							return (
								<li className={"nav-item" + (current ? " active" : "")} key={i}>
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
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};

export default Header;
