import dryingIcon from "./assets/dryingIcon.png";
import processingIcon from "./assets/processingIcon.png";
import storageIcon from "./assets/storageIcon.png";
import coldIcon from "./assets/coldIcon.png";

import { GoHomeFill } from "react-icons/go";
import { FaThermometerEmpty } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";
import { RiCalendarScheduleFill } from "react-icons/ri";
import { MdSolarPower } from "react-icons/md";
import { MdWallet } from "react-icons/md";

export const cardData = [
  {
    icon: dryingIcon,
    alt: "Drying Facilities",
    label: "Drying Facilities",
    description: "Grain and crop drying systems and equipment",
  },
  {
    icon: processingIcon,
    alt: "Processing Units",
    label: "Processing Units",
    description: "Agricultural product processing facilities",
  },
  {
    icon: storageIcon,
    alt: "Storage Facilities",
    label: "Storage Facilities",
    description: "Secure storage spaces for harvested crops",
  },
  {
    icon: coldIcon,
    alt: "Cold Storage",
    label: "Cold Storage",
    description: "Temperature-controlled storage facilities",
  },
];

// export const facilityData = [
//   {
//     facility: "Golden Grains Dryer Station",
//     location: "Imota‑Ikorodu, Lagos State...",
//     type: "Drying Facility",
//   },
//   {
//     facility: "AgroPrime Processing Hub",
//     location: "Ketu‑Ereyun (between Epe...",
//     type: "Processing Unit",
//   },
//   {
//     facility: "SunHarvest Solar Drying Yard",
//     location: "Mile 12 International Market...",
//     type: "Drying Facility",
//   },
//   {
//     facility: "Frost Commodities Coldroom",
//     location: "22 Ogudu Industrial Estate,...",
//     type: "Cold Storage",
//   },
//   {
//     facility: "SafeGrain Silo Depot",
//     location: "7B Abiloye Street, Ijegun Ak...",
//     type: "Storage Facility",
//   },
//   {
//     facility: "Standard Silos",
//     location: "Mile 2, Central Area District...",
//     type: "Storage Facility",
//   },
// ];

// ✅ Sample facilityData (data.js)
export const facilityData = [
  {
    name: "Golden Grains Dryer",
    type: "Dryer",
    address: "Imota-Ikorodu, Lagos State",
  },
  {
    name: "AgroPrime Hub",
    type: "Processing Unit",
    address: "Ketu-Ereyun (between Epe-Ketu)",
  },
  {
    name: "SunHarvest Drying",
    type: "Dryer",
    address: "Mile 12 International Market",
  },
  {
    name: "SafeGrain Silo Depot",
    type: "Storage Facility",
    address: "7B Abiloye Street, Ijegun",
  },
  {
    name: "Standard Silos",
    type: "Storage Facility",
    address: "Mile 2, Central Area District",
  },
];

export const facilityDetails = [
  {
    icon: <GoHomeFill />,
    label: "Facility Type",
    description: "Drying Facility",
  },
  {
    icon: <FaThermometerEmpty />,
    label: "Climate Control",
    description: "Temperature-controlled environment",
  },
  {
    icon: <MdOutlineShoppingCart />,
    label: "Capacity",
    description: "50,000 sq ft",
  },
  {
    icon: <RiCalendarScheduleFill />,
    label: "Operating Hours",
    description: "Mon - Sat: 8:00 AM - 8:00 PM",
  },
  {
    icon: <MdSolarPower />,
    label: "Power Source",
    description: "Solar + Grid",
  },
  {
    icon: <MdWallet />,
    label: "Price",
    description: "N2,000/ton/day",
  },
];
