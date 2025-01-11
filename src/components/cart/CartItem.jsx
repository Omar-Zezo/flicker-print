import { ImgUpload, Minus, PlusBlack, X } from "@/images/svg";
import { t } from "i18next";
import { useEffect, useState } from "react";
import PackageCartDetails from "./PackageCartDetails";

const CartItem = ({ item, selectedList, setSelectedList, langDetection }) => {
  const [checked, setChecked] = useState(false);
  const [imgName, setImgName] = useState("");
  const [qty, setQty] = useState(item?.qty);
  const [showPackageDetails, setShowPackageDetails] = useState(false);

  useEffect(() => {
    if (selectedList.length < 1) {
      setChecked(false);
    }
  }, [selectedList]);

  useEffect(()=>{
  console.log(item)
  },[item])


  return (
    <div className="w-full flex justify-between items-center py-5 border-b border-dashed border-[#E8E8E8] last-of-type:border-none">
      <div className="flex items-start gap-2">
        {item?.is_need_design ? (
          <div
            className={`size-[20px] flex justify-center items-center cursor-pointer rounded-[7px] ${
              checked && "bg-blue-500"
            } border border-blue-500`}
            onClick={() => {
              setChecked(!checked);
              setSelectedList(() =>
                checked
                  ? selectedList.filter((i) => i !== item)
                  : [...selectedList, item]
              );
            }}
          >
            <span
              className={`text-white text-[12px] font-medium ${
                checked ? "block" : "hidden"
              }`}
            >
              ✔
            </span>
          </div>
        ) : (
          <div className="size-5"></div>
        )}
        {item?.type === "product" ? (
          <div className="size-[100px] bg-white p-1 rounded-[20px]">
            <img
              src={item?.image}
              alt="img"
              className="size-full object-cover rounded-[20px]"
            />
          </div>
        ) : (
          <div className="size-[100px] flex gap-[1px] overflow-hidden flex-wrap bg-white p-1 rounded-[20px]">
            {item?.images?.map((img) => (
              <img
                key={img}
                src={img}
                alt="img"
                className="size-[49%] object-cover rounded-xl"
              />
            ))}
          </div>
        )}
        <div className="w-[206px] flex flex-col gap-1 px-1">
          <h3 className="text-black-500 text-base capitalize font-semibold">
            {item?.name}
          </h3>
          <div className="flex items-center gap-2">
            <p className="text-sm text-black-200 font-medium">{t("color")}:</p>
            <p className="text-sm text-black-500 font-medium">Red</p>
          </div>
          <div className="flex items-center gap-2">
            <p className="text-sm text-black-200 font-medium">{t("type")}:</p>
            <p className="text-sm text-black-500 capitalize font-medium">
              {item?.type}
            </p>
          </div>
        </div>
      </div>

      <div className="w-[135px] flex flex-col items-center gap-[16px]">
        <p className="text-black-500 text-base font-semibold">
          {t("quantity")}
        </p>
        <div className="relative w-[135px] flex justify-between items-center p-2 bg-white rounded-full">
          <div className="flex justify-center items-center cursor-pointer size-[32px] bg-section-gray rounded-full">
            <img
              className={`${qty === 1 && "opacity-30 cursor-not-allowed"}`}
              width={24}
              height={24}
              src={Minus}
              alt="minus"
              onClick={() => {
                if (qty > 1) {
                  setQty(qty - 1);
                }
              }}
            />
          </div>
          <p className="text-base text-black-400 font-medium">{qty}</p>
          <div className="flex justify-center items-center cursor-pointer size-[32px] bg-section-gray rounded-full">
            <img
              width={24}
              height={24}
              src={PlusBlack}
              alt="minus"
              onClick={() => setQty(qty + 1)}
            />
          </div>
        </div>
      </div>

      <div className="w-10">
        <div className="flex flex-col items-center gap-[16px]">
          <p className="text-black-500 text-base font-semibold">{t("price")}</p>
          <p className="text-black-500 text-base font-semibold p-2">
            ${item?.price}
          </p>
        </div>
      </div>

      <div>
        {item?.type === "package" ? (
          <div className="w-[103px] flex flex-col items-center gap-[16px]">
            <p className="text-black-500 text-base font-semibold">
              {t("items")}
            </p>
            <div
              className="text-blue-500 text-sm font-semibold  px-[33px] py-[14px] flex items-center justify-center rounded-[25px] border border-blue-500 cursor-pointer"
              onClick={() => setShowPackageDetails(true)}
            >
              View
            </div>
          </div>
        ) : item?.is_need_design ? (
          <div className="w-[103px] flex flex-col items-center gap-[16px]">
            <p className="text-black-500 text-base font-semibold">
              {t("designable")}
            </p>
            {imgName !== "" ? (
              <div className="w-[103px] flex items-center justify-center gap-[6px]">
                <img src={ImgUpload} alt="img" width={20} height={20} />
                <p className="text-[12px] text-black-500 font-semibold relative text-ellipsis text-nowrap overflow-hidden w-1/2">
                  {imgName}
                </p>
                <img
                  src={X}
                  alt="img"
                  className="cursor-pointer"
                  width={16}
                  height={16}
                  onClick={() => setImgName("")}
                />
              </div>
            ) : (
              <div className="w-[103px]">
                <label
                  htmlFor="upload-img"
                  className={`text-white text-sm font-semibold  px-[24px] py-[14px] flex items-center justify-center rounded-[25px] bg-blue-500 ${
                    checked ? "cursor-not-allowed opacity-50" : "cursor-pointer"
                  }`}
                  onClick={(e) => (checked ? e.preventDefault() : null)}
                >
                  Upload
                </label>
                <input
                  id="upload-img"
                  type="file"
                  className="opacity-0 hidden"
                  onChange={(e) => {
                    const fileName = e.target.value.split("\\").pop();
                    setImgName(fileName);
                  }}
                />
              </div>
            )}
          </div>
        ) : (
          <div className="w-[103px]"></div>
        )}
      </div>
      {showPackageDetails && (
        <PackageCartDetails
          setShowPackageDetails={setShowPackageDetails}
          selectedList={selectedList}
          setSelectedList={setSelectedList}
          langDetection={langDetection}
          products={item?.products}
        />
      )}
    </div>
  );
};

export default CartItem;
