import { TrendingUp } from "lucide-react";
import { PiCalendarCheckBold } from "react-icons/pi";
import { TbDots } from "react-icons/tb";
import { FacilityContext } from "../../components/infrastructure/FacilityContext";
import { useContext } from "react";

const Bookings = () => {
      const { facilities } = useContext(FacilityContext);
      
      const safeFacilities = Array.isArray(facilities) ? facilities : [];
      const notAvailableFacilities = safeFacilities.filter(facility => facility.available === false);
      const notAvailableCount = notAvailableFacilities.length;
    

  return (
    <div className="bg-white w-full h-[182px] p-6 rounded-xl border border-[#D0D5DD] flex sm:flex-1 flex-col justify-center">
      <div className="container space-y-[32px]  h-[134px]">
        <div className="top flex flex-col h-[82px] w-full gap-[24px]">
          <div className="h-[24px] w-full flex justify-between items-center">
            <h3 className="text-[14px] font-medium text-gray-700 mb-2">
              Total Bookings
            </h3>
            <div className="pr-3 pb-1 hidden md:inline-block">
              <TbDots />
            </div>
          </div>
          <div className="flex justify-between items-center mb-4 h-[34px]">
            <div className="gap-[2px] flex items-baseline">
              <PiCalendarCheckBold className="self-start mt-1 hidden md:inline-block" />
              <span className="text-[28px] font-bold text-gray-900">{notAvailableCount}</span>
              <i className="text-[14px] font-normal text-[#667185] hidden md:inline-block">
                Booked facilities
              </i>
            </div>
          </div>
        </div>
        <div className="bottom  h-[20px] text-[12px] gap-1 flex items-center">
          <div className="w-5 h-5 flex items-center justify-center text-[#0F973D]">
            <TrendingUp />
          </div>
          <div className="flex items-center gap-[2px]">
            <span className="flex text-[12px] items-center gap-1 font-semibold text-[#0F973D] mr-1">
              Up 42%
            </span>
            <span className="hidden md:inline-block">Month-over-month</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bookings;
