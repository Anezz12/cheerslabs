export default function ServiceBanner() {
  return (
    <div
      className="
            flex flex-row items-center justify-center
            gap-3 md:gap-5 
            border-2 border-dashed border-[#1e3c63] 
            rounded-full
            py-3 px-6 md:px-10
            bg-white
            text-center
        "
    >
      <span className="text-base md:text-lg font-semibold text-[#1e3c63] uppercase hidden md:inline">
        TYPE OF SERVICES AVAILABLE
      </span>

      <div className="flex items-center justify-center gap-3 md:gap-5 font-medium">
        <span className="text-lg md:text-xl text-[#1e3c63]">Pick-up</span>
        <span className="text-lg md:text-xl text-[#1e3c63]">•</span>
        <span className="text-lg md:text-xl text-[#1e3c63]">Delivery</span>
        <span className="text-lg md:text-xl text-[#1e3c63]">•</span>
        <span className="text-lg md:text-xl text-[#1e3c63]">
          Coffee Catering
        </span>
      </div>
    </div>
  );
}
