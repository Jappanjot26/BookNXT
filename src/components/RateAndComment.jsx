import Rating from "./Rating";

function RateAndComment() {
  return (
    <div className="fixed inset-0 bg-black backdrop-blur-xs bg-opacity-40 flex justify-center items-center">
      <div className="text-white h-96 w-80 bg-section-900 rounded-lg p-6 flex flex-col items-center">
        <div className="text-center text-lg p-4">Share Your Thoughts</div>
        <div className="flex flex-col gap-4 p-4 bg-section-200 rounded-md w-full">
          <div className="flex items-center flex-col gap-2 bg-section-200 p-2 rounded-md ">
            <p className="text-sm text-white/50">How was the book?</p>
            <Rating size={28} />
          </div>
          <textarea
            placeholder="Comment"
            className="bg-white/90 focus:outline-none p-2 rounded-md h-24 text-slate-900"
          ></textarea>
        </div>
        <button className="bg-nav-700 p-2 rounded-md w-full my-2 hover:bg-nav-700/95 transition-all duration-150">
          Submit
        </button>
      </div>
    </div>
  );
}

export default RateAndComment;
