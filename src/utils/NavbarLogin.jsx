import { navLinks } from "@/constant";
import { Group14 } from "@/images/imgs";
import { Cart, Notification, User } from "@/images/svg";
import { Link, NavLink } from "react-router-dom";
import ChangeLang from "@/utils/ChangeLang";
import { t } from "i18next";
import { useState } from "react";
import UserMenu from "@/components/navbar/UserMenu";
import NotificationMenu from "@/components/notification/NotificationMenu";
import ConfirmLogout from "@/components/navbar/ConfirmLogout";

const NavbarLogin = ({ langDetection }) => {
  const [userMenu, setUserMenu] = useState(false);
  const [notification, setNotification] = useState(false);
  const [confirmLogout, setConfirmLogout] = useState(false);

  return (
    <>
      <nav
      className={`container py-5 w-full absolute top-0 left-[50%] translate-x-[-50%] z-50 ${
        langDetection === "ar" && "arabic-font"
        }`}
        dir={langDetection === "en" ? "ltr" : "rtl"}
      >
        <div className="navbar flex items-center justify-between">
          <div>
            <Link to="/">
              <img width={120} height={20} src={Group14} alt="logo" />
            </Link>
          </div>
          <ul className="flex gap-10 mx-auto">
            {navLinks.map((li) => (
              <li key={li.name}>
                <NavLink
                  className="text-base text-[#B5B5B5] hover:text-white duration-300 p-2 font-medium"
                  to={li.link}
                >
                  {t(li.name)}
                </NavLink>
              </li>
            ))}
          </ul>
          <div className="flex gap-6 items-center ml-auto">
            <div>
              <Link to="/cart">
                <img width={24} height={24} src={Cart} alt="cart" />
              </Link>
            </div>
            <div className="flex items-center gap-6">
              <div className="flex relative items-center justify-center cursor-pointer">
                <img
                  width={24}
                  height={24}
                  src={Notification}
                  alt="notification"
                  onClick={() => {
                    setUserMenu(false);
                    setNotification(!notification);
                  }}
                />
                <NotificationMenu
                  notification={notification}
                  langDetection={langDetection}
                  setNotification={setNotification}
                />
              </div>
              <div className="flex relative items-center justify-center cursor-pointer">
                <img
                  width={24}
                  height={24}
                  src={User}
                  alt="user"
                  onClick={() => {
                    setUserMenu(!userMenu);
                    setNotification(false);
                  }}
                />
                <UserMenu
                  userMenu={userMenu}
                  langDetection={langDetection}
                  setConfirmLogout={setConfirmLogout}
                  setUserMenu={setUserMenu}
                />
              </div>
            </div>
            <div className="">
              <ChangeLang nav={true} navBlack={false} />
            </div>
          </div>
        </div>
      </nav>
      {confirmLogout && (
        <ConfirmLogout
          setConfirmLogout={setConfirmLogout}
          langDetection={langDetection}
        />
      )}
    </>
  );
};

export default NavbarLogin;
