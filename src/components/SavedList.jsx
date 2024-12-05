
import { useState } from "react";
import SavedBook from "./SavedBook";

function SavedList({watched, finallRating, finallPage}) 
{
   return (
    <>
      <div className="flex flex-col bg-section-200 drop-shadow-xl rounded-md py-4 px-5 gap-3 mb-4">
        <h3 className="text-white font-semibold uppercase text-base">
          Books you read
        </h3>
        <div className="text-white flex gap-4 text-base justify-between pr-6 pb-2">
          <div>#️⃣ watched {watched.length}</div>
          <div>⭐ {finallRating}</div>
          <div>🗨️ 2</div>
          <div>📄 {finallPage}</div>
        </div>
      </div>
      {watched.map((book) => (
        <SavedBook key={book.id} book={book}/>
      ))}
    </>
  );
}

export default SavedList;
