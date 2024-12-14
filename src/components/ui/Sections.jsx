import BookDetails from "../book/BookDetails";
import BooksList from "../book/BooksList";
import ErrorComp from "../shared/ErrorComp";
import Loading from "../shared/Loading";
import RateAndComment from "./RateAndComment";
import SavedList from "../saved/SavedList";
import { useState } from "react";
function Sections({ books, isLoading, error_message }) {
  const [selectId, setSelectId] = useState(0);
  function reOpen(id) {
    setSelectId(id);
  }

  return (
    <>
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
          <BookDetails
            id={selectId}
            setSelectId={setSelectId}
            reOpen={reOpen}
          />
        </div>
      </div>
    </>
  );
}

export default Sections;
