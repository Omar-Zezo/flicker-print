import { SelectArrow, X } from "@/images/svg";
import Button from "@/utils/Button";
import { t } from "i18next";
import { Controller, useForm } from "react-hook-form";
import { isValidPhoneNumber, parsePhoneNumber } from "libphonenumber-js";
import { PhoneInput } from "react-international-phone";
import { useDispatch } from "react-redux";
import UseFetchCountries from "@/hooks/UseFetchCountries";
import UseFetchCities from "@/hooks/UseFetchCities";
import { getCities } from "@/store/slices/data/cities";

const AddNewAddress = ({ setShowAddNewAddress, langDetection }) => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  const countries = UseFetchCountries();
  const cities = UseFetchCities();

  const dispatch = useDispatch();

  return (
    <div
      className={`size-full fixed top-0 left-0 z-50 bg-black/80 ${
        langDetection === "ar" && "arabic-font"
      }`}
    >
      <div className="py-5 absolute top-1/2 translate-y-[-50%] pt-[70px] left-1/2 translate-x-[-50%] rounded-[25px] bg-white">
        <div
          className="size-10 rounded-[11px] absolute right-5 top-5 cursor-pointer bg-[#E8EFF5] flex justify-center items-center"
          onClick={() => setShowAddNewAddress(false)}
        >
          <img width={20} height={20} src={X} alt="x" />
        </div>
        <div className="size-full px-8 flex flex-col gap-3 items-center justify-center">
          <div className="size-full flex flex-col gap-8">
            <div className="flex flex-col gap-5">
              <p className="text-[28px] text-center text-black-500 font-semibold">
                {t("Add New Address")}
              </p>
            </div>
            <form
              className="flex flex-col gap-8"
              onSubmit={handleSubmit(onSubmit)}
            >
              <div className="w-[444px] px-2 flex flex-col gap-4 h-[400px] overflow-y-auto">
                <div dir="ltr">
                  <label className="flex px-1 mb-[12px] text-base text-black-400 font-medium">
                    {t("phone")}
                    <span className="text-[#D90202]">*</span>
                  </label>
                  <Controller
                    name="mobile"
                    control={control}
                    rules={{
                      validate: (value) => {
                        if (!isValidPhoneNumber(value)) {
                          return t("please enter a valid phone number");
                        }
                        return true;
                      },
                    }}
                    render={({ field }) => (
                      <PhoneInput
                        {...field}
                        className="w-full h-[70px] flex items-center relative pl-8 outline-none border border-black/10 rounded-[18px] text-base text-black-200"
                        defaultCountry="eg"
                        onChange={(value) => {
                          field.onChange(value);
                        }}
                        inputStyle={{
                          width: "100%",
                          background: "transparent",
                          color: "#8A8A8A",
                          fontSize: "16px",
                          border: "none",
                        }}
                      />
                    )}
                  />
                  <p
                    className={`text-red-600 text-base ${
                      langDetection === "en" ? "pl-6" : "pr-6 text-right"
                    }`}
                  >
                    {errors.mobile?.message}
                  </p>
                </div>

                <div className="w-[395px] flex flex-col gap-[12px]">
                  <label className="flex px-1 text-base text-black-400 font-medium">
                    {t("country")}
                    <span className="text-[#D90202]">*</span>
                  </label>
                  <div className="rounded-[18px] relative border border-black/15">
                    <select
                      className="text-black-400 py-[23px] px-5 size-full bg-transparent cursor-pointer font-medium text-base outline-none"
                      {...register("country", {
                        required: t("country is required"),
                      })}
                      onChange={(e) => {
                        dispatch(getCities(e.target.value));
                      }}
                    >
                      <option
                        value=""
                        className="text-base text-black-400 font-medium"
                      >
                        {t("select Your Country")}
                      </option>
                      {countries?.map((country) => (
                        <option
                          key={country.id}
                          value={country.id}
                          className="text-base text-black-400 font-medium"
                        >
                          {country.name}
                        </option>
                      ))}
                    </select>
                    <img
                      className={`absolute ${
                        langDetection === "en" ? "right-4" : "left-4"
                      } top-1/2 z-10 translate-y-[-50%]`}
                      src={SelectArrow}
                      alt="arrow"
                      width={24}
                      height={24}
                    />
                  </div>
                  <p
                    className={`text-red-600 text-base ${
                      langDetection === "en" ? "pl-6" : "pr-6 text-right"
                    }`}
                  >
                    {errors.country?.message}
                  </p>
                </div>

                <div className="w-[395px] flex flex-col gap-[12px]">
                  <label className="flex px-1 text-base text-black-400 font-medium">
                    {t("city")}
                    <span className="text-[#D90202]">*</span>
                  </label>
                  <div className="rounded-[18px] py-[23px] px-5 relative border border-black/15">
                    <select
                      className="text-black-400 px-5 size-full bg-transparent cursor-pointer font-medium text-base outline-none"
                      {...register("city", {
                        required: t("city is required"),
                      })}
                      onChange={() => {
                        dispatch(getCities());
                      }}
                    >
                      <option
                        value=""
                        className="text-base text-black-400 font-medium"
                      >
                        {t("select Your City")}
                      </option>
                      {cities?.map((city) => (
                        <option
                          key={city.id}
                          value={city.id}
                          className="text-base text-black-400 font-medium"
                        >
                          {city.name}
                        </option>
                      ))}
                    </select>
                    <img
                      className={`absolute ${
                        langDetection === "en" ? "right-4" : "left-4"
                      } top-1/2 z-10 translate-y-[-50%]`}
                      src={SelectArrow}
                      alt="arrow"
                      width={24}
                      height={24}
                    />
                  </div>
                  <p
                    className={`text-red-600 text-base ${
                      langDetection === "en" ? "pl-6" : "pr-6 text-right"
                    }`}
                  >
                    {errors.city?.message}
                  </p>
                </div>

                <div className="flex flex-col gap-4">
                  <label
                    htmlFor="address"
                    className="text-base px-1 text-black-400 font-medium cursor-pointer"
                  >
                    {t("Address")}
                  </label>
                  <input
                    id="address"
                    type="text"
                    className="w-full py-[25px] text-sm text-black-500 font-medium outline-none px-8 border-[.5px] border-black/15 rounded-[18px]"
                    placeholder={t("Address")}
                    {...register("address", {
                      required: t("full name is required"),
                      minLength: {
                        value: 3,
                        message: t("full Name must be more than 3 charactrs"),
                      },
                    })}
                  />
                  <p
                    className={`text-red-600 text-base ${
                      langDetection === "en" ? "pl-6" : "pr-6"
                    }`}
                  >
                    {errors.address?.message}
                  </p>
                </div>

              </div>

              <div className="flex justify-center gap-5">
                <button
                  type="submit"
                  className={`w-[214px] h-[46px] font-medium text-sm bg-blue-500 text-white rounded-[42px] ${
                    langDetection === "en"
                      ? "hover:translate-x-1"
                      : "hover:translate-x-[-4px]"
                  } duration-300`}
                >
                  {t("Add")}
                </button>

                <div
                  className="w-[214px] h-[46px]"
                  onClick={() => setShowAddNewAddress(false)}
                >
                  <Button
                    txtSize="text-sm"
                    text={t("cancel")}
                    txtColor="text-blue-500"
                    border={true}
                    borderColor="border-blue-500"
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddNewAddress;
