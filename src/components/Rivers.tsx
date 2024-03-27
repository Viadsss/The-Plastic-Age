const Rivers = () => {
  return (
    <div className="flex min-h-screen w-full justify-center bg-black py-4 text-center text-white md:h-screen">
      <div className="relative flex w-full max-w-screen-2xl flex-col items-center justify-center px-4 py-14 md:py-0">
        <div className="mb-2 font-inter text-3xl font-bold uppercase md:mb-4 lg:text-7xl">
          7 out of the top 10 rivers
        </div>
        <div className="mb-2 font-openSans uppercase tracking-widest md:mb-4 lg:text-2xl">
          contributing to ocean plastic pollution are in the{" "}
          <span className="bg-gradient-to-r from-red-500 to-yellow-400 bg-clip-text text-transparent">
            Philip
          </span>
          <span className="bg-gradient-to-r from-sky-500 to-zinc-300 bg-clip-text text-transparent">
            pines
          </span>
        </div>
        <div className="mb-10 font-openSans text-xs uppercase tracking-widest opacity-70 md:mb-20 md:text-sm">
          from 1656 rivers around the globe as top pollutants in the oceans
        </div>
        <div className="grid w-full grid-cols-2 items-start gap-y-8 md:grid-cols-5 md:gap-y-14">
          <div className="flex flex-col items-center justify-center">
            <div className="font-openSans font-bold md:text-xl lg:text-2xl">
              Pasig
            </div>
            <div className="animate-flicker text-xs md:text-sm md:uppercase md:tracking-widest">
              Philippines
            </div>
            <div className="my-2 w-1/4 border-b"></div>
            <div className="text-xs font-light md:text-sm">6.43%</div>
          </div>
          <div className="flex flex-col items-center justify-center">
            <div className="font-openSans font-bold md:text-xl lg:text-2xl">
              Klang
            </div>
            <div className="text-xs md:text-sm md:uppercase md:tracking-widest">
              Malaysia
            </div>
            <div className="my-2 w-1/4 border-b"></div>
            <div className="text-xs font-light md:text-sm">1.33%</div>
          </div>
          <div className="flex flex-col items-center justify-center">
            <div className="font-openSans font-bold md:text-xl lg:text-2xl">
              Ulhas
            </div>
            <div className="text-xs md:text-sm md:uppercase md:tracking-widest">
              India
            </div>
            <div className="my-2 w-1/4 border-b"></div>
            <div className="text-xs font-light md:text-sm">1.33%</div>
          </div>
          <div className="flex flex-col items-center justify-center">
            <div className="font-openSans font-bold md:text-xl lg:text-2xl">
              Tullahan
            </div>
            <div className="animate-flicker text-xs md:text-sm md:uppercase md:tracking-widest">
              Philippines
            </div>
            <div className="my-2 w-1/4 border-b"></div>
            <div className="text-xs font-light md:text-sm">1.33%</div>
          </div>
          <div className="flex flex-col items-center justify-center">
            <div className="font-openSans font-bold md:text-xl lg:text-2xl">
              Meycauayan
            </div>
            <div className="animate-flicker text-xs md:text-sm md:uppercase md:tracking-widest">
              Philippines
            </div>
            <div className="my-2 w-1/4 border-b"></div>
            <div className="text-xs font-light md:text-sm">1.23%</div>
          </div>
          <div className="flex flex-col items-center justify-center">
            <div className="font-openSans font-bold md:text-xl lg:text-2xl">
              Pampanga
            </div>
            <div className="animate-flicker text-xs md:text-sm md:uppercase md:tracking-widest">
              Philippines
            </div>
            <div className="my-2 w-1/4 border-b"></div>
            <div className="text-xs font-light md:text-sm">0.95%</div>
          </div>
          <div className="flex flex-col items-center justify-center">
            <div className="font-openSans font-bold md:text-xl lg:text-2xl">
              Libmanan
            </div>
            <div className="animate-flicker text-xs md:text-sm md:uppercase md:tracking-widest">
              Philippines
            </div>
            <div className="my-2 w-1/4 border-b"></div>
            <div className="text-xs font-light md:text-sm">0.72%</div>
          </div>
          <div className="flex flex-col items-center justify-center">
            <div className="font-openSans font-bold md:text-xl lg:text-2xl">
              Ganges
            </div>
            <div className="text-xs md:text-sm md:uppercase md:tracking-widest">
              India
            </div>
            <div className="my-2 w-1/4 border-b"></div>
            <div className="text-xs font-light md:text-sm">0.63%</div>
          </div>
          <div className="flex flex-col items-center justify-center">
            <div className="font-openSans font-bold md:text-xl lg:text-2xl">
              Rio Grande de Mindanao
            </div>
            <div className="animate-flicker text-xs md:text-sm md:uppercase md:tracking-widest">
              Philippines
            </div>
            <div className="my-2 w-1/4 border-b"></div>
            <div className="text-xs font-light md:text-sm">0.54%</div>
          </div>
          <div className="flex flex-col items-center justify-center">
            <div className="font-openSans font-bold md:text-xl lg:text-2xl">
              Agno
            </div>
            <div className="animate-flicker text-xs md:text-sm md:uppercase md:tracking-widest">
              Philippines
            </div>
            <div className="my-2 w-1/4 border-b"></div>
            <div className="text-xs font-light md:text-sm">0.47%</div>
          </div>
        </div>

        <div className="absolute bottom-0 right-4 flex gap-x-8 text-sm font-light md:right-8 md:text-base">
          <a
            href="https://news.abs-cbn.com/spotlight/06/10/21/philippines-global-plastic-problem-study"
            className="hover:underline"
          >
            abs-cbn.com
          </a>
          <a
            href="https://ourworldindata.org/ocean-plastics?fbclid=IwAR3W_8BnJcBHROnPYj-N77Ie3HADyujFwdP3UmL8fiQT-iGxcsJmFZCEc4Y"
            className="hover:underline"
          >
            ourworldindata.org
          </a>
        </div>
      </div>
    </div>
  );
};

export default Rivers;
