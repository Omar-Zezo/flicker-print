import { ImgUpload, X } from "@/images/svg";
import { t } from "i18next";
import PackageDetailsItem from "./PackageDetailsItem";
import Button from "@/utils/Button";
import { useState } from "react";

const PackageCartDetails = ({
  setShowPackageDetails,
  selectedList,
  setSelectedList,
  langDetection,
  products
}) => {
  const [imgForAll, setImgForAll] = useState("");


  return (
    <div
      className={`size-full fixed top-0 left-0 z-50 bg-black/80 ${
        langDetection === "ar" && "arabic-font"
      }`}
    >
      <div className="w-[60%] py-5 absolute top-1/2 translate-y-[-50%] left-1/2 translate-x-[-50%] rounded-[25px] bg-white">
        <div
          className="size-10 rounded-[11px] absolute right-5 top-5 cursor-pointer bg-[#E8EFF5] flex justify-center items-center"
          onClick={() => setShowPackageDetails(false)}
        >
          <img width={20} height={20} src={X} alt="x" />
        </div>
        <div className="w-[90%] pl-8 flex items-center justify-between">
          <p className="text-black-500 text-xl font-semibold">
            Sinamic Cards Package Items
          </p>
          {selectedList.length > 0 && (
            <div className="flex gap-2">
              {imgForAll && (
                <div className="w-[103px] flex items-center justify-center gap-[6px]">
                  <img src={ImgUpload} alt="img" width={20} height={20} />
                  <p className="text-[12px] text-black-500 font-semibold relative text-ellipsis text-nowrap overflow-hidden w-1/2">
                    {imgForAll}
                  </p>
                  <img
                    src={X}
                    alt="img"
                    className="cursor-pointer"
                    width={16}
                    height={16}
                    onClick={() => setImgForAll("")}
                  />
                </div>
              )}
              <div className="w-[102px] h-10"
              onClick={()=> setSelectedList([])}
              >
                <Button
                  text="cancel"
                  txtSize="text-sm"
                  txtColor="text-blue-500"
                  border={true}
                  borderColor="border-blue-500"
                />
              </div>
              <div>
                <label
                  htmlFor="upload-img-forall-packageItem"
                  className="px-[13px] py-[10px] text-sm flex items-center justify-center rounded-[42px] bg-blue-500 text-white font-medium cursor-pointer"
                >
                  Upload For ({selectedList.length})
                </label>
                <input
                  id="upload-img-forall-packageItem"
                  type="file"
                  className="opacity-0 hidden"
                  onChange={(e) => {
                    const fileName = e.target.value.split("\\").pop();
                    setImgForAll(fileName);
                  }}
                />
              </div>
            </div>
          )}
        </div>
        <div className="size-full px-8 flex flex-col gap-3 items-center justify-center mt-10">
          <div className="w-full flex flex-col gap-5 overflow-y-auto max-h-[500px]">
            {products?.map((item) => (
              <PackageDetailsItem
                item={item}
                selectedList={selectedList}
                setSelectedList={setSelectedList}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PackageCartDetails;
