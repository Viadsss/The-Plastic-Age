import { IconChevronsDown } from "@tabler/icons-react";
import AdamPlastic from "/videos/Creation of Adam Plastic.mp4";

interface Props {
  language: string;
  setLanguage: (language: string) => void;
}

const Hero: React.FC<Props> = ({ language, setLanguage }) => {
  console.log(language);

  return (
    <div className="relative h-screen" id="hero">
      <video
        className="absolute h-full w-full object-cover brightness-50"
        autoPlay
        loop
        muted
      >
        <source src={AdamPlastic} type="video/mp4" />
      </video>
      <div className="absolute z-50 flex w-full justify-center bg-gradient-to-b from-black/50 to-transparent md:fixed">
        <div className="flex w-full max-w-screen-2xl justify-end gap-x-4 px-8 py-4 font-lora text-sm font-semibold text-white md:text-base lg:px-16">
          <button
            className="decoration-2 hover:underline"
            onClick={() => setLanguage("English")}
          >
            english
          </button>
          <button
            className="decoration-2 hover:underline"
            onClick={() => setLanguage("Tagalog")}
          >
            tagalog
          </button>
        </div>
      </div>

      <div className="absolute flex h-full w-full justify-center bg-transparent py-6 text-white">
        <div className="relative flex h-full w-full max-w-screen-2xl flex-col items-center justify-center px-4">
          <h1 className="mb-20 text-center font-lora text-6xl font-bold tracking-wide md:text-8xl">
            The Plastic Age
          </h1>
          <p className="text-center font-openSans tracking-wide md:text-xl">
            signifies the period defined by the extensive use and environmental
            consequences of plastics in human history
          </p>

          <div className="absolute bottom-6 text-xs md:bottom-12 md:text-base">
            <a
              href="#plastic"
              className="flex flex-col items-center font-inter text-gray-300"
            >
              <div>Read More</div>
              <IconChevronsDown className="w-3 animate-bounce md:w-6" />
            </a>
          </div>

          <div className="absolute bottom-0 right-4 flex gap-x-8 text-sm font-light md:right-8 md:text-base">
            <a
              href="https://www.theguardian.com/environment/2019/sep/04/plastic-pollution-fossil-record"
              className="hover:underline"
            >
              theguardian.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
