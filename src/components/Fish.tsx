import FloatingPlastics from "/videos/Floating Plastics.mp4";

interface Props {
  language: string;
}

const Hero: React.FC<Props> = ({ language }) => {
  return (
    <div className="relative h-screen">
      <video
        className="absolute h-full w-full object-cover brightness-50"
        autoPlay
        loop
        muted
      >
        <source src={FloatingPlastics} type="video/mp4" />
      </video>
      <div className="absolute flex h-full w-full justify-center bg-transparent py-6 text-white">
        <div className="relative flex h-full w-full max-w-screen-2xl flex-col items-center justify-center px-4">
          <p className="mb-4 text-center font-openSans text-xl uppercase tracking-wide md:text-2xl">
            {language === "English"
              ? "according to current trends, by 2050 there will be"
              : "Ayon sa kasalukuyang talaan, sa taong 2050"}
          </p>
          <h1 className="mb-4 text-center font-openSans text-6xl font-bold md:text-8xl">
            {language === "English"
              ? "More Plastic Than Fish"
              : "Mas Marami na ang Plastik Kaysa sa Isda"}
          </h1>
          <p className="mb-8 text-center font-openSans text-xl uppercase tracking-wide md:text-2xl">
            {language === "English" ? "in the world's ocean" : "sa mga dagat"}
          </p>
          <p className="font-openSans text-xs uppercase tracking-wider text-slate-200 md:text-sm">
            {language === "English"
              ? "Measured by weight"
              : "Sinukat batay sa timbang"}
          </p>
          <div className="absolute bottom-0 right-4 flex gap-x-8 text-sm font-light md:right-8 md:text-base">
            <a
              href="https://www.weforum.org/publications/the-new-plastics-economy-rethinking-the-future-of-plastics/"
              className="hover:underline"
            >
              weforum.org
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
