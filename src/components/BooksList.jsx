import Book from "./Book";
function BooksList({ books ,setSelectId}) {
  return (
    <div>
      {books &&
        books.length &&
        books.map((book) => <Book data={book} key={book.id} setSelectId={setSelectId} />)}
    </div>
  );
}

export default BooksList;
