import { ChevronRight } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

const RecentBookingList = ({ bookings }) => {

  return (
    <div className="w-full py-4 px-6 border h-[370px] border-[#D0D5DD] space-y-7 rounded-xl">
      <div className="w-[294px] space-y-[2px]">
        <h1 className="font-semibold text-[16px] text-[#101928]">
          Recent Bookings
        </h1>
        <p className="text-[12px] text-[#344054]">
          Hurray! check out farmers who booked your facility
        </p>
      </div>
      <div className="space-y-3 min-w-70">
        <div className="space-y-7">
          {bookings.map((person, i) => (
            <div
              key={i}
              className="flex w-full justify-between items-center h-9"
            >
              <div className="flex gap-4">
                <div className="h-8 w-8 flex justify-center items-center rounded-full">
                  <img
                    src={person.img}
                    className="rounded-full h-8 w-8 object-cover"
                  />
                </div>
                <div>
                  <p className="font-[500] text-[#1D2739] text-[12px]">
                    {person.name}
                  </p>
                  <p className="text-[#667185] text-[12px]">{person.email}</p>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <div>
                  <p className="font-semibold text-[12px] text-gray-900">
                    ${person.price}
                  </p>
                  <p className="text-gray-600 text-[12px]">{person.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="p-1 text-[#4F46E5] text-[10px]">
          <Link className="text-[10px] flex gap-1 items-center">
            See all Bookings <ChevronRight size={12} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RecentBookingList;