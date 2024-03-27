import FloatingPlastics from "/videos/Floating Plastics.mp4";

const Hero = () => {
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
            according to current trends, by 2050 there will be
          </p>
          <h1 className="mb-8 text-center font-openSans text-6xl  font-bold md:text-8xl">
            More Plastic Than Fish
          </h1>
          <p className="font-openSans text-xs md:text-sm uppercase tracking-wider text-slate-200">
            Measured by weight
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
