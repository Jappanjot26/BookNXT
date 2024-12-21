import Book from "../book/Book";
function BooksList({ books, selectId, setSelectId, back}) {
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
            back={back}
          />
        ))}
    </div>
  );
}

export default BooksList;
