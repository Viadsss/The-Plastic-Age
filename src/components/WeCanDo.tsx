import { IconChevronsUp } from "@tabler/icons-react";
import Landfill from "/videos/Plastic Landfill.mp4";

const WeCanDo = () => {
  return (
    <div className="relative h-screen">
      <video
        className="absolute h-full w-full object-cover brightness-[.25]"
        autoPlay
        loop
        muted
      >
        <source src={Landfill} type="video/mp4" />
      </video>
      <div className="absolute flex h-full w-full justify-center bg-transparent py-6 text-white">
        <div className="relative flex h-full w-full max-w-screen-2xl flex-col items-center justify-center px-4">
          <div className="mb-8 text-center font-inter text-5xl font-bold tracking-wider md:mb-20 md:text-7xl">
            What We Can Do?
          </div>
          <div className="flex w-full flex-col gap-y-6 pb-12 md:w-3/4 md:gap-y-12">
            <div>
              <div className="font-openSans text-xl font-bold uppercase tracking-wide md:text-2xl">
                Minimize Single-Use Plastic Consumption
              </div>
              <div className="text-sm font-light md:text-base">
                Reduce disposable plastics with reusable alternatives and push
                for sustainable business choices.
              </div>
            </div>
            <div>
              <div className="font-openSans text-xl font-bold uppercase tracking-wide md:text-2xl">
                Recycle
              </div>
              <div className="text-sm font-light md:text-base">
                Recycle plastics to cut waste and preserve the environment.
              </div>
            </div>
            <div>
              <div className="font-openSans text-xl font-bold uppercase tracking-wide md:text-2xl">
                Spread Awareness
              </div>
              <div className="text-sm font-light md:text-base">
                Inform yourself about plastic pollution issues and educate
                others. Share solutions with friends and family or host
                documentary viewings on plastic pollution.
              </div>
            </div>
            <div>
              <div className="font-openSans text-xl font-bold uppercase tracking-wide md:text-2xl">
                Support Groups Fighting Plastic Pollution
              </div>
              <div className="text-sm font-light md:text-base">
                Support non-profits tackling ocean plastic pollution such as{" "}
                <a href="https://www.theplaf.com/" className="underline">
                  The Plastic Flamingo
                </a>
                ,{" "}
                <a href="http://www.motherearthphil.org/" className="underline">
                  Mother Earth Foundation
                </a>
                , and{" "}
                <a
                  href="https://urban-links.org/ccbo-in-philippines/"
                  className="underline"
                >
                  Clean Cities, Blue Ocean (CCBO)
                </a>{" "}
                through donations, no matter how small.
              </div>
            </div>
          </div>

          <div className="absolute bottom-2 text-xs md:bottom-8 md:text-base">
            <a
              href="#hero"
              className="flex flex-col items-center font-inter text-gray-300"
            >
              <IconChevronsUp className="w-3 animate-bounce md:w-6" />
              <div>Go up</div>
            </a>
          </div>

          <div className="absolute bottom-0 right-4 flex gap-x-8 text-sm font-light md:right-8 md:text-base">
            <a
              href="https://www.oceanicsociety.org/resources/7-ways-to-reduce-ocean-plastic-pollution-today/"
              className="hover:underline"
            >
              oceanicesociety.org
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeCanDo;
