import { useState } from "react";
import SavedBook from "../saved/SavedBook";

function SavedList({ watched, finallRating, finallPage, removeBook, reOpen }) {
  return (
    <>
      <div className="flex h-1/6 flex-col bg-section-200 drop-shadow-xl rounded-md py-4 px-5 gap-3 mb-4 z-0">
        <h3 className="text-white font-semibold uppercase text-base">
          Books you read
        </h3>
        <div className="text-white flex gap-4 text-base justify-between pr-6 pb-2">
          <div>#️⃣ {watched.length} books</div>
          <div>
            ⭐{" "}
            {(watched.length === 0 ? 0 : finallRating / watched.length).toFixed(
              2
            )}
          </div>
          <div>
            📄
            {(watched.length === 0 ? 0 : finallPage / watched.length).toFixed(
              0
            )}
          </div>
        </div>
      </div>
      <div className="h-5/6 overflow-scroll">
        {watched.map((book) => (
          <SavedBook
            key={book.id}
            book={book}
            removeBook={removeBook}
            reOpen={reOpen}
          />
        ))}
      </div>
    </>
  );
}

export default SavedList;
