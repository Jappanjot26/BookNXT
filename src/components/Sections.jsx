import Book from "./Book";
import BookDetails from "./BookDetails";

function Sections({ books }) {
  return (
    <div className="flex p-4 justify-center gap-10 h-5/6">
      <div className="bg-slate-900 w-2/6 h-full overflow-scroll">
        {books.map((book) => (
          <Book data={book} key={book.id} />
        ))}
      </div>
      <div className="bg-slate-900 w-2/6 h-full">
        <BookDetails />
      </div>
    </div>
  );
}

export default Sections;
