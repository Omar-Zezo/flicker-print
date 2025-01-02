import { PaymentChecke } from "@/images/svg";


const Notification = ({langDetection}) => {
  return (
    <div className="rounded-[20px] bg-section-gray flex p-5">
      <div className="w-[590px] flex items-center">
        <img src={PaymentChecke} alt="Payment Check" width={64} height={64} />
        <div className="flex flex-col justify-center gap-2 ml-5">
          <p className="text-black-500 text-xl font-medium">
            Payment completed successfully.
          </p>
          <p className="text-black-200 text-sm font-medium">
            our payment has been successfully completed. Thank you for choosing
            our service!
          </p>
        </div>
      </div>
      <div className={`text-base text-black-300 font-medium w-fit ${langDetection === "en" ? "ml-auto":"mr-auto"}`}>
        2 min ago
      </div>
    </div>
  );
};

export default Notification;
