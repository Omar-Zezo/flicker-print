import { Trash2, X } from '@/images/svg'
import Button from '@/utils/Button'
import { t } from 'i18next';

const DeleteAddress = ({setShowDeleteAddress, langDetection}) => {


  return (
    <div className={`size-full fixed top-0 left-0 z-50 bg-black/80 ${
          langDetection === "ar" && "arabic-font"
        }`}>
        <div className='w-[358px] py-10 relative top-1/2 translate-y-[-50%] left-1/2 translate-x-[-50%] rounded-[25px] bg-white'>
        <div className='size-10 rounded-[11px] absolute right-5 top-5 cursor-pointer bg-[#E8EFF5] flex justify-center items-center'
        onClick={()=> setShowDeleteAddress(false)}
        >
            <img width={20} height={20} src={X} alt='x'/>
        </div>
        <div className='size-full flex flex-col gap-3 items-center justify-center'>
            <img src={Trash2} width={64} height={64} alt='logout'/>
            <div className='flex flex-col gap-8'>
            <p className='w-[75%] mx-auto text-xl text-black-500 text-center font-semibold'>Are you sure you want to delete this address?</p>
            <div className='flex justify-center gap-5'>
                <div className='w-[155px] h-10'>
                    <Button txtSize="text-sm" text={t('Delete')} bg="bg-[#D90202]" txtColor="text-white"/>
                </div>
                <div className='w-[155px] h-10'
                onClick={()=> setShowDeleteAddress(false)}
                >
                    <Button txtSize="text-sm" text={t("cancel")} txtColor="text-[#D90202]" border={true} borderColor="border-[#D90202]"/>
                </div>
            </div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default DeleteAddress