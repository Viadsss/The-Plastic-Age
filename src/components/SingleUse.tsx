import CokeBottle from "./CokeBottle";

const SingleUse = () => {
  return (
    <div className="flex h-screen w-full justify-center bg-white py-6 text-center">
      <div className="relative w-full max-w-screen-2xl px-4">
        <div className="relative flex h-full w-full justify-between">
          <div className="z-[5] flex flex-col items-center justify-center text-center md:basis-1/2 md:px-5">
            <h1 className="mb-10 bg-white/50 font-inter text-4xl font-bold uppercase md:text-6xl">
              50% of Global Plastic Production is Single-Use
            </h1>
            <p className="bg-white/50 p-2 font-openSans md:text-lg">
              Every year, 380 million tons of plastic are produced globally,
              with 50% used for single-use purposes, often lasting just minutes
              before being discarded.
            </p>
          </div>
          <div className="absolute flex h-full md:static md:basis-1/2">
            <CokeBottle />
          </div>
        </div>
        <div className="absolute bottom-0 right-4 z-[5] flex gap-x-8 text-sm font-light md:right-8 md:text-base">
          <a
            href="https://plasticoceans.org/the-facts/#:~:text=We%20have%20developed%20a%20%E2%80%9Cdisposable,just%20once%20and%20thrown%20away."
            className="hover:underline"
          >
            plasticoceans.org
          </a>
          <a
            href="https://blog.cleanhub.com/plastic-pollution-facts"
            className="hover:underline"
          >
            cleanhub.com
          </a>
        </div>
      </div>
    </div>
  );
};

export default SingleUse;
