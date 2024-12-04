import BookDetails from "./BookDetails";
import BooksList from "./BooksList";
import Loading from "./Loading";

function Sections({ books, isLoading }) {
  return (
    <div className="flex p-4 justify-center gap-6 h-full pb-24 w-5/6">
      <div className="bg-section-900 w-2/6 h-full overflow-scroll rounded-md">
        {isLoading ? <Loading /> : <BooksList books={books} />}
      </div>
      <div className="bg-section-900 w-2/6 h-full rounded-md">
        <BookDetails />
      </div>
    </div>
  );
}

export default Sections;
