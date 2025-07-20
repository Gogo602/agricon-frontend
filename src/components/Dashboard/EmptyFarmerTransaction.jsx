import { FaHouse } from "react-icons/fa6";

function EmptyFarmerTransaction() {
  return (
    <div className="flex items-center p-5 justify-center min-h-[40vh] w-[100%]  md:min-h-[30vh] lg:min-h-[50vh]">
      <div className="space-y-5 text-center">
        <FaHouse size={50} className="mx-auto" />
        <h6 className="font-bold text-xl">
          You don't have any recent Transactions
        </h6>
      </div>
    </div>
  );
}

export default EmptyFarmerTransaction;
