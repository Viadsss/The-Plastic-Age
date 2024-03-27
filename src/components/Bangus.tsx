const Bangus = () => {
  return (
    <div className="flex h-screen w-full justify-center bg-white py-6 text-center">
      <div className="relative flex w-full max-w-screen-2xl flex-col items-center justify-center px-4">
        <div className="flex flex-col">
          <div className="mb-6 font-inter text-4xl font-bold uppercase tracking-wide md:text-7xl">
            You are not involved?
          </div>
          <div className="font-openSans uppercase tracking-widest text-red-600 md:text-2xl">
            97% of Filipino milkfish are contaminated with microplastics
          </div>
        </div>

        <div className="absolute bottom-0 right-4 flex gap-x-8 text-sm font-light md:right-8 md:text-base">
          <a
            href="https://newsinfo.inquirer.net/1842557/mindanao-study-finds-microplastics-in-bangus"
            className="hover:underline"
          >
            inquirer.net
          </a>
          <a
            href="https://www.techtimes.com/articles/297293/20231008/philippines-research-reveals-microplastics-popular-fish-species.htm"
            className="hover:underline"
          >
            techtimes.com
          </a>
        </div>
      </div>
    </div>
  );
};

export default Bangus;
