import { OurProduct } from "@/images/imgs";
import { Ellipse4 } from "@/images/svg";

const OurProducts = ({lang}) => {
  return (
    <div className="flex gap-[58px]">
      <div className="w-[612px] flex flex-col gap-[28px]">
        <h5 className="text-base text-blue-500 font-medium">Our Protects</h5>
        <p className="w-[90%] font-medium text-5xl leading-[67px]">
          <span className="font-bold text-black-500 text-5xl">Discover</span>{" "}
          The World With Us.
        </p>
        <p className="text-black-300 text-sm font-medium">
          Flicker is a leading platform and store dedicated to custom printing
          on a wide range of products. We empower individuals and businesses to
          create unique, personalized designs with a creative touch that stands
          out. Our offerings include custom printing on mugs, apparel,
          accessories, and gifts, crafted with precision and quality.
        </p>
        <p className="text-black-300 text-sm font-medium">
          At Flicker, we’re more than just a store – we’re a partner in your
          creative journey. Whether you’re expressing your personal style,
          launching a promotional campaign, or building your brand identity, we
          deliver tailored solutions that bring your ideas to life.
        </p>
      </div>
      <div className="w-[530px] h-[358px] border-[9px] relative bg-white border-[#FEFEFE] rounded-l-[50px] rounded-br-[50px]">
        <img src={Ellipse4} alt="round" className={`absolute top-1/2 translate-y-[-50%] z-[-1] ${lang === "en" ? "right-[-25%]":"left-[-35%] rotate-[180deg]"}`}/>
        <img src={OurProduct} className="size-full object-cover rounded-l-[50px] rounded-br-[50px]" alt="our-product"/>
      </div>
    </div>
  );
};

export default OurProducts;
