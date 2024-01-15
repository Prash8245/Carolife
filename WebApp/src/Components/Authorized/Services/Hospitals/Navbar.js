import { useRef,useContext} from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./main.css";
import { Link } from "react-router-dom";
import { UserData } from "../../../../Context/userDataContext";
// import {BASE_URL} from '../../../../config';
// import {toast} from 'react-toastify';

function Navbar() {
	const navRef = useRef();
	const userD = useContext(UserData);
	// const navigate = useNavigate();

	const showNavbar = () => {
		navRef.current.classList.toggle(
			"responsive_nav"
		);
	};

	return (
		<header>
			<Link to='/home'>𝒞𝒶𝓇𝑜𝐿𝒾𝒻𝑒</Link>
			<nav ref={navRef}>
				{/* <a href="/#">Appointment Schedule</a> */}
				<Link to="/blood-bank">Blood Bank</Link>
				<Link to='/laboratory'>Laboratory</Link>
				<Link to={'/profile'}>Profile</Link>
				<Link to='/' onClick={()=>{
					userD.SetuserData(null);
				}}>Logout</Link>
				{/* onClick={getUserData} */}

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