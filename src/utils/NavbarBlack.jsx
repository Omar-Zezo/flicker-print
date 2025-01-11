import { navLinks } from "@/constant";
import { Group14Black } from "@/images/imgs";
import { Cart, ShoppingBagBlack } from "@/images/svg";
import { Link, NavLink } from "react-router-dom";
import Button from "./Button";
import ChangeLang from "@/utils/ChangeLang";
import { t } from "i18next";

const NavbarBlack = ({ langDetection }) => {

  return (
    <nav
    className={`container py-5 w-full absolute top-0 left-[50%] translate-x-[-50%] z-50 ${
      langDetection === "ar" && "arabic-font"
      }`}
      dir={langDetection === "en" ? "ltr" : "rtl"}
    >
      <div className="navbar flex items-center justify-between">
        <div>
          <Link to="/">
            <img width={120} height={20} src={Group14Black} alt="logo" />
          </Link>
        </div>
        <ul className="flex gap-10">
          {navLinks.map((li) => (
            <li key={li.name}>
              <NavLink
                className="text-base text-black-300 hover:text-black-500 p-2 font-medium"
                to={li.link}
              >
                {t(li.name)}
              </NavLink>
            </li>
          ))}
        </ul>
        <div className="flex gap-5 items-center">
          <Link to="/cart">
            <img width={24} height={24} src={ShoppingBagBlack} alt="cart" />
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
                txtColor="text-blue-500"
                link="/auth/select-account-type"
                border={true}
                borderColor="border-blue-500"
              />
            </div>
          </div>
          <div className="">
            <ChangeLang nav={true} navBlack={true}/>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavbarBlack;
