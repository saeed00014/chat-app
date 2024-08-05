const HocWraper = ({ children }) => {
  return (
    <div className="fixed left-0 right-0 bottom-0 top-[80px] flex justify-center items-center md:px-4 px-2 overflow-y-auto">
      {children}
    </div>
  );
};

export default HocWraper;
