import Book from "./Book";
function BooksList({ books }) {
  return (
    <div>
      {books &&
        books.length &&
        books.map((book) => <Book data={book} key={book.id} />)}
    </div>
  );
}

export default BooksList;
