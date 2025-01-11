import { Trash } from '@/images/svg'

const AddressCard = ({setShowDeleteAddress}) => {
  return (
    <div className="flex flex-col p-5 gap-10 relative border-[.5px] border-black/10 rounded-[24px]">
    <div className="absolute top-5 right-5 rounded-[8px] cursor-pointer size-10 flex justify-center items-center bg-[#F5F5F5]"
    onClick={()=>setShowDeleteAddress(true)}
    >
      <img src={Trash} width={24} height={24} alt="trash" />
    </div>

    <div className="flex gap-10">
      <div className="flex flex-col gap-1">
        <p className="text-[12px] text-black-200 font-semibold">
          Country
        </p>
        <p className="text-base text-black-500 font-medium">Egypt</p>
      </div>

      <div className="flex flex-col gap-1">
        <p className="text-[12px] text-black-200 font-semibold">City</p>
        <p className="text-base text-black-500 font-medium">Giza</p>
      </div>

      <div className="flex flex-col gap-1">
        <p className="text-[12px] text-black-200 font-semibold">Phone</p>
        <p className="text-base text-black-500 font-medium">
          010024593736
        </p>
      </div>
    </div>

    <div className="flex flex-col gap-1">
      <p className="text-[12px] text-black-200 font-semibold">Address</p>
      <p className="text-base text-black-500 font-medium">
        22Bader - alam Street - 321
      </p>
    </div>
  </div>
  )
}

export default AddressCard