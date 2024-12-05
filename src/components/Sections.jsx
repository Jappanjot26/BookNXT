import BookDetails from "./BookDetails";
import BooksList from "./BooksList";
import ErrorComp from "./ErrorComp";
import Loading from "./Loading";
import SavedList from "./SavedList";
import { useState } from "react";
function Sections({ books, isLoading, error_message }) {
  const [selectId, setSelectId] = useState(0);
  return (
    <div className="flex p-4 justify-center gap-6 h-full w-5/6 mt-5">
      <div className="bg-section-900 w-2/6 h-full max-h-[36rem] overflow-scroll rounded-md">
        {isLoading && <Loading />}
        {!error_message ? (
          <BooksList
            books={books}
            selectId={selectId}
            setSelectId={setSelectId}
          />
        ) : (
          <ErrorComp err={error_message}></ErrorComp>
        )}
      </div>
      <div className="bg-section-900 w-2/6 h-full max-h-[36rem] rounded-md">
        <BookDetails id={selectId} setSelectId={setSelectId} />
      </div>
    </div>
  );
}

export default Sections;
