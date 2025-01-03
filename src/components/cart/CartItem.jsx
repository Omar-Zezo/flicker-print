import { CartImg } from "@/images/imgs";
import { ImgUpload, Minus, PlusBlack, X } from "@/images/svg";
import { useState } from "react";

const CartItem = ({ packageItem, item, setSelectedList }) => {
  const [checked, setChecked] = useState(false);
  const [imgName, setImgName] = useState("");
  const [qty, setQty] = useState(1);
  return (
    <div className="flex justify-between items-center py-5 border-b border-dashed border-[#E8E8E8] last-of-type:border-none">
      <div className="flex items-start gap-2">
        <div
          className={`size-[20px] flex justify-center items-center cursor-pointer rounded-[7px] ${
            checked && "bg-blue-500"
          } border border-blue-500`}
          onClick={() =>{
            setChecked(!checked)
            const count = 1
            setSelectedList((prevSelectedList) => {
              const updatedList = checked
                ? prevSelectedList.filter((item) => item !== 1) // إزالة العنصر عند إعادة النقر
                : [...prevSelectedList, item]; // إضافة العنصر
              console.log(updatedList); // عرض القيمة المحدثة
              return updatedList;
            });
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
            src={CartImg}
            alt="img"
            className="size-full object-cover rounded-[20px]"
          />
        </div>
        <div className="flex flex-col gap-1 px-1">
          <h3 className="text-black-500 text-base font-semibold">
            Standard Business Cards
          </h3>
          <div className="flex items-center gap-2">
            <p className="text-sm text-black-200 font-medium">Color:</p>
            <p className="text-sm text-black-500 font-medium">Red</p>
          </div>
          <div className="flex items-center gap-2">
            <p className="text-sm text-black-200 font-medium">Type:</p>
            <p className="text-sm text-black-500 font-medium">Standerd</p>
          </div>
        </div>
      </div>

      <div>
        <div className="flex flex-col items-center gap-[16px]">
          <p className="text-black-500 text-base font-semibold">Quantity</p>
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
      </div>

      <div>
        <div className="flex flex-col items-center gap-[16px]">
          <p className="text-black-500 text-base font-semibold">Pric</p>
          <p className="text-black-500 text-base font-semibold p-2">$240</p>
        </div>
      </div>

      <div>
        {packageItem ? (
            <div className="flex flex-col items-center gap-[16px]">
            <p className="text-black-500 text-base font-semibold">Items</p>
            <div className="text-blue-500 text-sm font-semibold  px-[33px] py-[14px] flex items-center justify-center rounded-[25px] border border-blue-500 cursor-pointer">
                View
              </div>
            </div>
        ) : (
          <div className="flex flex-col items-center gap-[16px]">
            <p className="text-black-500 text-base font-semibold">designable</p>
            {imgName !== "" ? (
              <div className="flex items-center justify-center gap-[6px]">
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
              <div>
                <label
                  htmlFor="upload-img"
                  className={`text-white text-sm font-semibold  px-[24px] py-[14px] flex items-center justify-center rounded-[25px] bg-blue-500 ${checked ? "cursor-not-allowed opacity-50":"cursor-pointer"}`}
                  onClick={(e)=> checked ? e.preventDefault() : null}
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
        )}
      </div>
    </div>
  );
};

export default CartItem;
