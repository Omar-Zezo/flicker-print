import CartDetails from "@/components/cart/CartDetails";
import CartItem from "@/components/cart/cartItem";
import UseLangDetection from "@/hooks/UseLangDetection";
import Button from "@/utils/Button";
import Navigation from "@/utils/Navigation";
import { t } from "i18next";
import { useState } from "react";


const Cart = () => {
  const [selectedList, setSelectedList] = useState([]);
  const langDetection = UseLangDetection();


  return (
    <div
      className={`flex flex-col gap-8 ${
        langDetection === "ar" && "arabic-font"
      }`}
      dir={langDetection === "en" ? "ltr" : "rtl"}
    >
      <div className="container pt-[112px] flex flex-col gap-8 mx-auto">
        <Navigation current={"my cart"} />
        <div className="w-full mx-auto flex flex-col gap-20">
          <div className="flex justify-between">
            <div className="w-[70%] flex flex-col gap-5 bg-[#F4F7F9] rounded-[20px] p-5 shadow-sm">
              <div className="flex justify-between">
                <p className="text-xl text-black-500 font-semibold">
                  {t("orders")} <span className="text-black-200">(5)</span>
                </p>
                {selectedList.length > 0 && (
                  <div className="flex gap-2">
                    <div className="w-[102px] h-10">
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
                        htmlFor="upload-img"
                        className="px-[13px] py-[10px] text-sm flex items-center justify-center rounded-[42px] bg-blue-500 text-white font-medium cursor-pointer"
                      >
                        Upload For ({selectedList.length})
                      </label>
                      <input
                        id="upload-img"
                        type="file"
                        className="opacity-0 hidden"
                      />
                    </div>
                  </div>
                )}
              </div>
              <div className="flex flex-col">
                {[1, 2, 3, 4].map((item, index) => (
                  <CartItem
                    key={item}
                    item={item}
                    selectedList={selectedList}
                    setSelectedList={setSelectedList}
                  />
                ))}
                <CartItem packageItem={true} />
              </div>
            </div>
            <CartDetails />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
