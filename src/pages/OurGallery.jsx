import Navigation from "@/utils/Navigation";
import UseLangDetection from "@/hooks/UseLangDetection";
import Header from "@/utils/Header";
import GalleryContainer from "@/components/gallery/GalleryContainer";

const OurGallery = () => {
  const langDetection = UseLangDetection();

  return (
    <div
      className={`flex flex-col gap-8 ${
        langDetection === "ar" && "arabic-font"
      }`}
      dir={langDetection === "en" ? "ltr" : "rtl"}
    >
      <Header title="our Gallery" />
      <div className="container flex flex-col gap-8">
        <Navigation current="our Gallery"/>
        <GalleryContainer/>
      </div>
    </div>
  );
};

export default OurGallery;
