import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./main.css";

function Navbar() {
	const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle(
			"responsive_nav"
		);
	};

	return (
		<header>
			<h3>𝒞𝒶𝓇𝑜𝐿𝒾𝒻𝑒</h3>
			<nav ref={navRef}>
				<a href="/#">Appointment Schedule</a>
				<a href="/#">Blood Bank</a>
				<a href="/#">Laboratory</a>
				<a href="/#">History</a>
				<button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					<FaTimes />
				</button>
			</nav>
			<button
				className="nav-btn"
				onClick={showNavbar}>
				<FaBars />
			</button>
			{/* <button className="signup">Sign up</button> */}
		</header>
	);
}

export default Navbar;