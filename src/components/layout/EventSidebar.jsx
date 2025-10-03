    const Sidebar = ({ filters, selected, onSelect }) => {
  return (
     <>
    
    <div className="w-50 ms-3 flex flex-col bg-[#FFE5D0] gap-1">
        <p className="text-[#FF7043] font-bold text-xl sm:text-2xl md:text-4xl  mb-0">
          Events
        </p>
        <div className="h-1 w-[120px] bg-yellow-300  rounded-md mb-4"/>
      {filters.map(filter => (
        <button
          key={filter}
          onClick={() => onSelect(filter)}
          className={`px-3 py-2 rounded-md cursor-pointer text-sm md:text-base text-left font-medium
            ${selected === filter
              ? 'bg-[#FF7043] text-white'
              : ' hover:bg-[#f4bba9] text-black '}`}
        >
          {filter}
        </button>
      ))}
    </div>
     </>
  );
};

export default Sidebar;
