import Image from 'next/image';

export default function StatsSection() {
  return (
    <section className="flex justify-center bg-[#1e3c63]">
      {/* Container akan menyesuaikan tinggi pada mobile */}
      <div className="relative flex flex-col md:flex-row w-full max-w-[1280px] px-4 md:px-[75px] py-8 md:py-[50px] overflow-hidden">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between w-full text-white gap-8 md:gap-0">
          <h2 className="text-2xl md:text-[32px] text-center md:text-left z-10 leading-tight md:leading-[46px] font-bold w-full md:w-[425px]">
            {"Find Your Cheersmate!"}
          </h2>

          {/* Stats akan stack pada mobile */}
          <div className="flex flex-col sm:flex-row gap-8 md:gap-20">
            {/* First stat */}
            <div className="flex gap-4">
              <div className="flex items-center justify-center w-[50px] h-[50px] bg-[#81a5d4] rounded-full shrink-0">
                <Image
                  src="/images/icons/crown.svg"
                  width={24}
                  height={24}
                  alt="logo"
                />
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="font-poppins text-3xl md:text-[42px] leading-9 md:leading-[46px] font-bold">
                  3,123
                </h3>
                <p className="w-full md:w-[150px] text-base md:text-lg leading-6 md:leading-8">
                  Happy Customers Using Product
                </p>
              </div>
            </div>
            {/* Second stat */}
            <div className="flex gap-4">
              <div className="flex items-center justify-center bg-[#81a5d4] rounded-full w-[50px] h-[50px] shrink-0">
                <Image
                  src="/images/icons/3dcube.svg"
                  width={24}
                  height={24}
                  alt="logo"
                />
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="font-poppins text-3xl md:text-[42px] leading-9 md:leading-[46px] font-bold">
                  12
                </h3>
                <p className="w-full md:w-[119px] text-base md:text-lg leading-6 md:leading-8">
                  Successful On Big Projects
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Background image dengan positioning yang sama untuk desktop */}
        <div className="hidden md:block absolute left-[227.77px] h-[248.13px] w-[345.5px] -top-[16.06px] z-0 pointer-events-none">
          <Image
            src="/images/backgrounds/bg-stats.svg"
            alt="background"
            fill
            className="object-contain"
          />
        </div>
      </div>
    </section>
  );
}
