import UseLangDetection from '@/hooks/UseLangDetection';
import { ArrowLeft, ArrowRight, ShoppingBag } from '@/images/svg'
import { Link } from 'react-router-dom'

const Button = ({border, text, link, bg, pX, pY, weight, txtColor, borderColor, txtSize, arrow, addCart}) => {
  const lang = UseLangDetection();
  return (
    <Link to={link} className={`size-full ${pX} ${pY} ${weight} flex items-center justify-center rounded-[42px] ${border ? `border ${borderColor}` : `${bg}`} ${txtColor} ${txtSize} font-medium ${lang === "en" ? "hover:translate-x-1" : "hover:translate-x-[-4px]"} duration-300`}>
      {text}
      {arrow && <img src={lang === "en" ?  ArrowRight : ArrowLeft} className='ml-1' width={40} height={40} alt='left-arrow'/>}
      {addCart && <img src={ShoppingBag} className={`${lang === "en" ? "ml-3":"mr-3"}`} width={24} height={24} alt='Shopping Bag'/>}
    </Link>
  )
}

export default Button