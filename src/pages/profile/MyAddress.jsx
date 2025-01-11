import AddNewAddress from "@/components/profile/AddNewAddress";
import AddressCard from "@/components/profile/AddressCard";
import DeleteAddress from "@/components/profile/DeleteAddress";
import UseLangDetection from "@/hooks/UseLangDetection";
import { Plus } from "@/images/svg";
import { t } from "i18next";
import { useState } from "react";

const MyAddress = () => {
  const langDetection = UseLangDetection()
  const [showAddNewAddress, setShowAddNewAddress] = useState(false)
  const [showDeleteAddress, setShowDeleteAddress] = useState(false)

  return (
    <div className="flex-1 pb-10 flex flex-col gap-8 border-2 border-[#F4F7F9] rounded-[18px]">
      <h2 className="py-5 px-8 text-2xl text-black-500 font-medium">
        {t("My Address")}
      </h2>
      <div className="px-8 w-[619px] flex flex-col gap-4">
        <AddressCard setShowDeleteAddress={setShowDeleteAddress}/>
        <AddressCard setShowDeleteAddress={setShowDeleteAddress}/>
        <div
        className={`w-[185px] h-[46px] flex justify-center items-center gap-1 rounded-full bg-blue-500 cursor-pointer ${
          langDetection === "en"
            ? "hover:translate-x-1"
            : "hover:translate-x-[-4px]"
        } duration-300`}
        onClick={()=> setShowAddNewAddress(true)}
      >
        <img width={24} height={24} src={Plus} alt="plus" />
        <p className="text-white text-sm font-semibold">
          {t("add New Addrss")}
        </p>
      </div>
      </div>
      {showAddNewAddress && (<AddNewAddress setShowAddNewAddress={setShowAddNewAddress} langDetection={langDetection}/>)}
      {showDeleteAddress && (<DeleteAddress setShowDeleteAddress={setShowDeleteAddress} langDetection={langDetection}/>)}
    </div>
  );
};

export default MyAddress;
