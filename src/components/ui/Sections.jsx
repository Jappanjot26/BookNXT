import BookDetails from "../book/BookDetails";
import BooksList from "../book/BooksList";
import ErrorComp from "../shared/ErrorComp";
import Loading from "../shared/Loading";

import { useState } from "react";
function Sections({ books, isLoading, error_message }) {
  const [selectId, setSelectId] = useState(0);
  function reOpen(id) {
    setSelectId(id);
  }

  return (
    <>
      <div className="flex p-4 justify-center gap-6 h-full xl:w-4/6 mt-5 md:w-full md:px-0 lg:px-20 xl:px-4">
        <div className="bg-section-900 xl:w-full h-full max-h-[36rem] overflow-scroll rounded-md scroll-m-3 md:w-full">
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
        <div className="bg-section-900 xl:w-full h-full max-h-[36rem] rounded-md md:w-full">
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
