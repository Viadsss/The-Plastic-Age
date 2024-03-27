interface Props {
  language: string;
}

const Countries: React.FC<Props> = ({ language }) => {
  return (
    <div className="flex h-screen w-full justify-center bg-black py-6 text-center text-white">
      <div className="relative flex w-full max-w-screen-2xl flex-col items-center justify-center px-4">
        <div className="mb-4 font-inter text-5xl font-bold uppercase md:text-7xl">
          {language === "English" ? "Top 5 Countries" : "Top 5 na Bansa"}
        </div>
        <div className="mb-10 font-openSans text-xl uppercase tracking-widest md:mb-20 md:text-2xl">
          {language === "English"
            ? "Emitting the Highest Share of Global Plastic Waste to the Ocean"
            : "Na Pinakamalaking Kontribyutor ng Plastik na Basura sa Karagatan"}
        </div>

        <div className="grid w-full gap-4 text-center md:grid-cols-5">
          <div className="flex flex-col items-center justify-center">
            <div className="font-openSans text-2xl font-bold md:text-3xl">
              Philippines
            </div>
            <div className="my-1 w-1/4 border-b md:my-2"></div>
            <div className="text-sm font-light md:text-base">36.38%</div>
          </div>
          <div className="flex flex-col items-center justify-center">
            <div className="font-openSans text-2xl font-bold md:text-3xl">
              India
            </div>
            <div className="my-1 w-1/4 border-b md:my-2"></div>
            <div className="text-sm font-light md:text-base">12.92%</div>
          </div>
          <div className="flex flex-col items-center justify-center">
            <div className="font-openSans text-2xl font-bold md:text-3xl">
              Malaysia
            </div>
            <div className="my-1 w-1/4 border-b md:my-2"></div>
            <div className="text-sm font-light md:text-base">7.46%</div>
          </div>
          <div className="flex flex-col items-center justify-center">
            <div className="font-openSans text-2xl font-bold md:text-3xl">
              China
            </div>
            <div className="my-1 w-1/4 border-b md:my-2"></div>
            <div className="text-sm font-light md:text-base">7.22%</div>
          </div>
          <div className="flex flex-col items-center justify-center">
            <div className="font-openSans text-2xl font-bold md:text-3xl">
              Indonesia
            </div>
            <div className="my-1 w-1/4 border-b md:my-2"></div>
            <div className="text-sm font-light md:text-base">5.75%</div>
          </div>
        </div>
        <div className="absolute bottom-0 right-4 flex gap-x-8 text-sm font-light md:right-8 md:text-base">
          <a
            href="https://ourworldindata.org/grapher/share-of-global-plastic-waste-emitted-to-the-ocean?tab=table&country=~PHL"
            className="hover:underline"
          >
            ourworldindata.org
          </a>
        </div>
      </div>
    </div>
  );
};

export default Countries;
