import { useState } from "react";
import BookDetails from "../book/BookDetails";
import BooksList from "../book/BooksList";
import ErrorComp from "../shared/ErrorComp";
import Loading from "../shared/Loading";
import SavedComp from "../saved/SavedComp";

function Sections({ books, isLoading, error_message }) {
  const [selectId, setSelectId] = useState(0);
  const [watched, setWatched] = useState([]);
  const [singleSaveBook, setSingleSaveBook] = useState(null); // Initialize as null

  function testFub(id) {
    const match = watched.find((item) => item.id === id);
    setSingleSaveBook(match); // Update with match or reset to null
  }

  function reOpen(id) {
    testFub(id);
  }

  function back() {
    setSingleSaveBook(null);
  }

  return (
    <>
      <div className="flex p-4 justify-center gap-6 h-full xl:w-4/6 mt-5 md:w-full md:px-0 lg:px-20 xl:px-4 max-sm:flex-col max-sm:gap-2 max-sm:px-1">
        <div className="bg-section-900 xl:w-full h-full max-h-[36rem]  overflow-scroll rounded-md scroll-m-3 md:w-full max-sm:max-h-48 ">
          {isLoading && <Loading />}
          {!error_message ? (
            <BooksList
              books={books}
              selectId={selectId}
              setSelectId={setSelectId}
              back={back}
            />
          ) : (
            <ErrorComp err={error_message}></ErrorComp>
          )}
        </div>
        <div className="bg-section-900 xl:w-full h-full max-h-[36rem] rounded-md md:w-full max-sm:w-full max-sm:max-h-[20rem] overflow-scroll ">
          {singleSaveBook ? (
            <SavedComp
              watched={watched}
              setWatched={setWatched}
              singleSaveBook={singleSaveBook}
              back={back}
            ></SavedComp>
          ) : (
            <BookDetails
              id={selectId}
              setSelectId={setSelectId}
              reOpen={reOpen}
              watched={watched}
              setWatched={setWatched}
            />
          )}
        </div>
      </div>
    </>
  );
}

export default Sections;
