import { t } from "i18next";

const OrderHistory = () => {
 
  return (
    <div className="flex-1 pb-10 flex flex-col gap-8 border-2 border-[#F4F7F9] rounded-[18px]">
      <h2 className="py-5 px-8 text-2xl text-black-500 font-medium">
        {t("Order History")}
      </h2>
      <div>
      <table className="w-full">
          <thead className="w-full bg-[#E9F8F180]">
            <tr className="w-full px-8 flex justify-between text-xl font-semibold text-black-500">
              <th className="flex-1 text-center p-3">
                ID
              </th>
              <th className="flex-1 text-center p-3">
                Date
              </th>
              <th className="flex-1 text-center p-3">
                Quantity
              </th>
              <th className="flex-1 text-center p-3">
                Status
              </th>
              <th className="flex-1 text-center p-3">
                Amount
              </th>
              <th className="flex-1 text-center p-3">
                Amount
              </th>
            </tr>
          </thead>
          <tbody className="w-[912px]">
            {[1,2,3,4,5].map((member, index) => (
              <tr
                key={index}
                className="flex justify-between p-3"
              >
                <td className="flex-1 text-xl text-blue-500 font-medium text-center p-3">#2189008</td>
                <td className="flex-1 overflow-hidden text-ellipsis text-nowrap  text-xl text-black-500 font-medium text-center p-3">
                  29-4-2024
                </td>
                <td className="flex-1 overflow-hidden text-ellipsis text-nowrap  text-xl text-black-500 font-medium text-center p-3">
                  5 Items
                </td>
                <td className="flex-1 overflow-hidden text-ellipsis text-nowrap  text-xl text-black-500 font-medium text-center p-3">
                  <div className="w-[101px] mx-auto px-[12px] py-2 text-sm text-green-500 font-medium rounded-[10px] bg-[#23B5761A]">Completed</div>
                </td>
                <td className="flex-1 overflow-hidden text-ellipsis text-nowrap  text-xl text-black-500 font-medium text-center p-3">
                  $320
                </td>
                <td className="flex-1 overflow-hidden text-ellipsis text-nowrap  text-xl text-black-500 font-medium text-center p-3">
                  $320
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        
      </div>
    </div>
  );
};

export default OrderHistory;
