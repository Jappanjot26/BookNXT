import BookDetails from "./BookDetails";
import BooksList from "./BooksList";
import Loading from "./Loading";

function Sections({ books, isLoading }) {
  return (
    <div className="flex p-4 justify-center gap-6 h-full w-5/6 mt-5">
      <div className="bg-section-900 w-2/6 h-full max-h-[36rem] overflow-scroll rounded-md">
        {isLoading ? <Loading /> : <BooksList books={books} />}
      </div>
      <div className="bg-section-900 w-2/6 h-full max-h-[36rem] rounded-md">
        <BookDetails id={1503212300} />
      </div>
    </div>
  );
}

export default Sections;
