import { Route, Routes } from "react-router-dom";
import Error from "./pages/Error";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Home from "./pages/Home";
import CreateProfile from "./pages/CreateProfile";
import CreatePost from "./pages/CreatePost";
import Notification from "./pages/Notification";
import SearchPage from "./pages/SearchPage";
import Profile from "./pages/Profile";

// import PageTester from "./pages/PageTester";

import handleShowToast from "./functions/showToast";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Layout from "./components/Layout";
import PageTester from "./pages/PageTester";

function App() {
	return (
		<>
			<Routes>
				<Route path="/" element={<Login handleShowToast={handleShowToast} />} />
				<Route
					path="/login"
					element={<Login handleShowToast={handleShowToast} />}
				/>
				<Route
					path="/signup"
					element={<SignUp handleShowToast={handleShowToast} />}
				/>
				<Route
					path="/create"
					element={<CreateProfile handleShowToast={handleShowToast} />}
				/>
				{/* Routes that need Navbar */}
				<Route element={<Layout />}>
					<Route
						path="/post"
						element={<CreatePost handleShowToast={handleShowToast} />}
					/>
					<Route
						path="/home"
						element={<Home handleShowToast={handleShowToast} />}
					/>
					<Route path="/profile" element={<Profile />} />
					<Route path="/notification" element={<Notification />} />
					<Route path="/search-page" element={<SearchPage />} />
				</Route>

				<Route path="*" element={<Error />} />
			</Routes>

			<ToastContainer
				position="top-right"
				autoClose={5000}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover={false}
				theme="dark"
			/>
		</>
	);
}

export default App;
