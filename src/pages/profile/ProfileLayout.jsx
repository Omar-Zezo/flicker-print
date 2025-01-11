import SideNav from "@/components/profile/SideNav";
import { pathes } from "@/constant";
import UseGetLoggedUser from "@/hooks/UseGetLoggedUser";
import UseLangDetection from "@/hooks/UseLangDetection";
import Footer from "@/utils/Footer";
import Navbar from "@/utils/Navbar";
import NavbarBlack from "@/utils/NavbarBlack";
import NavbarLogin from "@/utils/NavbarLogin";
import NavbarLoginBlack from "@/utils/NavbarLoginBlack";
import Navigation from "@/utils/Navigation";
import ScrollToTop from "@/utils/ScrollToTop";
import { useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";

const ProfileLayout = () => {
const langDetection = UseLangDetection()

const {pathname} = useLocation()
const navigate = useNavigate()

useEffect(()=>{
  if(!localStorage.getItem("token")){
    navigate('/')
  }
},[])


  return (
    <ScrollToTop>
      {
        localStorage.getItem("token") ? (
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
        <div className={`container ${langDetection === "ar" && "arabic-font"}`} dir={langDetection === "en" ? "ltr" : "rtl"}>
        <div className="flex flex-col mt-[100px] gap-10">
        <Navigation current="my profile"/>
        <div className="flex gap-5">
        <SideNav/>
        <Outlet />
        </div>
        </div>
        </div>
      <Footer langDetection={langDetection}/>
      <ToastContainer/>
    </ScrollToTop>
  );
};

export default ProfileLayout;
