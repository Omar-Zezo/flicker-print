import { Home, Logout } from "@/images/svg";
import { Link } from "react-router-dom";
import { t } from "i18next";

const UserMenu = ({ userMenu, setUserMenu, langDetection, setConfirmLogout }) => {

  return (
    <div
      className={`w-[158px] h-[100px] ${
        userMenu ? "flex" : "hidden"
      } flex-col justify-between py-[14px] ${langDetection === "en" ? "pl-4 after:right-[15px]" : "pr-4 after:right-[15px]"} bg-white absolute top-10 right-[-10px] rounded-[18px] cursor-default arrow-user`}
      dir={langDetection === "en" ? "ltr" : "rtl"}
    >
      <div>
        <Link to="/my-profile" className="flex gap-1 py-1 items-center">
          <img width={24} height={24} src={Home} alt="my-profile" />
          <p className="text-base text-black-500 font-semibold">{t('my profile')}</p>
        </Link>
      </div>
      <div>
        <div
          className="flex gap-1 py-1 items-center cursor-pointer"
          onClick={()=>{
            setUserMenu(false)
            setConfirmLogout(true)
          }}
        >
          <img width={24} height={24} src={Logout} alt="logout" />
          <p className="text-base text-[#D90202] font-semibold">{t('logout')}</p>
        </div>
      </div>
    </div>
  );
};

export default UserMenu;
