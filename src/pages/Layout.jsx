import UseGetLoggedUser from "@/hooks/UseGetLoggedUser";
import UseLangDetection from "@/hooks/UseLangDetection";
import Footer from "@/utils/Footer";
import Navbar from "@/utils/Navbar";
import NavbarBlack from "@/utils/NavbarBlack";
import NavbarLogin from "@/utils/NavbarLogin";
import NavbarLoginBlack from "@/utils/NavbarLoginBlack";
import ScrollToTop from "@/utils/ScrollToTop";
import { Outlet, useLocation } from "react-router-dom";
import { ToastContainer } from "react-toastify";

const Layout = () => {
const langDetection = UseLangDetection()

const {isAuth} = UseGetLoggedUser()
const {pathname} = useLocation()

const pathes = ["/notifications", "/profile", "/cart"]


  return (
    <ScrollToTop>
      {
        isAuth ? (
          pathes.includes(pathname) ? (
          <NavbarLoginBlack langDetection={langDetection} />
            
          ):(
          <NavbarLogin langDetection={langDetection} />
          )
        ):(
          pathes.includes(pathname) ? (
            <NavbarBlack langDetection={langDetection} />
          ):(
          <Navbar langDetection={langDetection} />
          )
        )
      }
      <Outlet />
      <Footer langDetection={langDetection}/>
      <ToastContainer/>
    </ScrollToTop>
  );
};

export default Layout;
