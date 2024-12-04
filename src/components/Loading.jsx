function Loading() {
  return (
    <div className="flex items-center justify-center h-full">
      <div className="flex text-white justify-center p-2 rounded-md items-center text-2xl">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 256 256"
          className="animate-spin h-7 w-7 mr-3"
        >
          <path d="M232,128a104,104,0,0,1-208,0c0-41,23.81-78.36,60.66-95.27a8,8,0,0,1,6.68,14.54C60.15,61.59,40,93.27,40,128a88,88,0,0,0,176,0c0-34.73-20.15-66.41-51.34-80.73a8,8,0,0,1,6.68-14.54C208.19,49.64,232,87,232,128Z"></path>
        </svg>
        Loading...
      </div>
    </div>
  );
}

export default Loading;