import { Back, X } from "@/images/svg";
import { checkVerifyEmail } from "@/store/slices/auth/verifyEmail";
import BtnLoader from "@/utils/BtnLoader";
import { t } from "i18next";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";

const VerifyYourIdentity = ({ setVerifyIdentity, setShowChangePassword, langDetection }) => {
  const [btnLoaderStatus, setBtnLoaderStatus] = useState(false);
  const { data, error } = useSelector((state) => state.verifyEmail);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const dispatch = useDispatch();

  const onSubmit = (data) => {
    setBtnLoaderStatus(true);
    localStorage.setItem(
      "code",
      `${data.input1}${data.input2}${data.input3}${data.input4}${data.input5}${data.input6}`
    );
    dispatch(
      checkVerifyEmail({
        data: {
          code: `${data.input1}${data.input2}${data.input3}${data.input4}${data.input5}${data.input6}`,
        },
      })
    );
  };

  useEffect(() => {
    if (data || error) {
      setBtnLoaderStatus(false);
    }
  }, [data, error]);

  // Function to handle focus transition
  const handleFocus = (e, index) => {
    const value = e.target.value;
    const inputs = document.querySelectorAll(".otp-input");
    if (value && index < inputs.length - 1) {
      inputs[index + 1].focus();
    }
  };

  // Function to handle backspace
  const handleBackspace = (e, index) => {
    if (e.key === "Backspace" && !e.target.value) {
      const inputs = document.querySelectorAll(".otp-input");
      if (index > 0) {
        inputs[index - 1].focus();
      }
    }
  };

  return (
    <div
      className={`size-full fixed top-0 left-0 z-50 bg-black/80 ${
        langDetection === "ar" && "arabic-font"
      }`}
    >
      <div className="py-5 absolute top-1/2 translate-y-[-50%] pt-[70px] left-1/2 translate-x-[-50%] rounded-[25px] bg-white">
        <div
          className="size-10 rounded-[11px] absolute right-5 top-5 cursor-pointer bg-[#E8EFF5] flex justify-center items-center"
          onClick={() => setVerifyIdentity(false)}
        >
          <img width={20} height={20} src={X} alt="x" />
        </div>

        <div className="size-10 absolute left-5 top-5 rounded-[11px] cursor-pointer bg-[#E8EFF5] flex justify-center items-center">
          <div onClick={()=> {
            setVerifyIdentity(false)
            setShowChangePassword(true)
          }}>
            <img width={12} height={6} src={Back} alt="back" />
          </div>
        </div>

        <div className="size-full px-8 flex flex-col gap-3 items-center justify-center">
          <div className="size-full flex flex-col gap-8">
            <div className="flex flex-col gap-5">
              <p className="text-[28px] text-center text-black-500 font-semibold">
                {t("Verify Your Identity")}
              </p>
              <div className="flex flex-col items-center gap-2">
                <p className="text-base text-black-200 font-normal">
                  we sent 6-digit code to
                </p>
                <p className="text-base text-black-500 font-medium">
                  Ali@Flicker.com
                </p>
                <p className="text-base text-black-200 font-normal">
                  this code will be valid for (2) minutes.
                </p>
              </div>
            </div>

            <form
              className="w-full flex flex-col gap-5"
              onSubmit={handleSubmit(onSubmit)}
            >
              <div
                className={`flex gap-2 ${
                  langDetection === "ar" && "flex-row-reverse"
                }`}
              >
                {[...Array(6)].map((_, i) => (
                  <input
                    key={i}
                    className={`otp-input w-[83px] h-[100px] text-center text-2xl text-black-500 rounded-[27px] border border-gray-50 ${
                      errors[`input${i + 1}`]
                        ? "border-red-600 "
                        : "border-gray-50"
                    }`}
                    type="text"
                    maxLength="1"
                    autoFocus={i === 0}
                    {...register(`input${i + 1}`, { required: true })}
                    onInput={(e) => handleFocus(e, i)}
                    onKeyDown={(e) => handleBackspace(e, i)}
                  />
                ))}
              </div>
              <div>
                <button
                  className="w-full h-[70px] relative outline-none border-black/10 rounded-[18px] text-xl font-medium text-white bg-blue-500 duration-300 cursor-pointer"
                  type="submit"
                  disabled={btnLoaderStatus}
                >
                  {btnLoaderStatus ? <BtnLoader /> : t("send")}
                </button>
              </div>
            </form>

          </div>
        </div>
      </div>
    </div>
  );
};

export default VerifyYourIdentity;
