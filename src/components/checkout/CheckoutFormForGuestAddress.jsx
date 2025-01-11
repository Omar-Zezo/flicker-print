import { PhoneInput } from "react-international-phone";
import { isValidPhoneNumber, parsePhoneNumber } from "libphonenumber-js";
import { t } from "i18next";
import { SelectArrow } from "@/images/svg";
import UseFetchCountries from "@/hooks/UseFetchCountries";
import { getCities } from "@/store/slices/data/cities";
import UseFetchCities from "@/hooks/UseFetchCities";
import { useDispatch } from "react-redux";

const CheckoutFormForGuestAddress = ({
  langDetection,
  register,
  control,
  errors,
  Controller,
}) => {
  const countries = UseFetchCountries();
  const cities = UseFetchCities();

  const dispatch = useDispatch();


  return (
    <div className="flex flex-col gap-[6px]">
      <div className="flex flex-col gap-4">
        <div className="flex flex-wrap gap-4">
          <div className="w-[395px] flex flex-col gap-[12px]">
            <p className="flex text-base text-black-400 font-medium">
            {t("full name")}<span className="text-[#D90202]">*</span>
            </p>
            <input
              className={`w-full h-[70px] ${
                langDetection === "en" ? "pl-8" : "pr-8"
              } outline-none border-black/10 rounded-[18px] text-sm text-black-200 border`}
              type="text"
              placeholder={t("full name")}
              {...register("name", {
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
              {errors.name?.message}
            </p>
          </div>

          <div className="w-[395px] flex flex-col gap-[12px]">
            <p className="flex text-base text-black-400 font-medium">
            {t("email")}<span className="text-[#D90202]">*</span>
            </p>
            <input
              className={`w-full h-[70px] ${
                langDetection === "en" ? "pl-8" : "pr-8"
              } outline-none border border-black/10 rounded-[18px] text-base text-black-200`}
              type="email"
              placeholder={t("email")}
              {...register("email", {
                required: t("email is required"),
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: t("invalid email address"),
                },
              })}
            />
            <p
              className={`text-red-600 text-base ${
                langDetection === "en" ? "pl-6" : "pr-6"
              }`}
            >
              {errors.email?.message}
            </p>
          </div>

          <div className="w-[395px] flex flex-col gap-[12px]">
            <p className="flex text-base text-black-400 font-medium">
              {t('phone')}<span className="text-[#D90202]">*</span>
            </p>
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
        </div>

        <div className="flex flex-wrap gap-4">
          
          <div className="w-[395px] flex flex-col gap-[12px]">
            <p className="flex text-base text-black-400 font-medium">
              {t('country')}<span className="text-[#D90202]">*</span>
            </p>
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
                  {t('select Your Country')}
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
            <p className="flex text-base text-black-400 font-medium">
              {t('city')}<span className="text-[#D90202]">*</span>
            </p>
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
                  {t('select Your City')}
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

          <div className="w-full flex flex-col gap-[12px]">
            <p className="flex text-base text-black-400 font-medium">
              {t('address')}<span className="text-[#D90202]">*</span>
            </p>
            <textarea
              className={`w-full h-[163px] py-8 overflow-y-auto ${
                langDetection === "en" ? "pl-8" : "pr-8"
              } outline-none resize-none border border-black/10 rounded-[18px] text-base text-black-200`}
              type="email"
              placeholder={t("enter your address")}
              {...register("address", {
                required: t("address is required"),
              })}
            ></textarea>
            <p
              className={`text-red-600 text-base ${
                langDetection === "en" ? "pl-6" : "pr-6"
              }`}
            >
              {errors.address?.message}
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            <div className="w-[395px] flex flex-col gap-[12px]">
              <p className="flex text-base text-black-400 font-medium">
                {t('company name')}
              </p>
              <input
                className={`w-full h-[70px] ${
                  langDetection === "en" ? "pl-8" : "pr-8"
                } outline-none border border-black/10 rounded-[18px] text-base text-black-200`}
                type="email"
                placeholder={t("company name")}
                {...register("companyName", {
                  required: t("company Name is required"),
                })}
              />
              <p
                className={`text-red-600 text-base ${
                  langDetection === "en" ? "pl-6" : "pr-6"
                }`}
              >
                {errors.companyName?.message}
              </p>
            </div>

            <div className="w-[395px] flex flex-col gap-[12px]">
              <p className="flex text-base text-black-400 font-medium">
                {t('commercial License Number')}
              </p>
              <input
                className={`w-full h-[70px] ${
                  langDetection === "en" ? "pl-8" : "pr-8"
                } outline-none border border-black/10 rounded-[18px] text-base text-black-200`}
                type="email"
                placeholder={t("commercial License Number")}
                {...register("commercialLicense", {
                  required: t("commercial License Number is required"),
                })}
              />
              <p
                className={`text-red-600 text-base ${
                  langDetection === "en" ? "pl-6" : "pr-6"
                }`}
              >
                {errors.commercialLicense?.message}
              </p>
            </div>

            <div className="w-[395px] flex flex-col gap-[12px]">
              <p className="flex text-base text-black-400 font-medium">
                {t('tax number')}
              </p>
              <input
                className={`w-full h-[70px] ${
                  langDetection === "en" ? "pl-8" : "pr-8"
                } outline-none border border-black/10 rounded-[18px] text-base text-black-200`}
                type="email"
                placeholder={t("tax number")}
                {...register("taxNumber", {
                  required: t("tax Number is required"),
                })}
              />
              <p
                className={`text-red-600 text-base ${
                  langDetection === "en" ? "pl-6" : "pr-6"
                }`}
              >
                {errors.taxNumber?.message}
              </p>
            </div>

            <div className="w-[395px] flex flex-col gap-[12px]">
              <p className="flex text-base text-black-400 font-medium">
                {t('issuing Authority')}
              </p>
              <input
                className={`w-full h-[70px] ${
                  langDetection === "en" ? "pl-8" : "pr-8"
                } outline-none border border-black/10 rounded-[18px] text-base text-black-200`}
                type="email"
                placeholder={t("issuing Authority")}
                {...register("issuingAuthority", {
                  required: t("issuing Authority is required"),
                })}
              />
              <p
                className={`text-red-600 text-base ${
                  langDetection === "en" ? "pl-6" : "pr-6"
                }`}
              >
                {errors.issuingAuthority?.message}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutFormForGuestAddress;
