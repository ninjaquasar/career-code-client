import { NavLink } from "react-router";
import Logo from "../assets/logo.png";

const Navbar = () => {
	return (
		<nav className="flex justify-between items-center px-32 py-4">
			{/* Logo and Title (left-aligned) */}
			<NavLink to="/">
				<div className="flex items-center gap-x-4">
					<img
						src={Logo}
						alt="Logo"
						className="size-9"
					/>
					<h3 className="text-3xl font-bold tracking-wide">CareerCraft</h3>
				</div>
			</NavLink>
			{/* Page links (center-aligned) */}
			<div className="flex items-center gap-x-1 text-lg">
				<NavLink
					to="/"
					className="px-4 py-2 rounded-lg hover:bg-neutral-200/80 transition-colors"
				>
					Home
				</NavLink>
				<NavLink
					to="/jobs"
					className="px-4 py-2 rounded-lg hover:bg-neutral-200/80 transition-colors"
				>
					Browse Jobs
				</NavLink>
				<NavLink
					to="/jobs/craft"
					className="px-4 py-2 rounded-lg hover:bg-neutral-200/80 transition-colors"
				>
					Craft Job
				</NavLink>
				<NavLink
					to="/applications/me"
					className="px-4 py-2 rounded-lg hover:bg-neutral-200/80 transition-colors"
				>
					My Applications
				</NavLink>
				<NavLink
					to="/my-jobs"
					className="px-4 py-2 rounded-lg hover:bg-neutral-200/80 transition-colors"
				>
					My Job Posts
				</NavLink>
			</div>
			{/* Buttons (right-aligned) */}
			<div className="flex items-center gap-x-2 text-xl font-medium">
				<NavLink to="/login">
					<button className="px-4 py-2 bg-prime text-light rounded-lg hover:bg-blue-500 cursor-pointer">
						Login
					</button>
				</NavLink>
				<NavLink to="/signup">
					<button className="px-4 py-2 bg-prime text-light rounded-lg hover:bg-blue-500 cursor-pointer">
						Sign Up
					</button>
				</NavLink>
			</div>
		</nav>
	);
};

export default Navbar;
