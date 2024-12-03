function Navbar({ temp_query, setQuery, length }) {
  return (
    <div className="flex p-4 px-5 mb-9 items-center bg-slate-900 text-white justify-between">
      <div className="flex gap-2">
        {/* <img
          src="https://th.bing.com/th/id/R.0dd54f853a1bffb0e9979f8146268af3?rik=qTQlRtQRV5AliQ&riu=http%3a%2f%2fpluspng.com%2fimg-png%2fgoogle-logo-png-google-logo-icon-png-transparent-background-1000.png&ehk=VlcCHZ7jyV%2fCI7dZfbUl8Qb9%2f7uibkF6I6MBoqTtpRU%3d&risl=&pid=ImgRaw&r=0"
          className="h-10"
        /> */}
        <div className="text-lg">📕</div>
        <div className="self-center text-xl">BookNXT</div>
      </div>
      <div className="flex items-center gap-3">
        <input
          type="text"
          placeholder="Search"
          className="border-0 p-2 px-4 rounded-lg focus:outline-slate-800 w-80 text-gray-800" // Adjusted text color and background
          value={temp_query}
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
