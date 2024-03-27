import { IconChevronsUp } from "@tabler/icons-react";
import Landfill from "/videos/Plastic Landfill.mp4";

interface Props {
  language: string;
}

const WeCanDo: React.FC<Props> = ({ language }) => {
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
          <div className="mb-4 text-center font-inter text-2xl font-bold tracking-wider sm:mb-20 sm:text-5xl md:text-6xl lg:text-7xl">
            {language === "English"
              ? "What We Can Do?"
              : "Ano ang Magagawa Natin?"}
          </div>
          <div className="flex w-full flex-col gap-y-6 pb-12 lg:w-3/4 lg:gap-y-12">
            <div>
              <div className="font-openSans font-bold uppercase sm:text-lg md:text-xl lg:text-2xl">
                {language === "English"
                  ? "Minimize Single-Use Plastic Consumption"
                  : "Bawasan ang Paggamit ng Pang Isang Gamitang Plastik"}
              </div>
              <div className="text-sm font-light md:text-base">
                {language === "English"
                  ? "Reduce disposable plastics with reusable alternatives and push for sustainable business choices."
                  : "Bawasan ang paggamit ng disposable plastics; gamitin ang reusable alternatives at suportahan ang sustainable na mga negosyo."}
              </div>
            </div>
            <div>
              <div className="font-openSans font-bold uppercase sm:text-lg md:text-xl lg:text-2xl">
                Recycle
              </div>
              <div className="text-sm font-light md:text-base">
                {language === "English"
                  ? "Recycle plastics to cut waste and preserve the environment."
                  : "Mag-recycle ng plastik upang mabawasan ang basura at pangalagaan ang kalikasan."}
              </div>
            </div>
            <div>
              <div className="font-openSans font-bold uppercase sm:text-lg md:text-xl lg:text-2xl">
                {language === "English"
                  ? "Spread Awareness"
                  : "Ikalat ang Kaalaman"}
              </div>
              <div className="text-sm font-light md:text-base">
                {language === "English"
                  ? "Inform yourself about plastic pollution issues and educateothers. Share solutions with friends and family or host documentary viewings on plastic pollution."
                  : "Alamin at ipaalam ang polusyon ng plastik. Ibahagi ang mga solusyon sa iba o mag-organisa ng panonood ng dokumentaryo ukol dito."}
              </div>
            </div>
            <div>
              <div className="font-openSans font-bold uppercase sm:text-lg md:text-xl lg:text-2xl">
                {language === "English"
                  ? "Support Groups Fighting Plastic Pollution"
                  : "Suportahan ang mga Grupo sa Paglaban sa Polusyon ng Plastik"}
              </div>
              <div className="text-sm font-light md:text-base">
                {language === "English"
                  ? "Support non-profits tackling ocean plastic pollution such as "
                  : "Suportahan ang mga non-profit na nakikipaglaban sa polusyon ng plastik sa karagatan gaya ng "}
                <a href="https://www.theplaf.com/" className="underline">
                  The Plastic Flamingo
                </a>
                ,{" "}
                <a href="http://www.motherearthphil.org/" className="underline">
                  Mother Earth Foundation
                </a>
                , {language === "English" ? "and " : "at "}
                <a
                  href="https://urban-links.org/ccbo-in-philippines/"
                  className="underline"
                >
                  Clean Cities, Blue Ocean (CCBO)
                </a>
                {language === "English"
                  ? " through donations, no matter how small."
                  : " sa pamamagitan ng donasyon, kahit gaano pa ito kaliit."}
              </div>
            </div>
          </div>

          <div className="absolute -bottom-3 text-xs md:bottom-8 md:text-base">
            <a
              href="#hero"
              className="flex flex-col items-center font-inter text-gray-300"
            >
              <IconChevronsUp className="w-3 animate-bounce md:w-6" />
              <div>{language === "English" ? "Go up" : "Umakyat"}</div>
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
