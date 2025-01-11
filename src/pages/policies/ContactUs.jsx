import Navigation from "@/utils/Navigation";
import UseLangDetection from "@/hooks/UseLangDetection";
import Header from "@/utils/Header";
import ContactUsContainer from "@/components/conatctUs/contactUsContainer";


const ContactUs = () => {
  const lang = UseLangDetection();
  return (
    <div
      className={`w-full flex flex-col gap-8 ${lang === "ar" && "arabic-font"}`}
      dir={lang === "en" ? "ltr" : "rtl"}
    >
      <Header title="contact Us" />
      <div className="container flex flex-col gap-8">
        <Navigation current="contact Us" />
        <ContactUsContainer lang={lang}/>
      </div>
    </div>
  );
};

export default ContactUs;
