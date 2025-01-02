import UseLangDetection from "@/hooks/UseLangDetection";
import { checkVerifyEmail } from "@/store/slices/auth/verifyEmail";
import BtnLoader from "@/utils/BtnLoader";
import { t } from "i18next";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";

const VerifyEmailForm = () => {
  const [btnLoaderStatus, setBtnLoaderStatus] = useState(false);
  const { data, error } = useSelector((state) => state.verifyEmail);
  const langDetection = UseLangDetection();
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
    <form
      className="w-full flex flex-col gap-5"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div
        className={`flex gap-2 ${langDetection === "ar" && "flex-row-reverse"}`}
      >
        {[...Array(6)].map((_, i) => (
          <input
            key={i}
            className={`otp-input w-[83px] h-[100px] text-center text-2xl text-black-500 rounded-[27px] border border-gray-50 ${
              errors[`input${i + 1}`] ? "border-red-600 " : "border-gray-50"
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
  );
};

export default VerifyEmailForm;
