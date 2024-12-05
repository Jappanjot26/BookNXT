
import SavedBook from "./SavedBook";

function SavedList({watched}) {
  return (
    <>
      <div className="flex flex-col bg-section-200 drop-shadow-xl rounded-md py-4 px-5 gap-3 mb-4">
        <h3 className="text-white font-semibold uppercase text-base">
          Books you read
        </h3>
        <div className="text-white flex gap-4 text-base justify-between pr-6 pb-2">
          <div>#️⃣ 2 books</div>
          <div>⭐ 9.20</div>
          <div>🗨️ 2</div>
          <div>📄 150</div>
        </div>
      </div>
      {watched.map((book) => (
        <SavedBook key={book.id} book={book} />
      ))}
    </>
  );
}

export default SavedList;
