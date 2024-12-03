import Book from "./Book";
import BookDetails from "./BookDetails";
import BooksList from "./BooksList";

function Sections({ books, isLoading }) {
  return (
    <div className="flex p-4 justify-center gap-10 h-5/6">
      <div className="bg-slate-900 w-2/6 h-full overflow-scroll">
        {!isLoading && <BooksList books={books} />}
      </div>
      <div className="bg-slate-900 w-2/6 h-full">
        <BookDetails />
      </div>
    </div>
  );
}

export default Sections;
