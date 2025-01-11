import CartDetails from "@/components/cart/CartDetails";
import CartItem from "@/components/cart/cartItem";
import PackageCartDetails from "@/components/cart/PackageCartDetails";
import UseLangDetection from "@/hooks/UseLangDetection";
import { ImgUpload, X } from "@/images/svg";
import Button from "@/utils/Button";
import Navigation from "@/utils/Navigation";
import { t } from "i18next";
import { useEffect, useState } from "react";

const Cart = () => {
  const [selectedList, setSelectedList] = useState([]);
  const [cartItemList, setcartItemList] = useState(null);
  const [imgForAll, setImgForAll] = useState("");
  const langDetection = UseLangDetection();

  useEffect(()=>{
    setcartItemList(JSON.parse(localStorage.getItem("cart")))
  },[localStorage.getItem("cart")])


  return (
    <div
      className={`flex flex-col gap-8 ${
        langDetection === "ar" && "arabic-font"
      }`}
      dir={langDetection === "en" ? "ltr" : "rtl"}
    >
      <div className="container pt-[112px] flex flex-col gap-8">
        <Navigation current={"my cart"} />
        <div className="w-full mx-auto flex flex-col gap-20">
          <div className="flex gap-5">
            <div className="w-full flex flex-col gap-5 bg-[#F4F7F9] rounded-[20px] p-5 shadow-sm">
              <div className="flex justify-between">
                <p className="text-xl text-black-500 font-semibold">
                  {t("orders")} <span className="text-black-200">(5)</span>
                </p>
                {selectedList.length > 0 && (
                  <div className="flex items-center gap-2">
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
                        text={t('cancel')}
                        txtSize="text-sm"
                        txtColor="text-blue-500"
                        border={true}
                        borderColor="border-blue-500"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="upload-img-forall-cartItem"
                        className="px-[13px] py-[10px] text-sm flex items-center justify-center rounded-[42px] bg-blue-500 text-white font-medium cursor-pointer"
                      >
                        {t('upload for')} ({selectedList.length})
                      </label>
                      <input
                        id="upload-img-forall-cartItem"
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
              <div className="w-full flex flex-col">
                {cartItemList?.map((item, index) => (
                  <CartItem
                    key={index}
                    item={item}
                    selectedList={selectedList}
                    setSelectedList={setSelectedList}
                    langDetection={langDetection}
                  />
                ))}
              </div>
            </div>
            <CartDetails langDetection={langDetection}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
