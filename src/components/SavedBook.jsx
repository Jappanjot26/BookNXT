function SavedBook({ book }) {
  return (
    <div className="text-white border-b-2  border-translucent m-2 px-4 pt-2 pb-4 flex gap-5">
      <img src={book.image} alt={book.title} className="h-18 w-12" />
      <div className="flex flex-col gap-2 w-full">
        <h1 className="text-base font-semibold">{book.title}</h1>
        <div className="flex gap-4 w-full items-center">
          <span className="w-1/3">⭐ {book.rating}</span>
          <span className="w-1/3">📄 {book.pages}</span>
          <button className="flex w-1/3 justify-end">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 256 256"
              className="h-5 w-5 bg-red-600 rounded-full p-1 hover:bg-red-700"
            >
              <path d="M208.49,191.51a12,12,0,0,1-17,17L128,145,64.49,208.49a12,12,0,0,1-17-17L111,128,47.51,64.49a12,12,0,0,1,17-17L128,111l63.51-63.52a12,12,0,0,1,17,17L145,128Z"></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default SavedBook;
