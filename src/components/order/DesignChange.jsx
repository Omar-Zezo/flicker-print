import { Pdf, X, XBlue } from "@/images/svg";
import Button from "@/utils/Button";
import { t } from "i18next";
import { useState } from "react";

const DesignChange = ({ setRequestChanges, langDetection }) => {
  const [imgName, setImgName] = useState("");
  return (
    <div
      className={`size-full fixed top-0 left-0 z-50 bg-black/80 ${
        langDetection === "ar" && "arabic-font"
      }`}
    >
      <div className="py-[70px] px-[36px] absolute top-1/2 translate-y-[-50%] left-1/2 translate-x-[-50%] rounded-[25px] bg-white">
        <div
          className="size-10 rounded-[11px] absolute right-5 top-5 cursor-pointer bg-[#E8EFF5] flex justify-center items-center"
          onClick={() => setRequestChanges(false)}
        >
          <img width={20} height={20} src={X} alt="x" />
        </div>
        <div className="size-full flex flex-col gap-8">
          <div className="w-[434px] mx-auto flex flex-col gap-5">
            <p className="text-[28px] text-center text-black-500 font-semibold">
              {t("submit Your Changes")}
            </p>
            <p className="text-base text-black-300 text-center font-medium">
              {t(
                "please upload the updated file"
              )}
            </p>
          </div>
          <div className="flex flex-col gap-[17px]">
            <form className="size-full flex flex-col gap-8 items-center">
              <textarea
                className="w-[444px] text-sm text-black-200 font-normal outline-none h-[208px] resize-none px-[32px] py-[25px] rounded-[18px] border border-black/15"
                placeholder={t("enter Your Description Here")}
              ></textarea>
            </form>

            {imgName !== "" ? (
              <div
                className="bg-[#23B5760D] flex gap-2 rounded-[12px] cursor-pointer p-2 border border-dashed border-[#23B576B2]"
              >
                <div className="size-10 flex items-center justify-center">
                  <img width={24} height={24} alt="pdf" src={Pdf} />
                </div>
                <div>
                  <p className="text-sm text-[#6C7176] font-medium">
                    {t('product photo')}
                  </p>
                  <p className="text-[10px] text-[#6C7176] font-medium">
                    {imgName}
                  </p>
                </div>
                <img
                  src={XBlue}
                  alt="img"
                  className={`cursor-pointer ${langDetection === "en" ? "ml-auto":"mr-auto"}`}
                  width={24}
                  height={24}
                  onClick={() => setImgName("")}
                />
              </div>
            ) : (
              <div className="px-1">
                <label
                  htmlFor="upload-file-change"
                  className="text-[12px] text-blue-500 font-semibold underline cursor-pointer"
                >
                  {t('upload File')}
                </label>
                <input
                  id="upload-file-change"
                  type="file"
                  className="hidden"
                  onChange={(e) => {
                    const fileName = e.target.value.split("\\").pop();
                    setImgName(fileName);
                  }}
                />
              </div>
            )}
          </div>
          <div className="flex justify-center gap-5">
            <div
              className="w-[214px] h-[46px]"
              onClick={() => setRequestChanges(false)}
            >
              <Button
                txtSize="text-sm"
                text={t("cancel")}
                txtColor="text-blue-500"
                border={true}
                borderColor="border-blue-500"
              />
            </div>
            <div className="w-[214px] h-[46px]">
              <Button
                txtSize="text-sm"
                text={t("submit")}
                bg="bg-blue-500"
                txtColor="text-white"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DesignChange;
