import { FaChevronDown } from "react-icons/fa";
import { IoMdArrowBack } from "react-icons/io";
import { IoNotificationsOutline } from "react-icons/io5";
import { FaUserCircle } from "react-icons/fa";

export default function Navbar() {
  return (
    <nav className="w-full bg-[#f9fafb] py-3 px-4 sm:py-4 sm:px-6 border-b">
      {/* Mobile Layout (stacked) */}
      <div className="sm:hidden flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <IoMdArrowBack className="text-xl text-black" />
            <h1 className="text-base font-semibold text-[#2c3e50]">
              Facility Details
            </h1>
          </div>
          <div className="flex items-center space-x-3">
            <div className="bg-[#d7f3ed] p-2 rounded-full">
              <IoNotificationsOutline className="text-lg text-[#2c3e50]" />
            </div>
            <FaUserCircle className="w-7 h-7 rounded-full object-cover" />
          </div>
        </div>
        
        {/* Full-width search on mobile */}
        <div className="w-48 items-center">
          <input
            type="text"
            placeholder="Search here"
            className="w-full text-sm px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-400"
          />
        </div>
      </div>

      {/* Desktop Layout (horizontal) */}
      <div className="hidden sm:flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <IoMdArrowBack className="text-xl text-black" />
          <h1 className="text-lg font-semibold text-[#2c3e50]">
            Facility Details
          </h1>
        </div>

        <div className="flex items-center space-x-4">
          <div className="w-2xs">
            <input
              type="text"
              placeholder="Search here"
              className="w-full text-sm px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-400"
            />
          </div>
          <div className="bg-[#d7f3ed] p-2 rounded-full">
            <IoNotificationsOutline className="text-lg text-[#2c3e50]" />
          </div>
          <FaUserCircle className="w-8 h-8 rounded-full object-cover" />
          <div className="flex items-center space-x-1 text-[#111827] font-medium">
            <span className="text-lg">Interns</span>
            <FaChevronDown className="text-sm" />
          </div>
        </div>
      </div>
    </nav>
  );
}