import { ImgUpload, X } from "@/images/svg";
import { useEffect, useState } from "react";

const PackageDetailsItem = ({ item, selectedList, setSelectedList }) => {
  const [checked, setChecked] = useState(false);
  const [imgName, setImgName] = useState("");

  useEffect(()=>{
    if(selectedList.length < 1){
      setChecked(false)
    }
  },[selectedList])

  return (
    <div className="flex justify-between items-center py-5 px-2">
      <div className="flex items-start gap-2">
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
        <div className="size-[100px] bg-white p-1 rounded-[20px]">
          <img
            src={item?.image}
            alt="img"
            className="size-full object-cover rounded-[20px]"
          />
        </div>
        <div className="flex flex-col gap-1 px-1">
          <h3 className="text-black-500 text-base capitalize font-semibold">
            {item?.name}
          </h3>
          <div className="flex items-center gap-2">
            <p className="text-sm text-black-200 font-medium">Color:</p>
            <p className="text-sm text-black-500 font-medium">Red</p>
          </div>
          <div className="flex items-center gap-2">
            <p className="text-sm text-black-200 font-medium">Type:</p>
            <p className="text-sm text-black-500 capitalize font-medium">{item?.type === "package" ? "package":"product"}</p>
          </div>
        </div>
      </div>

      <div className="w-[103px] flex flex-col items-center gap-[16px]">
        <p className="text-black-500 text-base font-semibold">designable</p>
        {imgName !== "" ? (
          <div className="w-full flex items-center justify-center gap-[6px]">
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
          item?.is_need_design ? (
            <div className="w-[103px]">
            <label
              htmlFor="upload-img-package"
              className={`text-white text-sm font-semibold  px-[24px] py-[14px] flex items-center justify-center rounded-[25px] bg-blue-500 ${
                checked ? "cursor-not-allowed opacity-50" : "cursor-pointer"
              }`}
              onClick={(e) => (checked ? e.preventDefault() : null)}
            >
              Upload
            </label>
            <input
              id="upload-img-package"
              type="file"
              className="opacity-0 hidden"
              onChange={(e) => {
                const fileName = e.target.value.split("\\").pop();
                setImgName(fileName);
              }}
            />
          </div>
          ):(
            <div className="w-[103px]">
            
          </div>
          )
        )}
      </div>
    </div>
  );
};

export default PackageDetailsItem;
