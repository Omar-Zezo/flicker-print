import { navLinks } from "@/constant";
import { Group14 } from "@/images/imgs";
import { Cart } from "@/images/svg";
import { Link, NavLink } from "react-router-dom";
import Button from "./Button";
import ChangeLang from "@/utils/ChangeLang";
import { t } from "i18next";

const Navbar = ({ langDetection }) => {


  return (
    <nav
      className={`container py-5 w-full absolute top-0 left-[50%] translate-x-[-50%] z-50 ${
        langDetection === "ar" && "arabic-font"
      }`}
      dir={langDetection === "en" ? "ltr" : "rtl"}
    >
      <div className="w-full navbar flex items-center justify-between">
        <div>
          <Link to="/">
            <img width={120} height={20} src={Group14} alt="logo" />
          </Link>
        </div>
        <ul className="flex gap-5 mx-auto">
          {navLinks.map((li) => (
            <li key={li.name}>
              <NavLink
                className="text-base text-[#B5B5B5] hover:text-white p-2 font-medium"
                to={li.link}
              >
                {t(li.name)}
              </NavLink>
            </li>
          ))}
        </ul>
        <div className="flex gap-6 items-center">
          <Link to="/cart">
            <img width={24} height={24} src={Cart} alt="cart" />
          </Link>
          <div className="flex items-center gap-2">
            <div className="w-[107px] h-12">
              <Button
                txtSize="text-base"
                text={t("login-nav")}
                bg="bg-blue-500"
                txtColor="text-white"
                link="/auth/login"
              />
            </div>
            <div className="w-[107px] h-12">
              <Button
                txtSize="text-base"
                text={t("signup-nav")}
                txtColor="text-white"
                link="/auth/select-account-type"
                border={true}
                borderColor="border-white"
              />
            </div>
          </div>
          <div className="">
            <ChangeLang nav={true} navBlack={false}/>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
