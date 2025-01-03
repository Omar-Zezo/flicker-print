import { Package1, Package2 } from '@/images/imgs'
import { Star } from '@/images/svg'
import Button from '@/utils/Button'
import React from 'react'
import { Link } from 'react-router-dom'

const PackageCard = () => {
  return (
    <Link to={"/packages/1"} className="w-[49%] flex flex-col gap-5 rounded-[20px] p-4 bg-section-gray">
    <div className="flex gap-4">
      <div className="w-[272px] relative flex justify-center items-center h-[254px] rounded-[20px] bg-white">
        <img width={160} height={175} src={Package2} alt="img" />
        <div className="bg-black/70 size-full flex justify-center items-center absolute rounded-[20px] top-0 left-0">
          <small className="text-white text-[32px] font-semibold">
            +2
          </small>
        </div>
      </div>
      <div className="w-[272px] flex justify-center items-center h-[254px] rounded-[20px] bg-white">
        <img width={160} height={175} src={Package1} alt="img" />
      </div>
    </div>
    <div className="flex flex-col gap-5">
      <div className="w-[97%] mx-auto flex justify-between">
        <h3 className="text-xl text-black-500 font-semibold">
          Sinamic Cards Package
        </h3>
        <div className="flex gap-2">
          <div className="flex items-center gap-2">
            <img src={Star} width={20} height={20} alt="star" />
          </div>
          <div className="flex items-center gap-2">
            <p className="text-xl text-black-500 font-medium">4.5</p>
            <p className="text-sm text-black-300 font-normal">(2910)</p>
          </div>
        </div>
      </div>
      <p className="text-black-300 text-sm leading-[21px] font-medium relative package-description">
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
        nonummy Lorem ipsum dolor sit yes for amet, consectetuer elit, sed
        diam nonummy dolor sit amet,
      </p>
      <div className="w-full flex items-center justify-between">
        <p className="text-[28px] pt-[5px] text-black-500 font-semibold">
          $3900
        </p>
        <div className="w-[180px] h-[60px]">
          <Button
            txtSize="text-base"
            text={"Add To Card"}
            bg={"bg-blue-500"}
            txtColor="text-white"
            addCart={true}
          />
        </div>
      </div>
    </div>
  </Link>
  )
}

export default PackageCard