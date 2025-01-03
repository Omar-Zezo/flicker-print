import { X } from "@/images/svg";

const ViewItem = ({ setShowGalleryItem, itemToView, langDetection }) => {
  return (
    <div
      className={`size-full fixed top-0 left-0 z-50 bg-black/80 ${
        langDetection === "ar" && "arabic-font"
      }`}
    >
      <div className="w-[65%] h-fit py-5 absolute top-1/2 translate-y-[-50%] left-1/2 translate-x-[-50%] rounded-[25px] bg-white">
        <div
          className="size-10 rounded-[11px] absolute right-5 top-5 cursor-pointer bg-[#E8EFF5] flex justify-center items-center"
          onClick={() => setShowGalleryItem(false)}
        >
          <img width={20} height={20} src={X} alt="x" />
        </div>
        <div className="size-full px-8 flex flex-col gap-3 items-center justify-center">
          <div className="size-full flex flex-col gap-5">
            <div className="flex flex-col gap-5 pb-5">
              <p className="text-2xl text-black-500 font-semibold">
              {itemToView?.name}
              </p>
              <p className="w-1/2 text-sm text-black-200 font-medium">
                {itemToView?.description}
              </p>
            </div>
            <div className="w-full h-[468px] rounded-[30px]">
              <img src={itemToView?.image} className="size-full rounded-[30px] object-cover" alt="img"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewItem;
