function Navbar({ query, setQuery }) {
  return (
    <div className="flex p-4 px-5 items-center bg-nav-900 text-white justify-between rounded-lg w-full">
      <div className="flex gap-2">
        <div className="text-lg">📕</div>
        <div className="self-center text-xl">BookNXT</div>
      </div>
      <div className="flex items-center gap-3">
        <input
          type="text"
          placeholder="Search"
          className="border-0 p-2 px-4 rounded-lg focus:outline-none focus:-translate-y-0.5 transition ease-in-out delay-150 w-80 text-gray-800 bg-nav-700 text-white shadow-lg"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        {/* <button className="">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 256 256"
            className="h-8 w-8 text-slate-900 border-2 border-white rounded-full p-1 bg-white hover:bg-gray-50"
            fill="currentColor"
          >
            <path d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"></path>
          </svg>
        </button> */}
      </div>
      <div>Found 0 results</div>
    </div>
  );
}

export default Navbar;
