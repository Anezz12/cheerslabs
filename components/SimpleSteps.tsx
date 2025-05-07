import Image from 'next/image';

export default function SimpleSteps() {
  return (
    <section className="w-full overflow-x-hidden py-12 md:py-20">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 flex flex-col gap-8 md:gap-[50px]">
        {/* Heading */}
        <div className="flex flex-col items-center gap-3 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-[50px] font-extrabold leading-tight md:leading-[59px]">
            Perfect Coffee in 3 Steps.
          </h2>
          <p className="text-base md:text-lg font-medium leading-[21px] max-w-xl">
            We brew our specialty coffee using techniques perfected over
            generations
          </p>
        </div>

        {/* Steps Container */}
        <div className="w-full max-w-6xl mx-auto">
          {/* Top arrow - hidden on mobile */}
          <div className="hidden md:block relative h-20 w-full">
            <Image
              src="/images/icons/arrow-top.svg"
              alt="arrow"
              width={400}
              height={60}
              className="object-contain ml-[67px] mb-[-20px]"
            />
          </div>

          {/* Steps */}
          <div className="flex flex-col md:flex-row md:items-center gap-8 md:gap-12 lg:gap-20">
            {/* Item 1 */}
            <div className="flex flex-col gap-5 p-2.5 md:p-0">
              <div className="flex items-center gap-4">
                <div className="flex items-center justify-center w-[50px] h-[50px] rounded-full bg-[#81a5d4] shrink-0">
                  <div className="relative w-6 h-6">
                    <Image
                      src="/images/icons/security-user.svg"
                      alt="Sign Up Icon"
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
                <h3 className="font-poppins text-lg md:text-[20px] font-semibold leading-[30px]">
                  Select Beans
                </h3>
              </div>
              <p className="text-[16px] leading-7 font-medium w-full md:w-[276px] md:mr-[27.33px]">
                Choose from our selection of premium single-origin beans,
                ethically sourced from around the world.
              </p>
            </div>

            {/* Item 2 */}
            <div className="flex flex-col gap-5 p-2.5 md:p-0">
              <div className="flex items-center gap-4">
                <div className="flex items-center justify-center w-[50px] h-[50px] rounded-full bg-[#81a5d4] shrink-0">
                  <div className="relative w-6 h-6">
                    <Image
                      src="/images/icons/3d-cube-scan.svg"
                      alt="Analyze Data Icon"
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
                <h3 className="font-poppins text-lg md:text-[20px] font-semibold leading-[30px]">
                  Perfect Brewing
                </h3>
              </div>
              <p className="text-[16px] leading-7 font-medium w-full md:w-[276px] md:mr-[27.33px]">
                Our baristas use precise techniques to extract the perfect
                flavor profile from each coffee variety.
              </p>
            </div>

            {/* Item 3 */}
            <div className="flex flex-col gap-5 p-2.5 md:p-0">
              <div className="flex items-center gap-4">
                <div className="flex items-center justify-center w-[50px] h-[50px] rounded-full bg-[#81a5d4] shrink-0">
                  <div className="relative w-6 h-6">
                    <Image
                      src="/images/icons/crown.svg"
                      alt="Winner Icon"
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
                <h3 className="font-poppins text-lg md:text-[20px] font-semibold leading-[30px]">
                  Savor the Moment
                </h3>
              </div>
              <p className="text-[16px] leading-7 font-medium w-full md:w-[276px] md:mr-[27.33px]">
                Experience the rich aromas and complex flavors in every cup,
                perfectly served at the ideal temperature.
              </p>
            </div>
          </div>

          {/* Bottom arrow - hidden on mobile */}
          <div className="hidden md:block relative h-10 w-full">
            <Image
              src="/images/icons/arrow-bottom.svg"
              alt="arrow"
              width={400}
              height={60}
              className="object-contain mt-5 mx-auto ml-[480px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
