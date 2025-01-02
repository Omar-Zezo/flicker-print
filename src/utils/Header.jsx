import { BackgroundPattern, Midjourney1, NoiseTexture } from '@/images/imgs'
import { t } from 'i18next'

const Header = ({title}) => {
  return (
    <div className='bg-[#00120BB2] w-full h-[256px] relative'>
        <img src={Midjourney1} width={740} height={420} alt='header-bg-1' className='absolute right-0  bottom-0 bg-blend-color-dodge'/>
        <img src={NoiseTexture} alt='header-bg' className='absolute left-0 top-0 size-full object-cover'/>
        <img src={BackgroundPattern} alt='header-bg' className='absolute left-0 top-0 bg-blend-darken size-full object-cover'/>
        <h1 className='absolute top-[55%] translate-y-[-50%] left-1/2 translate-x-[-50%] text-5xl text-white font-medium'>{t(title)}</h1>
    </div>
  )
}

export default Header