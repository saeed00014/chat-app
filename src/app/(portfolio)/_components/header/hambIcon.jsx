const HambIcon = ({setHamb, hamb}) => {
  return (
    <div
      onClick={() => setHamb(!hamb)}
      className="relative flex flex-col items-end justify-center h-5 w-9 gap-[5px] cursor-pointer"
    >
      <span
        className={`absolute top-0 h-[2px] ${
          hamb ? " w-7 rotate-45 top-[45%]" : " w-5"
        } bg-white transition-all ease-in-out duration-500`}
      ></span>
      <span
        className={`absolute right-0 ${
          hamb ? "w-0" : "w-9"
        }  h-[2px] bg-white transition-all ease-in-out duration-200`}
      ></span>
      <span
        className={`absolute bottom-0 h-[2px] ${
          hamb ? "w-7 -rotate-45 bottom-[45%]" : "w-7"
        } bg-white transition-all ease-in-out duration-500`}
      ></span>
    </div>
  );
};

export default HambIcon;
