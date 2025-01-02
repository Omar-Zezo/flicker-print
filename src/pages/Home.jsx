import CodeTracking from "@/components/Home/CodeTracking"
import HeaderHome from "@/components/Home/HeaderHome"
import SpecialProductsContainer from "@/components/Home/SpecialProductsContainer"
import TrendingProductsContainer from "@/components/Home/TrendingProductsContainer"
import UseLangDetection from "@/hooks/UseLangDetection"
import FeaturedCategoriesHome from "@/components/Home/FeaturedCategoriesHome"
import BusinessCategoriesHome from "@/components/Home/BusinessCategoriesHome"
import BestPackagesContainer from "@/components/Home/BestPackagesContainer"
import Answers from "@/components/Home/Answers"


const Home = () => {
const langDetection = UseLangDetection()

  return (
    <div className={`${langDetection === "ar" && "arabic-font"}`} dir={langDetection === "en" ? "ltr" : "rtl"}>
    <HeaderHome langDetection={langDetection}/>
    <div className="container mx-auto flex flex-col mt-[100px] gap-[100px]">
    <CodeTracking langDetection={langDetection}/>
    <SpecialProductsContainer langDetection={langDetection}/>
    <FeaturedCategoriesHome langDetection={langDetection}/>
    <BusinessCategoriesHome langDetection={langDetection}/>
    <TrendingProductsContainer langDetection={langDetection}/>
    <BestPackagesContainer langDetection={langDetection}/>
    <Answers/>
    </div>
    </div>
  )
}

export default Home