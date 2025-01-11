import { PhoneInput } from "react-international-phone";
import { isValidPhoneNumber, parsePhoneNumber } from "libphonenumber-js";
import { t } from "i18next";

const CheckoutFormForGuestStore = ({ langDetection, register, control, errors, Controller }) => {
  
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
            {t("phone")}<span className="text-[#D90202]">*</span>
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
                placeholder={t('commercial License Number')}
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
                placeholder={t('tax number')}
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
                placeholder={t('issuing Authority')}
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

export default CheckoutFormForGuestStore;
