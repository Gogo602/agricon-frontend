import { useLocation, useNavigate } from "react-router-dom";
import { FaBell } from "react-icons/fa";
import avatar from "../../assets/avatar.png";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosSearch } from "react-icons/io";
import { IoIosArrowRoundBack } from "react-icons/io";

export default function Header() {
  const location = useLocation();
  const navigate = useNavigate();

  const showBackArrow = location.pathname !== "/";

  const getPageTitle = () => {
    if (location.pathname === "/") return "Facility";
    if (location.pathname.startsWith("/facility/")) return "Facility Detail";
    if (location.pathname === "/booking") return "Booking Form";
    if (location.pathname === "/booking-summary") return "Booking Summary";

    return "Facility";
  };

  return (
    <header className="bg-white flex flex-wrap justify-between items-center min-h-20 px-10 border-b border-[#8B8B8B4D]">
      <div className="flex items-center gap-2">
        {showBackArrow && (
          <button onClick={() => navigate(-1)} className="mr-2">
            <IoIosArrowRoundBack size={30} />
          </button>
        )}
        <h3 className="font-medium text-[#344054] tracking-[-0.01em] text-xl md:block mr-3">
          {getPageTitle()}
        </h3>
      </div>

      <div className="flex items-center justify-between gap-2 sm:gap-6 w-full md:w-auto">
        <div className="flex items-center gap-2 pl-4 border border-[#8B8B8B] rounded-lg sm:max-w-[300px] lg:w-[400px] h-[40px]">
          <IoIosSearch />
          <input
            type="text"
            placeholder="Search here"
            className="w-full focus:outline-none"
          />
        </div>

        <div className="flex gap-2">
          <div className="flex justify-center items-center w-10 h-10 bg-[#D5F0E8] rounded-full overflow-hidden">
            <FaBell className="text-[#047D58]" />
          </div>
          <div className="flex items-center gap-2">
            <div className="flex justify-center items-center w-10 h-10 rounded-full overflow-hidden">
              <img src={avatar} alt="Avatar" className="object-cover" />
            </div>
            <p className="tracking-[-0.0075em]">Interns</p>
            <IoIosArrowDown />
          </div>
        </div>

        {/* On small screens, show only the search icon */}
        {/* <div className="flex md:hidden justify-end items-center gap-4">
          <IoIosSearch className="text-[#8B8B8B] text-xl" />
        </div> */}
      </div>
    </header>
  );
}
