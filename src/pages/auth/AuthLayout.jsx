import UseNotifications from "@/hooks/UseNotifications";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";

const AuthLayout = () => {
  UseNotifications()


  return (
    <div className="min-h-screen flex items-center justify-center">
    <Outlet/>
    <ToastContainer/>
    </div>
  );
};

export default AuthLayout;