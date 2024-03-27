interface Props {
  language: string;
}

const Plastic: React.FC<Props> = ({ language }) => {
  return (
    <div
      className="flex h-screen w-full justify-center bg-white py-6 text-center"
      id="plastic"
    >
      <div className="relative flex w-full max-w-screen-2xl flex-col items-center justify-center px-4">
        <div className="grid w-full gap-x-8 gap-y-12 md:grid-cols-2">
          <div className="flex flex-col justify-center gap-y-4 font-inter text-5xl font-bold uppercase md:text-7xl">
            <div>{language === "English" ? "What " : "Ano "}</div>
            <div>{language === "English" ? "is " : "ang "}</div>
            <div>{language === "English" ? "Plastic?" : "Plastik?"}</div>
          </div>
          <ul className="flex list-disc flex-col justify-center gap-x-12 gap-y-8 px-8 text-left font-openSans text-xl tracking-wider  md:text-3xl">
            {language === "English" ? (
              <>
                <li>
                  a{" "}
                  <span className="underline decoration-rose-400 decoration-4">
                    man-made material
                  </span>{" "}
                  that can be shaped into different things and doesn't easily
                  break down
                </li>
                <li>
                  has only existed for{" "}
                  <span className="underline decoration-rose-400 decoration-4">
                    116 years
                  </span>
                </li>
                <li>
                  takes anywhere from{" "}
                  <span className="underline decoration-rose-400 decoration-4">
                    20 to 500 years
                  </span>{" "}
                  to decompose
                </li>
              </>
            ) : (
              <>
                <li>
                  Isang{" "}
                  <span className="underline decoration-rose-400 decoration-4">
                    materyal na gawa ng tao
                  </span>{" "}
                  na puwedeng anyuhin sa iba't ibang bagay at hindi madaling
                  nasisira
                </li>
                <li>
                  <span className="underline decoration-rose-400 decoration-4">
                    116 taon
                  </span>{" "}
                  pa lamang ang nakalipas mula nang ito ay maimbento.
                </li>
                <li>
                  inaabot ng{" "}
                  <span className="underline decoration-rose-400 decoration-4">
                    50 to 200
                  </span>{" "}
                  taon bago ito mabulok
                </li>
              </>
            )}
          </ul>
        </div>

        <div className="absolute bottom-0 right-4 flex gap-x-8 text-sm font-light md:right-8 md:text-base">
          <a
            href="https://blog.cleanhub.com/plastic-pollution-facts"
            className="hover:underline"
          >
            cleanhub.com
          </a>
          <a
            href="https://www.un.org/en/exhibits/exhibit/in-images-plastic-forever/"
            className="hover:underline"
          >
            un.org
          </a>
        </div>
      </div>
    </div>
  );
};

export default Plastic;
