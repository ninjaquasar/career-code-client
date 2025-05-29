import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/Home";
import SignUpPage from "../pages/SignUpPage";
import LoginPage from "../pages/LoginPage";
import BrowseJobs from "../pages/BrowseJobs";

const router = createBrowserRouter([
	{
		path: "/",
		Component: RootLayout,
		children: [
			{
				index: true,
				Component: Home,
			},
			{
				path: "/signup",
				Component: SignUpPage,
			},
			{
				path: "/login",
				Component: LoginPage,
			},
			{
				path: "/jobs",
				Component: BrowseJobs,
				loader: () => fetch("http://localhost:5100/jobs"),
			},
		],
	},
]);

export default router;
