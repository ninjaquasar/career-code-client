import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/Home";
import SignUpPage from "../pages/SignUpPage";
import LoginPage from "../pages/LoginPage";

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
		],
	},
]);

export default router;
