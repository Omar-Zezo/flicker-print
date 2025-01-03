import { Logout, X } from '@/images/svg'
import { logoutUser } from '@/store/slices/auth/logout';
import Button from '@/utils/Button'
import { t } from 'i18next';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const ConfirmLogout = ({setConfirmLogout, langDetection}) => {

    const logoutData = useSelector((state) => state.logout);
    const dispatch = useDispatch();
  
    const handelLogout = () => {
      dispatch(logoutUser());
    };

    const navigate = useNavigate()
  
    useEffect(() => {
      if (logoutData) {
        if (logoutData.data) {
          if (logoutData.data.status === 200) {
            localStorage.removeItem("token");
            window.location.reload()
          }
        }
      }
    }, [logoutData]);

  return (
    <div className={`size-full fixed top-0 left-0 z-50 bg-black/80 ${
          langDetection === "ar" && "arabic-font"
        }`}>
        <div className='w-[358px] py-5 relative top-1/2 translate-y-[-50%] left-1/2 translate-x-[-50%] rounded-[25px] bg-white'>
        <div className='size-10 rounded-[11px] absolute right-5 top-5 cursor-pointer bg-[#E8EFF5] flex justify-center items-center'
        onClick={()=> setConfirmLogout(false)}
        >
            <img width={20} height={20} src={X} alt='x'/>
        </div>
        <div className='size-full flex flex-col gap-3 items-center justify-center'>
            <img src={Logout} width={64} height={64} alt='logout'/>
            <div className='flex flex-col gap-8'>
            <p className='w-[70%] mx-auto text-xl text-center text-black-500 font-semibold'>{t('are you sure you want to Log Out?')}</p>
            <div className='flex justify-center gap-5'>
                <div className='w-[155px] h-10' onClick={handelLogout}>
                    <Button txtSize="text-sm" text={t('logout')} bg="bg-[#D90202]" txtColor="text-white"/>
                </div>
                <div className='w-[155px] h-10'
                onClick={()=> setConfirmLogout(false)}
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

export default ConfirmLogout