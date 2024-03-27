const Quantity = () => {
  return (
    <div className="flex h-screen w-full justify-center bg-black py-6 text-center text-white">
      <div className="relative flex w-full max-w-screen-2xl flex-col items-center justify-center px-4 ">
        <div className="mb-4 font-openSans text-lg uppercase tracking-widest md:text-2xl">
          Estimated quantity of plastics on earth
        </div>
        <div className="mb-12 text-balance font-inter text-4xl font-bold uppercase md:mb-20 md:text-7xl">
          8,300,000,000 metric tons
        </div>
        <div className="flex w-full flex-col justify-around gap-x-6 gap-y-12 text-center md:flex-row">
          <div>
            <h2 className="mb-2 text-balance font-inter text-2xl font-bold md:mb-4 md:text-3xl">
              400 million metric tons
            </h2>
            <span className="font-openSans text-sm font-light uppercase tracking-wider md:text-base">
              each year
            </span>
          </div>
          <div>
            <h2 className="mb-2 text-balance font-inter text-2xl font-bold md:mb-4 md:text-3xl">
              91%
            </h2>
            <span className="font-openSans text-sm font-light uppercase tracking-wider md:text-base">
              not recyled
            </span>
          </div>
          <div>
            <h2 className="mb-2 text-balance font-inter text-2xl font-bold md:mb-4 md:text-3xl">
              12 billion metric tons
            </h2>
            <span className="font-openSans text-sm font-light uppercase tracking-wider md:text-base">
              estimated in 2050
            </span>
          </div>
        </div>
        <div className="absolute bottom-0 right-4 flex flex-wrap justify-end gap-x-4 text-sm font-light md:right-8 md:gap-x-8 md:text-base">
          <a
            href="https://www.science.org/doi/10.1126/sciadv.1700782"
            className="hover:underline"
          >
            science.org
          </a>
          <a
            href="https://www.unenvironment.org/interactive/beat-plastic-pollution/"
            className="hover:underline"
          >
            unenvironment.org
          </a>
          <a
            href="https://www.nationalgeographic.com/science/article/plastic-produced-recycling-waste-ocean-trash-debris-environment"
            className="hover:underline"
          >
            nationalgeographic.com
          </a>
        </div>
      </div>
    </div>
  );
};

export default Quantity;
