import Notification from "@/components/notification/Notification";
import UseLangDetection from "@/hooks/UseLangDetection";
import Navigation from "@/utils/Navigation";
import Pagination from "@/utils/Pagination";
import { t } from "i18next";
import React from "react";

const Notifications = () => {
  const langDetection = UseLangDetection();
  return (
    <div
      className={`flex flex-col gap-8 ${
        langDetection === "ar" && "arabic-font"
      }`}
      dir={langDetection === "en" ? "ltr" : "rtl"}
    >
      <div className="container pt-[112px] flex flex-col gap-8">
        <Navigation current={"notifications"} />
        <div className="w-full mx-auto flex flex-col gap-20">
          <div className="flex justify-between items-center">
            <h2 className="text-[32px] text-black-500 font-medium">
              {t('my Notification')}
            </h2>
            <span className={`text-blue-500 text-xl font-semibold underline cursor-pointer`}>
              {t('clear all')}
            </span>
          </div>
          <div className="flex flex-col gap-[16px]">
          <Notification langDetection={langDetection}/>
          <Notification langDetection={langDetection}/>
          <Notification langDetection={langDetection}/>
          <Notification langDetection={langDetection}/>
          <Notification langDetection={langDetection}/>
          <Notification langDetection={langDetection}/>
          <Notification langDetection={langDetection}/>
          </div>
          <Pagination 
          current_page ={1}
          total ={50}
          handlePageClick = {()=> null}
          />
        </div>
      </div>
    </div>
  );
};

export default Notifications;
