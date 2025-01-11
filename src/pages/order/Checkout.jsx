import UseLangDetection from "@/hooks/UseLangDetection";
import { Address, Store } from "@/images/svg";
import Navigation3 from "@/utils/Navigation3";
import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import CheckoutSummary from "@/components/checkout/CheckoutSummary";
import CheckoutFormForGuestAddress from "@/components/checkout/CheckoutFormForGuestAddress";
import CheckoutFormForGuestStore from "@/components/checkout/CheckoutFormForGuestStore";
import CheckoutFormForAccountAddress from "@/components/checkout/CheckoutFormForAccountAddress";
import PaymentType from "@/components/checkout/PaymentType";
import UseGetLoggedUser from "@/hooks/UseGetLoggedUser";
import { t } from "i18next";

const Checkout = () => {
  const [checkedStore, setCheckedStore] = useState(false);
  const [checkedAddress, setCheckedAddress] = useState(false);
  const [showPayType, setShowPayType] = useState(false)
  const [deliveryMethod, setDeliveryMethod] = useState("address");
  const langDetection = UseLangDetection();

  const {isAuth} = UseGetLoggedUser()

  const { 
    handleSubmit,
    register,
    control,
    formState: { errors },
   } = useForm();

  const onSubmit = (data) => {
    console.log(data)
    setShowPayType(true)
  };


  return (
    <div
      className={`flex flex-col gap-8 ${
        langDetection === "ar" && "arabic-font"
      }`}
      dir={langDetection === "en" ? "ltr" : "rtl"}
    >
      <div className="container pt-[112px] flex flex-col gap-8">
        <Navigation3
          prev={{ name: "my cart", link: "/cart" }}
          current="checkout"
        />
        <div className="w-full mx-auto flex flex-col gap-20">
          <form
            className="flex gap-5"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="flex flex-col gap-5 py-5">
              <h2 className="text-black-500 text-[28px] font-medium">
                {t('delivery Method')}
              </h2>
              <div className="flex items-center gap-[57px]">
                <div className="flex items-center gap-4">
                  <div
                    className={`size-[20px] shrink-0 flex justify-center items-center cursor-pointer rounded-full ${
                      (checkedAddress || deliveryMethod === "address") &&
                      "bg-blue-500"
                    } border border-blue-500`}
                    onClick={() => {
                      setCheckedAddress(!checkedAddress);
                      setCheckedStore(false);
                      setDeliveryMethod("address");
                    }}
                  >
                    <span
                      className={`text-white text-[12px] font-medium ${
                        checkedAddress || deliveryMethod === "address"
                          ? "block"
                          : "hidden"
                      }`}
                    >
                      ✔
                    </span>
                  </div>
                  <div className="w-full flex rounded-[20px] gap-8 p-4 border-2 border-blue-500">
                    <div className="flex gap-2">
                      <img width={64} height={64} src={Address} alt="address" />
                      <div className="w-[120px] flex flex-col gap-[6px]">
                        <p className="text-base text-black-500 font-semibold">
                          {t('to My Address')}
                        </p>
                        <p className="text-[12px] text-black-200 font-medium">
                          {t('expected Delivery')}
                          <br /> Firday ,13
                        </p>
                      </div>
                    </div>
                    <p className="size-fit mt-auto text-base text-black-500 font-semibold">
                      $4.5
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div
                    className={`size-[20px] shrink-0 flex justify-center items-center cursor-pointer rounded-full ${
                      (checkedStore || deliveryMethod === "store") &&
                      "bg-blue-500"
                    } border border-blue-500`}
                    onClick={() => {
                      setCheckedStore(!checkedStore);
                      setCheckedAddress(false);
                      setDeliveryMethod("store");
                    }}
                  >
                    <span
                      className={`text-white text-[12px] font-medium ${
                        checkedStore || deliveryMethod === "store"
                          ? "block"
                          : "hidden"
                      }`}
                    >
                      ✔
                    </span>
                  </div>
                  <div className="w-full flex rounded-[20px] p-4 border-2 border-blue-500">
                    <div className="flex gap-2">
                      <img width={64} height={64} src={Store} alt="address" />
                      <div className="w-[219px] flex flex-col gap-[6px]">
                        <p className="text-base text-black-500 font-semibold">
                          {t('pick up from the print shop')}
                        </p>
                        <p className="text-[12px] text-black-200 font-medium">
                          {t('expected Delivery')}
                          <br /> Firday ,13
                        </p>
                      </div>
                    </div>
                    <p className="size-fit mt-auto text-base text-black-500 font-semibold">
                      $4.5
                    </p>
                  </div>
                </div>
              </div>
              {
                !isAuth ? (
                    deliveryMethod === "address" ? (
                        <CheckoutFormForGuestAddress register={register} control={control} errors={errors} Controller={Controller} langDetection={langDetection} />
                    ):(
                        <CheckoutFormForGuestStore register={register} control={control} errors={errors} Controller={Controller} langDetection={langDetection} />
                    )
                ):(
                    deliveryMethod === "address" ? (
                        <CheckoutFormForAccountAddress register={register} errors={errors} langDetection={langDetection} />
                    ):null
                )
              }
            </div>
            <CheckoutSummary langDetection={langDetection}/>
          </form>
        </div>
      </div>
      {
        showPayType && (<PaymentType langDetection={langDetection} setShowPayType={setShowPayType}/>)
      }
    </div>
  );
};

export default Checkout;
