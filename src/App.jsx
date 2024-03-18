import "./App.css";
import { Outlet, useLocation } from "react-router-dom";
import Sidebar from "./components/sidebar/Sidebar";

function App() {
  const location = useLocation();

  const isSignUpPage = location.pathname === "/signup";
  const isLoginPage = location.pathname === "/login";
  const isRecPassPage = location.pathname === "/forget-password";
  const isSideBar = !isSignUpPage && !isLoginPage && !isRecPassPage;

  return (
    <>
      {isSideBar && <Sidebar />}
      <Outlet />
    </>
  );
}

export default App;
