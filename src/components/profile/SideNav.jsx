import { t } from "i18next";
import { HomeSettings, Map3, OpenBox, Trolley } from "@/images/svg";
import { NavLink } from "react-router-dom";

const SideNav = () => {
  return (
    <div className="flex flex-col gap-5 border-2 border-[#F4F7F9] rounded-[18px]">
      <h2 className="p-5 text-xl text-black-400 font-medium">
        {t("my profile")}
      </h2>
      <ul className="profile w-[272px] flex flex-col gap-2">
        <NavLink to="/my-profile" end>
          <div className="flex items-center gap-2 py-4 px-5">
            <img src={HomeSettings} width={24} height={24} alt="settings" />
            <p className="text-base text-black-400 font-medium">
              {t("general Settings")}
            </p>
          </div>
        </NavLink>
        <NavLink to="/my-profile/my-address">
          <div className="flex items-center gap-2 py-4 px-5">
            <img src={Map3} width={24} height={24} alt="settings" />
            <p className="text-base text-black-400 font-medium">My Address</p>
          </div>
        </NavLink>
        <NavLink to="/my-profile/order-history">
          <div className="flex items-center gap-2 py-4 px-5">
            <img src={OpenBox} width={24} height={24} alt="settings" />
            <p className="text-base text-black-400 font-medium">
              Order History
            </p>
          </div>
        </NavLink>
        <NavLink to="/my-profile/track-order">
          <div className="flex items-center gap-2 py-4 px-5">
            <img src={Trolley} width={24} height={24} alt="settings" />
            <p className="text-base text-black-400 font-medium">
              {t("Track order")}
            </p>
          </div>
        </NavLink>
      </ul>
    </div>
  );
};

export default SideNav;
