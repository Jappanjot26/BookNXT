import Book from "./Book";
function BooksList({ books, selectId, setSelectId }) {
  return (
    <div>
      {books &&
        books.length &&
        books.map((book) => (
          <Book
            data={book}
            key={book.id}
            selectId={selectId}
            setSelectId={setSelectId}
          />
        ))}
    </div>
  );
}

export default BooksList;
