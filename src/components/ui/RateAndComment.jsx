import Rating from "../shared/Rating";

function RateAndComment({
  visible,
  onClose,
  onSetRating,
  onSetComment,
  defaultRating,
  defaultComment,
  submitRNC,
}) {
  if (!visible) return null;
  return (
    <div className="fixed inset-0 bg-black backdrop-blur-xs bg-opacity-40 flex justify-center items-center z-10">
      <div className="relative text-white h-96 w-80 bg-section-900 rounded-lg p-6 flex flex-col items-center">
        <button
          className="absolute top-4 right-4 text-white hover:text-red-500"
          onClick={() => onClose(false)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 256 256"
            className="h-5 w-5 text-white bg-red-600 rounded-full p-1 hover:bg-red-600/90 transition-all duration-150"
          >
            <path d="M208.49,191.51a12,12,0,0,1-17,17L128,145,64.49,208.49a12,12,0,0,1-17-17L111,128,47.51,64.49a12,12,0,0,1,17-17L128,111l63.51-63.52a12,12,0,0,1,17,17L145,128Z"></path>
          </svg>
        </button>
        <div className=" text-center text-lg py-4">Share Your Thoughts</div>
        <div className="flex flex-col gap-4 p-4 bg-section-200 rounded-md w-full">
          <div className="flex items-center flex-col gap-2 bg-section-200 p-2 rounded-md ">
            <p className="text-sm text-white/50">How was the book?</p>
            <Rating
              size={28}
              onSetRating={onSetRating}
              defaultRating={Number(defaultRating)}
            />
          </div>
          <textarea
            placeholder="Comment"
            value={defaultComment}
            className="bg-white/90 focus:outline-none p-2 rounded-md h-24 text-slate-900"
            onChange={(e) => onSetComment(e.target.value)}
          ></textarea>
        </div>
        <button
          className="bg-nav-700 p-2 rounded-md w-full my-2 hover:bg-nav-700/95 transition-all duration-150"
          onClick={submitRNC}
        >
          Submit
        </button>
      </div>
    </div>
  );
}

export default RateAndComment;
