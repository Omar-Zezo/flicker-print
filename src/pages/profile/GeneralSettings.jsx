import ChangePassword from "@/components/profile/ChangePassword";
import ChangePersonalInfo from "@/components/profile/ChangePersonalInfo";
import NewPassword from "@/components/profile/NewPassword";
import VerifyYourIdentity from "@/components/profile/VerifyYourIdentity";
import UseLangDetection from "@/hooks/UseLangDetection";
import { t } from "i18next";
import { useState } from "react";
import VerfiyChangeEmail from "@/components/profile/VerfiyChangeEmail";
import NewEmail from "@/components/profile/NewEmail";
import ConfirmDeleteAcount from "@/components/profile/ConfirmDeleteAcount";

const GeneralSettings = () => {
  const langDetection = UseLangDetection()
  const [showPersonalInfo, setShowPersonalInfo] = useState(false)
  const [showChangePassword, setShowChangePassword] = useState(false)
  const [verifyIdentity, setVerifyIdentity] = useState(false)
  const [showNewPasswordForm, setShowNewPasswordForm] = useState(false)
  const [showChangeEmailVerify, setShowChangeEmailVerify] = useState(false)
  const [showChangeEmailForm, setShowChangeEmailForm] = useState(false)
  const [showConfirmDeleteAccount, setShowConfirmDeleteAccount] = useState(false)



  return (
    <div className="flex-1 flex flex-col gap-8 border-2 border-[#F4F7F9] rounded-[18px]">
      <h2 className="py-5 px-8 text-2xl text-black-500 font-medium">
        {t("general Settings")}
      </h2>
      <div className="px-8 w-[848px] flex flex-col gap-5">
        <div className="pb-8 border-b-2 border-[#F4F7F9]">
          <div className="w-[475px] flex gap-6 justify-between">
            <div className="flex flex-col gap-2">
              <p className="text-black-500 text-xl font-medium">
                Personal Info
              </p>
              <p className="text-black-300 text-sm font-medium">
                you Can Change Your Information
              </p>
            </div>
            <button className="text-base text-[#120404] font-semibold underline"
            onClick={()=> setShowPersonalInfo(true)}
            >
              Change
            </button>
          </div>
        </div>

        <div className="pb-8 border-b-2 border-[#F4F7F9]">
          <div className="w-[475px] flex gap-6 justify-between">
            <div className="flex flex-col gap-2">
              <p className="text-black-500 text-xl font-medium">Email</p>
              <p className="text-black-500 text-sm font-medium">
                <span className="text-black-300">Your Email is</span>{" "}
                Filcker20@gmail.com
              </p>
            </div>
            <button className="text-base text-[#120404] font-semibold underline"
            onClick={()=> setShowChangeEmailVerify(true)}
            >
              Change
            </button>
          </div>
        </div>

        <div className="pb-8 border-b-2 border-[#F4F7F9]">
          <div className="w-[475px] flex gap-6 justify-between">
            <div className="flex flex-col gap-2">
              <p className="text-black-500 text-xl font-medium">{t("phone")}</p>
              <p className="text-black-500 text-sm font-medium">
                <span className="text-black-300">Your Phone is</span>{" "}
                01128379329
              </p>
            </div>
            <button className="text-base text-[#120404] font-semibold underline">
              Change
            </button>
          </div>
        </div>

        <div className="pb-8 border-b-2 border-[#F4F7F9]">
          <div className="w-[475px] flex gap-6 justify-between">
            <div className="flex flex-col gap-2">
              <p className="text-black-500 text-xl font-medium">
                {t("password")}
              </p>
              <p className="text-black-300 text-sm font-medium">
                you Can Change Your Password
              </p>
            </div>
            <button className="text-base text-[#120404] font-semibold underline"
            onClick={()=> setShowChangePassword(true)}
            >
              Change
            </button>
          </div>
        </div>

        <div className="pb-8 border-b-2 border-[#F4F7F9]">
          <div className="w-[475px] flex gap-6 justify-between">
            <div className="flex flex-col gap-2">
              <p className="text-black-500 text-xl font-medium">
                {t("Delete account")}
              </p>
              <p className="text-black-500 text-sm font-medium">
                Would you like to delete your account?
              </p>
              <p className="text-[#F00000] text-sm font-medium underline cursor-pointer"
              onClick={()=> setShowConfirmDeleteAccount(true)}
              >
                I want to delete my account
              </p>
            </div>
          </div>
        </div>

      </div>
      {showPersonalInfo && (<ChangePersonalInfo setShowPersonalInfo={setShowPersonalInfo} langDetection={langDetection}/>)}
      {showChangePassword && (<ChangePassword setShowChangePassword={setShowChangePassword} setVerifyIdentity={setVerifyIdentity} langDetection={langDetection}/>)}
      {verifyIdentity && (<VerifyYourIdentity setVerifyIdentity={setVerifyIdentity} setShowChangePassword={setShowChangePassword}/>)}
      {showNewPasswordForm && (<NewPassword setVerifyIdentity={setVerifyIdentity} setShowNewPasswordForm={setShowNewPasswordForm} langDetection={langDetection}/>)}
      {showChangeEmailVerify && (<VerfiyChangeEmail setShowChangeEmailVerify={setShowChangeEmailVerify} langDetection={langDetection}/>)}
      {showChangeEmailForm && (<NewEmail setShowChangeEmailForm={setShowChangeEmailForm} langDetection={langDetection}/>)}
      {showConfirmDeleteAccount && (<ConfirmDeleteAcount setShowConfirmDeleteAccount={setShowConfirmDeleteAccount} langDetection={langDetection}/>)}
    </div>
  );
};

export default GeneralSettings;
